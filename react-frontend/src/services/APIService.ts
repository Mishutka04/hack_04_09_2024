import axios, {AxiosInstance} from 'axios';
import {ConnectionResponse, Vote, VoteResponse} from "../types/Vote.ts";
import {Team} from "../types/Team.ts";

class APIService {
    private api: AxiosInstance;

    constructor() {
        this.api = axios.create({
            baseURL: import.meta.env.VITE_API_BASE_URL,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    async createUser(username: string, hackathonId: string): Promise<string> {
        try {
            const response = await this.api.post<{ token: string }>('/users', {username, hackathonId});
            return response.data.token;
        } catch (error) {
            console.error('Error creating user:', error);
            throw error;
        }
    }

    async connect(key: string): Promise<ConnectionResponse> {
        try {
            const response = await this.api.post<ConnectionResponse>('/connect', {key});
            return response.data;
        } catch (error) {
            console.error('Error connecting to hackathon:', error);
            throw error;
        }
    }

    async getTeams(hackathonId: string): Promise<Team[]> {
        try {
            const response = await this.api.get<Team[]>(`/hackathons/${hackathonId}/teams`);
            return response.data;
        } catch (error) {
            console.error('Error fetching teams:', error);
            throw error;
        }
    }

    async submitVote(vote: Vote): Promise<VoteResponse> {
        try {
            const response = await this.api.post<VoteResponse>('/votes', vote);
            return response.data;
        } catch (error) {
            console.error('Error submitting vote:', error);
            throw error;
        }
    }
}

export default new APIService();