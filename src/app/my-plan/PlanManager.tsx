"use client";

import { useState } from "react";
import { TWorkout } from "@/types/workout.type";
import TodayPlan from "@/components/shared/TodayPlan";
import SavedPlan from "@/components/shared/SavedPlan";
import { usePlanContext } from "@/lib/PlanContext";

interface PlanManagerProps {
    allWorkouts: TWorkout[];
}

export default function PlanManager({ allWorkouts }: PlanManagerProps) {
    const { todayPlanIds, savedPlanIds, activeTab, setActiveTab, removeFromToday, removeFromSaved } = usePlanContext();

    const [sortBy, setSortBy] = useState<"Duration" | "Calories" | "Rating">("Duration");

    const sortWorkouts = (list: TWorkout[]) => {
        return [...list].sort((a, b) => {
            if (sortBy === "Duration") return b.duration - a.duration;
            if (sortBy === "Calories") return b.caloriesBurned - a.caloriesBurned;
            if (sortBy === "Rating") return b.rating - a.rating;
            return 0;
        });
    };

    const todayPlan = sortWorkouts(allWorkouts.filter(w => todayPlanIds.includes(w.id)));
    const savedPlan = sortWorkouts(allWorkouts.filter(w => savedPlanIds.includes(w.id)));

    const currentList = activeTab === "today" ? todayPlan : savedPlan;

    // Metrics based on the active tab list
    const exercises = currentList.length;
    const minutes = currentList.reduce((total, w) => total + w.duration, 0);
    const calories = currentList.reduce((total, w) => total + w.caloriesBurned, 0);

    return (
        <>
            <div className="mt-6 grid rounded-xl border border-white/10 bg-base-300 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
                <div className="px-8 py-6 text-center sm:text-left">
                    <p className="text-xs text-gray-400">Exercises</p>
                    <p className="mt-2 font-display text-4xl font-bold text-primary">
                        {exercises}
                    </p>
                </div>

                <div className="px-8 py-6 text-center sm:text-left">
                    <p className="text-xs text-gray-400">Minutes</p>
                    <p className="mt-2 font-display text-4xl font-bold">
                        {minutes}
                    </p>
                </div>

                <div className="px-8 py-6 text-center sm:text-left">
                    <p className="text-xs text-gray-400">Calories</p>
                    <p className="mt-2 font-display text-4xl font-bold">
                        {calories}
                    </p>
                </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <div className="flex gap-1 rounded-lg border border-white/10 p-1 text-xs">
                    <button
                        onClick={() => setActiveTab("today")}
                        className={`rounded-md px-4 py-1.5 font-bold transition-colors cursor-pointer ${
                            activeTab === "today"
                                ? "bg-base-300 text-white"
                                : "text-gray-400 hover:text-white"
                        }`}
                    >
                        Today&apos;s Plan
                    </button>
                    <button
                        onClick={() => setActiveTab("saved")}
                        className={`rounded-md px-4 py-1.5 font-bold transition-colors cursor-pointer ${
                            activeTab === "saved"
                                ? "bg-base-300 text-white"
                                : "text-gray-400 hover:text-white"
                        }`}
                    >
                        Saved
                    </button>
                </div>

                <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-400">Sort By</span>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="flex items-center gap-2 rounded-md border border-white/10 px-3 py-1.5 text-xs">
                            {sortBy}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32 text-xs">
                            <li><button onClick={() => { setSortBy("Duration"); (document.activeElement as HTMLElement)?.blur(); }}>Duration</button></li>
                            <li><button onClick={() => { setSortBy("Calories"); (document.activeElement as HTMLElement)?.blur(); }}>Calories</button></li>
                            <li><button onClick={() => { setSortBy("Rating"); (document.activeElement as HTMLElement)?.blur(); }}>Rating</button></li>
                        </ul>
                    </div>
                </div>
            </div>

            {activeTab === "today" ? (
                <TodayPlan plan={todayPlan} onRemove={removeFromToday} />
            ) : (
                <SavedPlan plan={savedPlan} onRemove={removeFromSaved} />
            )}
        </>
    );
}
