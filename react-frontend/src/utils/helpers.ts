import {Vote} from "../types/Vote.ts";

export const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    }).format(date);
};

export const validateVote = (vote: Vote): boolean => {
    if (!vote.teamId || typeof vote.teamId !== 'string') {
        return false;
    }

    if (typeof vote.score !== 'number' || vote.score < 1 || vote.score > 10) {
        return false;
    }

    if (typeof vote.feedback !== 'string' || vote.feedback.length < 10) {
        return false;
    }

    return true;
};