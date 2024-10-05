import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {AppStateProvider} from "./hooks/useAppState.tsx";
import {VotingScreen} from "@/components/VotingScreen.tsx";
import {Toaster} from "@/components/ui/toaster.tsx";
import {ConnectionScreen} from "@/components/ConnectionScreen.tsx";
import LandingScreen from "@/components/LandingScreen.tsx";

const App: React.FC = () => {
    return (
        <AppStateProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<LandingScreen/>}/>
                    <Route path="/connect" element={<ConnectionScreen/>}/>
                    <Route path="/vote" element={<VotingScreen/>}/>
                </Routes>
            </Router>
            <Toaster/>
        </AppStateProvider>
    );
};

export default App;