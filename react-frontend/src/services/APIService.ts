import axios, {AxiosInstance} from 'axios';
import {Vote} from "../types/Vote.ts";
import {Team} from "../types/Team.ts";
import {ConnectionResponse} from "@/types/ConnectionResponse.ts";
import {VoteResponse} from "@/types/VoteResponse.ts";

class APIService {
    private api: AxiosInstance;
    private isMock: boolean = true;

    constructor() {
        this.api = axios.create({
            baseURL: import.meta.env.VITE_API_BASE_URL,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    async createUser(username: string, hackathonId: string): Promise<string> {
        if (this.isMock) {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve('mock-token-12345');
                }, 2000);
            });
        }

        try {
            const response = await this.api.post<{ token: string }>('/users', {username, hackathonId});
            return response.data.token;
        } catch (error) {
            console.error('Error creating user:', error);
            throw error;
        }
    }

    async connect(key: string): Promise<ConnectionResponse> {
        if (this.isMock) {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve({
                        success: true,
                        hackathon: {
                            id: "1234",
                            name: "Mock Hackathon",
                            startDate: new Date("2023-01-01"),
                            endDate: new Date("2023-01-02")
                        }
                    });
                }, 2000);
            });
        }

        try {
            const response = await this.api.post<ConnectionResponse>('/connect', {key});
            return response.data;
        } catch (error) {
            console.error('Error connecting to hackathon:', error);
            throw error;
        }
    }

    async getTeams(hackathonId: string): Promise<Team[]> {
        if (this.isMock) {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve([
                        {id: 'team1', name: 'Mock Team 1'},
                        {id: 'team2', name: 'Mock Team 2'},
                    ]);
                }, 2000);
            });
        }

        try {
            const response = await this.api.get<Team[]>(`/hackathons/${hackathonId}/teams`);
            return response.data;
        } catch (error) {
            console.error('Error fetching teams:', error);
            throw error;
        }
    }

    async submitVote(vote: Vote): Promise<VoteResponse> {
        if (this.isMock) {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve({
                        success: true,
                        message: 'Mock vote submitted successfully'
                    });
                }, 2000);
            });
        }

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