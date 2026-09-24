/**
 * Answer voting — PUT / DELETE `/sessions/:config/:sid/:mid/vote`.
 *
 * `lib/shared/` invariants: no React imports; no module-top-level window/DOM
 * access — importable by both entry points.
 */

import { debug } from "./debug";

export type VoteRating = "helpful" | "unhelpful";
/** Everything needed to address one answer's vote. `mid` comes from the
 *  answer's `done` frame, `sid` from the response's `X-Session-Id` header. */
export type VoteTarget = { baseUrl: string; config: string; sid: string; mid: string };
/** `retryable: false` (400/404) means the answer can't be voted on: hide the control. */
export type VoteResult = { ok: true } | { ok: false; retryable: boolean };

const getVoteUrl = ({ baseUrl, config, sid, mid }: VoteTarget) =>
  `${baseUrl}/sessions/${encodeURIComponent(config)}/${encodeURIComponent(sid)}/${encodeURIComponent(mid)}/vote`;

/** PUT a rating, or DELETE (retract) when `rating` is null. */
export async function onSendVote(target: VoteTarget, rating: VoteRating | null, comment?: string): Promise<VoteResult> {
  try {
    const url = getVoteUrl(target);
    const res = await fetch(
      url,
      rating
        ? {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ rating, ...(comment ? { comment } : {}) }),
          }
        : { method: "DELETE" },
    );
    debug("vote", res.status, url);
    if (res.ok) return { ok: true };
    return { ok: false, retryable: res.status === 429 || res.status >= 500 };
  } catch (err) {
    debug("vote", "network error (CORS?)", err);
    return { ok: false, retryable: true }; // network error
  }
}

/** `mid` from a `done` frame; absent when the answer wasn't substantive. */
export function midFromDoneData(data: string): string | undefined {
  try {
    const mid = JSON.parse(data)?.mid;
    return typeof mid === "string" && mid ? mid : undefined;
  } catch {
    return undefined; // dataless `done` is valid
  }
}
