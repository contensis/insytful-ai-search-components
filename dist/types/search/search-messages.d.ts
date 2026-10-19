import { default as React } from 'react';
import { AIMessage } from '../api/types';
import { SearchSkeletonProps } from './skeleton';
import { SearchOverviewFeedback, SearchOverviewReportingProps } from './feedback-reporting';
import { VoteStateHandle } from './vote-state';
export type MessageProps = {
    message: AIMessage;
    logo?: React.ReactNode;
    renderContent?: (content: string) => React.ReactNode;
    showSkeleton?: boolean;
    elapsed?: SearchSkeletonProps["elapsed"];
    searching?: SearchSkeletonProps['messages'];
    /** Helpful / unhelpful vote under a finished answer. */
    feedback?: SearchOverviewFeedback;
    /** Replaces the feedback row's label and vote buttons. */
    renderReporting?: (props: SearchOverviewReportingProps) => React.ReactNode;
    /** Where votes are sent; needed alongside `feedback` for the vote buttons. */
    voteOptions?: {
        config: string;
        aggregated?: boolean;
        apiUrl: string;
    };
    /** This answer is still streaming: no feedback row yet. */
    isStreaming?: boolean;
    /** This answer failed: no footer. */
    isFailed?: boolean;
    /** Shared vote state (see useVoteState), so votes survive a remount. */
    voteState?: VoteStateHandle;
    /** Shown below the feedback row. */
    disclaimer?: React.ReactNode;
};
export declare function Message({ message, logo, renderContent, showSkeleton, elapsed, searching, feedback, renderReporting, voteOptions, isStreaming, isFailed, voteState, disclaimer, }: MessageProps): React.JSX.Element;
export type SearchMessagesProps = {
    className?: string;
    searching?: SearchSkeletonProps['messages'];
    /** Helpful / unhelpful vote under each finished answer. On by default;
     *  pass `false` to turn it off. */
    feedback?: SearchOverviewFeedback | false;
    /** Replaces the feedback row's label and vote buttons. The library still
     *  sends, rolls back and announces votes; call `setVote`. */
    renderReporting?: (props: SearchOverviewReportingProps) => React.ReactNode;
    /** Rendered below each finished answer's feedback row. Use instead of
     *  Search.Disclaimer, not alongside it. */
    disclaimer?: React.ReactNode;
    children?: React.ReactNode;
};
export declare function SearchMessages({ className, searching, feedback, renderReporting, disclaimer, children, }: SearchMessagesProps): React.JSX.Element | null;
export declare namespace SearchMessages {
    var displayName: string;
}
