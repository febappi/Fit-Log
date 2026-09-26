"use client";

import { usePlanContext } from "@/lib/PlanContext";

interface WorkoutActionsProps {
    workoutId: number;
}

export default function WorkoutActions({ workoutId }: WorkoutActionsProps) {
    const { todayPlanIds, savedPlanIds, addToToday, addToSaved } = usePlanContext();

    const isToday = todayPlanIds.includes(workoutId);
    const isSaved = savedPlanIds.includes(workoutId);

    return (
        <div className="mt-8 flex flex-wrap gap-4">
            <button
                onClick={() => { if (!isToday) addToToday(workoutId); }}
                className={`btn rounded-md px-5 text-xs font-bold border-none ${
                    isToday ? "bg-base-200 text-gray-500 cursor-not-allowed" : "btn-primary"
                }`}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z"
                    />
                </svg>
                {isToday ? "Added to today's plan" : "Add to today's plan"}
            </button>

            <button
                onClick={() => { if (!isSaved) addToSaved(workoutId); }}
                className={`btn rounded-md px-5 text-xs font-bold border-white/5 ${
                    isSaved ? "bg-base-200 text-gray-500 cursor-not-allowed" : "btn-outline"
                }`}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 3.5h12a1 1 0 0 1 1 1V20l-7-3.5L5 20V4.5a1 1 0 0 1 1-1z"
                    />
                </svg>
                {isSaved ? "Saved for later" : "Save for later"}
            </button>
        </div>
    );
}
