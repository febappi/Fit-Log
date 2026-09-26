"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type PlanContextType = {
    todayPlanIds: number[];
    savedPlanIds: number[];
    activeTab: "today" | "saved";
    setActiveTab: (tab: "today" | "saved") => void;
    addToToday: (id: number) => void;
    removeFromToday: (id: number) => void;
    addToSaved: (id: number) => void;
    removeFromSaved: (id: number) => void;
};

const PlanContext = createContext<PlanContextType | undefined>(undefined);

export function PlanProvider({ children }: { children: ReactNode }) {
    const [todayPlanIds, setTodayPlanIds] = useState<number[]>([]);
    const [savedPlanIds, setSavedPlanIds] = useState<number[]>([]);
    const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

    useEffect(() => {
        const storedToday = localStorage.getItem("todayPlanIds");
        const storedSaved = localStorage.getItem("savedPlanIds");
        if (storedToday) setTodayPlanIds(JSON.parse(storedToday));
        if (storedSaved) setSavedPlanIds(JSON.parse(storedSaved));
    }, []);

    const addToToday = (id: number) => {
        setTodayPlanIds(prev => {
            if (prev.includes(id)) return prev;
            const updated = [...prev, id];
            localStorage.setItem("todayPlanIds", JSON.stringify(updated));
            return updated;
        });
    };

    const removeFromToday = (id: number) => {
        setTodayPlanIds(prev => {
            const updated = prev.filter(p => p !== id);
            localStorage.setItem("todayPlanIds", JSON.stringify(updated));
            return updated;
        });
    };

    const addToSaved = (id: number) => {
        setSavedPlanIds(prev => {
            if (prev.includes(id)) return prev;
            const updated = [...prev, id];
            localStorage.setItem("savedPlanIds", JSON.stringify(updated));
            return updated;
        });
    };

    const removeFromSaved = (id: number) => {
        setSavedPlanIds(prev => {
            const updated = prev.filter(p => p !== id);
            localStorage.setItem("savedPlanIds", JSON.stringify(updated));
            return updated;
        });
    };

    return (
        <PlanContext.Provider value={{ todayPlanIds, savedPlanIds, activeTab, setActiveTab, addToToday, removeFromToday, addToSaved, removeFromSaved }}>
            {children}
        </PlanContext.Provider>
    );
}

export function usePlanContext() {
    const context = useContext(PlanContext);
    if (context === undefined) {
        throw new Error("usePlanContext must be used within a PlanProvider");
    }
    return context;
}
