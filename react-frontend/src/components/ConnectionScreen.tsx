import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppState } from '../hooks/useAppState';
import APIService from "../services/APIService.ts";
import {Card} from "@/components/ui/card.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";

const ConnectionScreen: React.FC = () => {
    const [connectionKey, setConnectionKey] = useState('');
    const { setCurrentHackathon } = useAppState();
    const navigate = useNavigate();
    const apiService = APIService

    const handleConnection = async () => {
        try {
            const response = await apiService.connect(connectionKey);
            setCurrentHackathon(response.hackathon);
            navigate('/vote');
        } catch (error) {
            console.error('Connection failed:', error);
            // Handle error (e.g., show error message to user)
        }
    };

    return (
        <Card>
            <h1>Connect to Hackathon</h1>
            <Input
                type="text"
                value={connectionKey}
                onChange={(e) => setConnectionKey(e.target.value)}
                placeholder="Enter connection key"
            />
            <Button onClick={handleConnection}>Connect</Button>
        </Card>
    );
};

export default ConnectionScreen;