import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {AppStateProvider} from "./hooks/useAppState.tsx";
import {VotingScreenX} from "@/components/VotingScreenX.tsx";
import {Toaster} from "@/components/ui/toaster.tsx";
import {ConnectionScreenX} from "@/components/ConnectionScreenX.tsx";

const App: React.FC = () => {
    return (
        <AppStateProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<ConnectionScreenX/>}/>
                    <Route path="/vote" element={<VotingScreenX/>}/>
                </Routes>
            </Router>
            <Toaster/>
        </AppStateProvider>
    );
};

export default App;