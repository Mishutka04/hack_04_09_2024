import axios, {AxiosInstance} from 'axios';
import {Vote} from "../types/Vote.ts";
import {Team} from "../types/Team.ts";
import {ConnectionResponse} from "@/types/ConnectionResponse.ts";
import {VoteResponse} from "@/types/VoteResponse.ts";

const mockCreateUser = () => {
    return new Promise<string>(resolve => {
        setTimeout(() => {
            resolve('mock-token-12345');
        }, 2000);
    });
}

const mockSubmitVote = () => {
    return new Promise<VoteResponse>(resolve => {
        setTimeout(() => {
            resolve({
                success: true,
                message: 'Mock vote submitted successfully'
            });
        }, 2000);
    });
}

const mockGetTeams = () => {
    return new Promise<Team[]>((resolve) => {
        setTimeout(() => {
            const teams = [
                {id: 'team-a', name: 'Team A'},
                {id: 'team-b', name: 'Team B'},
                {id: 'team-c', name: 'Team C'},
                {id: 'team-d', name: 'Team D'},
                {id: 'team-e', name: 'Team E'},
            ];

            // Shuffle the teams array to sort them in random order
            for (let i = teams.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [teams[i], teams[j]] = [teams[j], teams[i]];
            }

            resolve(teams);
        }, 1000); // Simulate network delay
    });
}

const mockConnect = () => {
    return new Promise<ConnectionResponse>(resolve => {
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
            return mockCreateUser();
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
            return mockConnect();
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
            return mockGetTeams();
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
            return mockSubmitVote();
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