import { TWorkout } from "@/types/workout.type";
import PlanCard from "./PlanCard";
import Link from "next/link";

interface SavedPlanProps {
    plan: TWorkout[];
    onRemove: (id: number) => void;
}

const SavedPlan = ({ plan, onRemove }: SavedPlanProps) => {
    if (plan.length === 0) {
        return (
            <div className="mt-6 flex flex-col items-center rounded-xl border border-white/10 px-8 py-24 text-center">
                <h2 className="font-display text-2xl font-bold uppercase tracking-tight">
                    NOTHING HERE YET
                </h2>

                <p className="mt-2 text-sm text-gray-400">
                    Browse the library and add a lift to get today moving.
                </p>

                <Link
                    href="/workout#library"
                    className="btn btn-primary mt-5 rounded-md px-5 text-xs font-bold border-none"
                >
                    Go to workouts
                </Link>
            </div>
        );
    }

    return (
        <div className="mt-6 space-y-4">
            {plan.map((workout) => (
                <PlanCard key={workout.id} workout={workout} onRemove={onRemove} showMarkAsDone={false} />
            ))}
        </div>
    );
};

export default SavedPlan;
