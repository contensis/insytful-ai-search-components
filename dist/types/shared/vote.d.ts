/**
 * Answer voting — PUT / DELETE `/sessions/:config/:sid/:mid/vote`. An
 * aggregated search's votes are keyed on its slug, which is its `config`.
 *
 * `lib/shared/` invariants: no React imports; no module-top-level window/DOM
 * access — importable by both entry points.
 */
export type VoteRating = "helpful" | "unhelpful";
/** Everything needed to address one answer's vote. `mid` comes from the
 *  answer's `done` frame, `sid` from the response's `X-Session-Id` header. */
export type VoteTarget = {
    apiUrl: string;
    config: string;
    sid: string;
    mid: string;
};
/** `retryable: false` (400/404) means the answer can't be voted on: hide the control. */
export type VoteResult = {
    ok: true;
} | {
    ok: false;
    retryable: boolean;
};
/** PUT a rating, or DELETE (retract) when `rating` is null. */
export declare function onSendVote(target: VoteTarget, rating: VoteRating | null, comment?: string): Promise<VoteResult>;
/** `mid` from a `done` frame; absent when the answer wasn't substantive. */
export declare function midFromDoneData(data: string): string | undefined;
