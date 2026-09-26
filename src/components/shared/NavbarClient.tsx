"use client";

import Link from 'next/link';
import { usePlanContext } from "@/lib/PlanContext";

import { usePathname } from 'next/navigation';

export function NavLinks() {
    const { setActiveTab } = usePlanContext();
    const pathname = usePathname();

    const isWorkoutActive = pathname === "/" || pathname.startsWith("/workout");
    const isPlanActive = pathname.startsWith("/my-plan");

    return (
        <>
            <li>
                <Link
                    href="/"
                    className={`rounded-full px-4 py-2 ${isWorkoutActive ? '!bg-[#192411] !text-primary font-medium' : 'text-gray-400'}`}
                >
                    Workouts
                </Link>
            </li>
            <li>
                <Link
                    href="/my-plan"
                    onClick={() => setActiveTab("today")}
                    className={`rounded-full px-4 py-2 ${isPlanActive ? '!bg-[#192411] !text-primary font-medium' : 'text-gray-400'}`}
                >
                    My Plan
                </Link>
            </li>
        </>
    );
}

export function NavStats() {
    const { todayPlanIds, savedPlanIds, setActiveTab } = usePlanContext();
    
    return (
        <div className="navbar-end gap-5">
            <Link href="/my-plan" onClick={() => setActiveTab("today")} className="flex items-center gap-2 text-xs text-gray-300">
                Plan
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-lime-400 text-[10px] font-bold text-black">
                    {todayPlanIds.length}
                </span>
            </Link>
            <Link href="/my-plan" onClick={() => setActiveTab("saved")} className="flex items-center gap-2 text-xs text-gray-300">
                Saved
                <span className="flex h-4 w-4 items-center justify-center rounded-full border border-white/10 text-[10px] text-gray-400">
                    {savedPlanIds.length}
                </span>
            </Link>
        </div>
    );
}
