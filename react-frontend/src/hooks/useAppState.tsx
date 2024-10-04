import React, { createContext, useContext, useState } from 'react';
import {Hackathon} from "../types/Hackaton.ts";
import {Team} from "../types/Team.ts";

interface AppStateContextType {
    currentHackathon: Hackathon | null;
    currentTeam: Team | null;
    setCurrentHackathon: (hackathon: Hackathon) => void;
    setCurrentTeam: (team: Team) => void;
}

const AppStateContext = createContext<AppStateContextType | undefined>(undefined);

export const AppStateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [currentHackathon, setCurrentHackathon] = useState<Hackathon | null>(null);
    const [currentTeam, setCurrentTeam] = useState<Team | null>(null);

    return (
        <AppStateContext.Provider
            value={{
                currentHackathon,
                currentTeam,
                setCurrentHackathon,
                setCurrentTeam,
            }}
        >
            {children}
        </AppStateContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppState = () => {
    const context = useContext(AppStateContext);
    if (context === undefined) {
        throw new Error('useAppState must be used within an AppStateProvider');
    }
    return context;
};