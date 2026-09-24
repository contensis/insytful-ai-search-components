import { default as React } from 'react';
import { VoteTarget } from '../shared/vote';
import { SearchOverviewVote, VoteStateHandle } from './vote-state';
export type { SearchOverviewVote };
/** Optional feedback row under the answer: a "report" link and a
 *  helpful / unhelpful vote. Votes are sent to the AI Search vote API; the
 *  host is only told about them (e.g. for analytics) via `onVote`. */
export type SearchOverviewFeedback = {
    /** Link shown before the vote buttons, e.g. "Report an error". */
    report?: {
        text: string;
        href: string;
        newTab?: boolean;
    };
    /** Called after the API accepts a vote (null = retracted). For host analytics. */
    onVote?: (vote: SearchOverviewVote | null, ctx: {
        mid: string;
    }) => void;
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
export declare function FeedbackReporting({ feedback, hidden, target, voteState }: FeedbackReportingProps): React.JSX.Element | null;
