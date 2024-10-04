import React, { useState, useEffect } from 'react';
import { useAppState } from '../hooks/useAppState';
import { validateVote } from '../utils/helpers';
import {Team} from "../types/Team.ts";
import APIService from "../services/APIService.ts";
import {Vote} from "../types/Vote.ts";
import {Card} from "@/components/ui/card.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";

const VotingScreen: React.FC = () => {
    const [teams, setTeams] = useState<Team[]>([]);
    const [currentTeamIndex, setCurrentTeamIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [feedback, setFeedback] = useState('');
    const { currentHackathon } = useAppState();
    const apiService = APIService;

    useEffect(() => {
        const fetchTeams = async () => {
            if (currentHackathon) {
                const fetchedTeams = await apiService.getTeams(currentHackathon.id);
                setTeams(fetchedTeams);
            }
        };
        fetchTeams();
    }, [currentHackathon]);

    const handleSubmitVote = async () => {
        const currentTeam = teams[currentTeamIndex];
        const vote: Vote = {
            teamId: currentTeam.id,
            score,
            feedback,
        };

        if (validateVote(vote)) {
            try {
                await apiService.submitVote(vote);
                // Move to next team or finish voting
                if (currentTeamIndex < teams.length - 1) {
                    setCurrentTeamIndex(currentTeamIndex + 1);
                    setScore(0);
                    setFeedback('');
                } else {
                    // Handle end of voting (e.g., show summary, navigate to results)
                }
            } catch (error) {
                console.error('Vote submission failed:', error);
                // Handle error (e.g., show error message to user)
            }
        } else {
            // Handle invalid vote (e.g., show validation error to user)
        }
    };

    if (teams.length === 0) return <div>Loading teams...</div>;

    const currentTeam = teams[currentTeamIndex];

    return (
        <Card>
            <h1>Vote for Team</h1>
            <h2>{currentTeam.name} - {currentTeam.projectName}</h2>
            <Input
                type="number"
                value={score}
                onChange={(e) => setScore(Number(e.target.value))}
                min={0}
                max={10}
                placeholder="Score (0-10)"
            />
            <Input
                type="text"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Feedback"
            />
            <Button onClick={handleSubmitVote}>Submit Vote</Button>
        </Card>
    );
};

export default VotingScreen;