import { default as React } from 'react';
export type SearchOverviewVote = "helpful" | "unhelpful";
type VoteStatus = "thanks" | "removed" | "failed";
/** One answer's vote, keyed on its `mid` in VoteState. */
export type VoteEntry = {
    vote: SearchOverviewVote | null;
    status: VoteStatus | null;
    /** 400/404: not eligible, or the 7-day window has passed. Hides the buttons. */
    ineligible?: boolean;
};
type VoteState = Record<string, VoteEntry>;
export type VoteStateHandle = [VoteState, React.Dispatch<React.SetStateAction<VoteState>>];
/**
 * Vote state for a list of answers, keyed on `mid`; pass the result to each
 * FeedbackReporting. Own it above anything that unmounts (e.g. Overview
 * follow-ups while collapsed): there is no read endpoint to recover a vote.
 */
export declare const useVoteState: () => VoteStateHandle;
export {};
