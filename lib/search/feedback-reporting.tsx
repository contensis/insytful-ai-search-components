import React from "react";
import { debug } from "../shared/debug";
import { onSendVote, type VoteTarget } from "../shared/vote";
import { useVoteState, type SearchOverviewVote, type VoteEntry, type VoteStateHandle } from "./vote-state";

export type { SearchOverviewVote };

/** Optional feedback row under the answer: a "report" link and a
 *  helpful / unhelpful vote. Votes are sent to the AI Search vote API; the
 *  host is only told about them (e.g. for analytics) via `onVote`. */
export type SearchOverviewFeedback = {
  /** Link shown before the vote buttons, e.g. "Report an error". */
  report?: { text: string; href: string; newTab?: boolean };
  /** Called after the API accepts a vote (null = retracted). For host analytics. */
  onVote?: (vote: SearchOverviewVote | null, ctx: { mid: string }) => void;
  /** Button contents. Defaults to thumb icons with visually-hidden text. */
  helpful?: React.ReactNode;
  unhelpful?: React.ReactNode;
  /** Announced (role="status") once a vote is cast. Defaults to
   *  "Thanks for your feedback". */
  thanks?: React.ReactNode;
};

type FeedbackReportingProps = {
  feedback: SearchOverviewFeedback;
  /** Render nothing but keep the vote state (e.g. while collapsed). */
  hidden?: boolean;
  /** Where the vote is sent. Absent when the answer wasn't substantive (no
   *  `mid`): the report link still renders, the vote buttons don't. */
  target?: VoteTarget;
  /** Vote state owned by a parent (from useVoteState), so it survives this
   *  row unmounting, e.g. a follow-up while the Overview is collapsed. There
   *  is no read endpoint, so state lost here can't be recovered. Omit to keep
   *  it local. */
  voteState?: VoteStateHandle;
};


/**
 * Feedback row under a Search.Overview answer: an optional report link and a
 * Helpful / Unhelpful vote sent to the vote API.
 *
 * Clicking the other button changes the vote; clicking the pressed one
 * retracts it. The UI updates optimistically and rolls back if the request
 * fails; a 400/404 (not eligible, or the 7-day window has passed) hides the
 * buttons for that answer. Vote state is keyed on the answer's `mid`, so a
 * new answer reads as unvoted with no effect needed to reset it.
 *
 * Hook classes: `insytful-search-overview-feedback`, `-feedback-report`,
 * `-feedback-votes`, `-feedback-vote[data-vote]`, `-feedback-status`.
 */
export function FeedbackReporting({ feedback, hidden = false, target, voteState }: FeedbackReportingProps) {
  const localVoteState = useVoteState();
  const [votes, setVotes] = voteState ?? localVoteState;
  const [pending, setPending] = React.useState(false);
  const rowRef = React.useRef<HTMLDivElement>(null);
  const reportRef = React.useRef<HTMLAnchorElement>(null);
  // Set when a 400/404 removes the buttons while one had focus: move focus to
  // the report link (or the row) so it isn't dropped to <body>.
  const restoreFocusRef = React.useRef(false);
  const current = target ? votes[target.mid] : undefined;
  const vote = current?.vote ?? null;
  const isVotingAllowed = !!target && !current?.ineligible;

  const setEntry = (mid: string, entry: VoteEntry) => setVotes((prev) => ({ ...prev, [mid]: entry }));

  React.useLayoutEffect(() => {
    if (isVotingAllowed || !restoreFocusRef.current) return;
    restoreFocusRef.current = false;
    (reportRef.current ?? rowRef.current)?.focus();
  }, [isVotingAllowed]);

  const castVote = async (clicked: SearchOverviewVote) => {
    if (!target || pending) return;
    const { mid } = target;
    const next = vote === clicked ? null : clicked; // same button again = retract
    const prev = vote;
    setEntry(mid, { vote: next, status: null }); // optimistic
    setPending(true);
    debug("vote", next ? "PUT" : "DELETE", { mid, rating: next });
    const result = await onSendVote(target, next);
    setPending(false);
    debug("vote", "result", { mid, ...result });
    if (result.ok) {
      setEntry(mid, { vote: next, status: next ? "thanks" : "removed" });
      try {
        feedback.onVote?.(next, { mid });
      } catch (err) {
        // A host analytics bug mustn't surface as an unhandled rejection.
        console.error("Search feedback onVote threw", err);
      }
      return;
    }
    // Roll back; a 400/404 means the vote window closed or it isn't eligible.
    if (!result.retryable) restoreFocusRef.current = !!rowRef.current?.contains(document.activeElement);
    setEntry(mid, {
      vote: prev,
      status: result.retryable ? "failed" : "unavailable",
      ineligible: !result.retryable,
    });
  };

  if (hidden) return null;

  return (
    <div className="insytful-search-overview-feedback" ref={rowRef} tabIndex={-1}>
      {feedback.report && (
        <a
          ref={reportRef}
          className="insytful-search-overview-feedback-report"
          href={feedback.report.href}
          {...(feedback.report.newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {feedback.report.text}
          {feedback.report.newTab && (
            <>
              {" "}
              <span className="insytful-sr-only">(opens in a new tab)</span>
            </>
          )}
        </a>
      )}
      {isVotingAllowed && (
        <div className="insytful-search-overview-feedback-votes" role="group" aria-label="Was this response helpful?">
          <button
            type="button"
            className="insytful-search-overview-feedback-vote"
            data-vote="helpful"
            aria-pressed={vote === "helpful"}
            aria-disabled={pending}
            onClick={() => castVote("helpful")}
          >
            {feedback.helpful ?? (
              <>
                <ThumbUpIcon />
                <span className="insytful-sr-only">Helpful</span>
              </>
            )}
          </button>
          <button
            type="button"
            className="insytful-search-overview-feedback-vote"
            data-vote="unhelpful"
            aria-pressed={vote === "unhelpful"}
            aria-disabled={pending}
            onClick={() => castVote("unhelpful")}
          >
            {feedback.unhelpful ?? (
              <>
                <ThumbDownIcon />
                <span className="insytful-sr-only">Unhelpful</span>
              </>
            )}
          </button>
        </div>
      )}
      <div className="insytful-search-overview-feedback-status insytful-sr-only" role="status">
        {current?.status === "thanks" && (feedback.thanks ?? "Thanks for your feedback")}
        {current?.status === "removed" && "Feedback removed"}
        {current?.status === "failed" && "Couldn't send your feedback, please try again"}
        {current?.status === "unavailable" && "Feedback isn't available for this answer"}
      </div>
    </div>
  );
}

const ThumbUpIcon = () => (
  <svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 10v11H4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h3Zm0 0 4.5-7a2.3 2.3 0 0 1 2.1 3.2L12.7 9H19a2 2 0 0 1 2 2.3l-1.2 7.6A2.5 2.5 0 0 1 17.3 21H7"
    />
  </svg>
);

const ThumbDownIcon = () => (
  <svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 14V3h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-3Zm0 0-4.5 7a2.3 2.3 0 0 1-2.1-3.2l.9-2.8H5a2 2 0 0 1-2-2.3l1.2-7.6A2.5 2.5 0 0 1 6.7 3H17"
    />
  </svg>
);