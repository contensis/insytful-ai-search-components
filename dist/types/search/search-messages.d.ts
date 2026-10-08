import { default as React } from 'react';
import { AIMessage } from '../api/types';
import { SearchSkeletonProps } from './skeleton';
import { SearchOverviewFeedback } from './feedback-reporting';
import { VoteStateHandle } from './vote-state';
export type MessageProps = {
    message: AIMessage;
    logo?: React.ReactNode;
    renderContent?: (content: string) => React.ReactNode;
    showSkeleton?: boolean;
    elapsed?: SearchSkeletonProps["elapsed"];
    searching?: SearchSkeletonProps['messages'];
    /** Report link + helpful / unhelpful vote under a finished answer. */
    feedback?: SearchOverviewFeedback;
    /** Where votes are sent; needed alongside `feedback` for the vote buttons. */
    voteOptions?: {
        config?: string;
        searchConfig?: string;
        baseUrl: string;
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
export declare function Message({ message, logo, renderContent, showSkeleton, elapsed, searching, feedback, voteOptions, isStreaming, isFailed, voteState, disclaimer, }: MessageProps): React.JSX.Element;
export type SearchMessagesProps = {
    className?: string;
    searching?: SearchSkeletonProps['messages'];
    /** Report link + helpful / unhelpful vote under each finished answer. */
    feedback?: SearchOverviewFeedback;
    /** Rendered below each finished answer's feedback row. Use instead of
     *  Search.Disclaimer, not alongside it. */
    disclaimer?: React.ReactNode;
    children?: React.ReactNode;
};
export declare function SearchMessages({ className, searching, feedback, disclaimer, children, }: SearchMessagesProps): React.JSX.Element | null;
export declare namespace SearchMessages {
    var displayName: string;
}
