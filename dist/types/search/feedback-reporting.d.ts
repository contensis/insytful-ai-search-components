import { default as React } from 'react';
import { VoteTarget } from '../shared/vote';
import { SearchOverviewVote, VoteStateHandle } from './vote-state';
export type { SearchOverviewVote };
/** Feedback row under the answer: a helpful / unhelpful vote. Votes are sent
 *  to the AI Search vote API; the host is only told about them (e.g. for
 *  analytics) via `onVote`. To change the row, use `renderReporting`. */
export type SearchOverviewFeedback = {
    /** Called after the API accepts a vote (null = retracted). For host analytics. */
    onVote?: (vote: SearchOverviewVote | null, ctx: {
        mid: string;
    }) => void;
};
/** Props handed to `renderReporting`. The library still sends the vote,
 *  rolls it back on failure and announces the result; the renderer only
 *  draws the controls. */
export type SearchOverviewReportingProps = {
    /** The current vote, null if none. */
    vote: SearchOverviewVote | null;
    /** False when the answer wasn't substantive (no `mid`) or the API refused
     *  it (400/404): render no vote controls. */
    isVotingAllowed: boolean;
    /** A vote is being sent; ignore clicks (setVote already does). */
    pending: boolean;
    /** Sends the vote. Setting the current vote again retracts it. */
    setVote: (vote: SearchOverviewVote) => void;
};
type FeedbackReportingProps = {
    feedback: SearchOverviewFeedback;
    /** Replaces the row's label and vote buttons. */
    renderReporting?: (props: SearchOverviewReportingProps) => React.ReactNode;
    /** Render nothing but keep the vote state (e.g. while collapsed). */
    hidden?: boolean;
    /** Where the vote is sent. Absent when the answer wasn't substantive (no
     *  `mid`): the vote buttons don't render. */
    target?: VoteTarget;
    /** Vote state owned by a parent (from useVoteState), so it survives this
     *  row unmounting, e.g. a follow-up while the Overview is collapsed. There
     *  is no read endpoint, so state lost here can't be recovered. Omit to keep
     *  it local. */
    voteState?: VoteStateHandle;
};
/**
 * Feedback row under a Search.Overview or Search.Messages answer: a "Was this
 * helpful?" label and a Helpful / Unhelpful vote sent to the vote API.
 *
 * Clicking the other button changes the vote; clicking the pressed one
 * retracts it. The UI updates optimistically and rolls back if the request
 * fails; a 400/404 (not eligible, or the 7-day window has passed) hides the
 * buttons for that answer. Vote state is keyed on the answer's `mid`, so a
 * new answer reads as unvoted with no effect needed to reset it.
 *
 * Hook classes: `insytful-search-overview-feedback`, `-feedback-label`,
 * `-feedback-votes`, `-feedback-vote[data-vote]`, `-feedback-status`.
 */
export declare function FeedbackReporting({ feedback, renderReporting, hidden, target, voteState }: FeedbackReportingProps): React.JSX.Element | null;
