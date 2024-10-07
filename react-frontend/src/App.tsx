import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {VotingScreen} from "@/components/VotingScreen.tsx";
import {Toaster} from "@/components/ui/toaster.tsx";
import {ConnectionScreen} from "@/components/ConnectionScreen.tsx";
import LandingScreen from "@/components/LandingScreen.tsx";

const App: React.FC = () => {
    return <Router basename={import.meta.env.BASE_URL}>
        <Routes>
            <Route path="/" element={<LandingScreen/>}/>
            <Route path="/connect" element={<ConnectionScreen/>}/>
            <Route path="/vote" element={<VotingScreen/>}/>
        </Routes>
        <Toaster/>
    </Router>;
};

export default App;