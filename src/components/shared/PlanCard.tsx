import Image from "next/image";
import Link from "next/link";
import { TWorkout } from "@/types/workout.type";
import { usePlanContext } from "@/lib/PlanContext";
import { toast } from "react-toastify";

interface PlanCardProps {
    workout: TWorkout;
    onRemove: (id: number) => void;
    showMarkAsDone?: boolean;
}

const PlanCard = ({ workout, onRemove, showMarkAsDone = true }: PlanCardProps) => {
    const { donePlanIds, toggleDone } = usePlanContext();
    const isDone = donePlanIds.includes(workout.id);

    return (
        <div className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-4 rounded-xl border border-white/10 bg-base-300 p-4 sm:p-3 transition-opacity`}>
            <div className="relative h-40 w-full sm:h-20 sm:w-36 shrink-0 overflow-hidden rounded-lg">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 144px"
                    className="object-cover"
                />
            </div>

            <div className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left">
                <h2 className="font-display text-lg font-bold uppercase leading-none tracking-tight">
                    {workout.name}
                </h2>

                <p className="mt-1.5 text-sm text-gray-400">
                    {workout.equipment}
                </p>

                <div className="mt-2 flex flex-wrap justify-center sm:justify-start items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1.5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="1.8"
                        >
                            <circle cx="12" cy="12" r="9" />
                            <path strokeLinecap="round" d="M12 7v5l3 2" />
                        </svg>
                        <span>{workout.duration} min</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-4 text-primary"
                        >
                            <path
                                fillRule="evenodd" d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z" clipRule="evenodd"
                            />
                        </svg>
                        <span>{workout.caloriesBurned} kcal</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-primary"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 3.5l2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3.5z"
                            />
                        </svg>
                        <span>{workout.rating}</span>
                    </div>
                </div>
            </div>

            <div className="flex w-full sm:w-auto items-center justify-center sm:justify-start gap-3 mt-2 sm:mt-0">
                <Link
                    href={`/workout/${workout.id}`}
                    className="btn btn-outline btn-sm rounded-full border-white/15 px-4 text-xs font-normal"
                >
                    View Details
                </Link>

                {showMarkAsDone && (
                    <button
                        onClick={() => {
                            if (!isDone) {
                                toggleDone(workout.id);
                                toast.success("Workout marked as done!");
                            } else {
                                toast.error("Remove and add again");
                            }
                        }}
                        className={`btn btn-sm rounded-full px-4 text-xs font-bold border-none ${isDone ? 'bg-base-200 text-gray-500 cursor-not-allowed' : 'btn-primary'}`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {isDone ? 'Done' : 'Mark as Done'}
                    </button>
                )}

                <button
                    onClick={() => {
                        onRemove(workout.id);
                        toast.info("Workout removed from plan.");
                    }}
                    className="btn btn-ghost btn-sm rounded-full px-2 text-gray-400 hover:text-white"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                    >
                        <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default PlanCard;
