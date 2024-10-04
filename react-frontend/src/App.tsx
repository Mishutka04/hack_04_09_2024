import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ConnectionScreen from './components/ConnectionScreen.tsx';
import VotingScreen from './components/VotingScreen.tsx';
import {AppStateProvider} from "./hooks/useAppState.tsx";

const App: React.FC = () => {
    return (
        <AppStateProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<ConnectionScreen />} />
                    <Route path="/vote" element={<VotingScreen />} />
                </Routes>
            </Router>
        </AppStateProvider>
    );
};

export default App;