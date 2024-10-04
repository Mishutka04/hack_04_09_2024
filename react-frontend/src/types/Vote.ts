import {Hackathon} from "./Hackaton.ts";

export interface Vote {
    teamId: string;
    score: number;
    feedback: string;
}

export interface ConnectionResponse {
    success: boolean;
    hackathon: Hackathon;
}

export interface VoteResponse {
    success: boolean;
    message: string;
}