'use client'
import { createContext, useContext, useState, ReactNode } from 'react';

interface SidebarContextProps {
    showSidebar: boolean;
    setShowSidebar: (show: boolean) => void;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(undefined);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
    const [showSidebar, setShowSidebar] = useState(true);
    return (
        <SidebarContext.Provider value={{ showSidebar, setShowSidebar }}>
            {children}
        </SidebarContext.Provider>
    );
};

export const useSidebar = () => {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error("useSidebar must be used within a SidebarProvider");
    }
    return context;
};
