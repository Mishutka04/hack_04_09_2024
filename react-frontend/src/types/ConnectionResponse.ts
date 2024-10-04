import {Hackathon} from "@/types/Hackaton.ts";

export interface ConnectionResponse {
    success: boolean;
    hackathon: Hackathon;
}