import Image from "next/image";
import { TWorkout } from "@/types/workout.type";
import { notFound } from "next/navigation";

type TWorkoutPageProps = {
    params: Promise<{
        id: string;
    }>;
};

export const getSingleData = async (id: string): Promise<TWorkout> => {
    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
    if (!res.ok) {
        notFound();
    }
    const data = await res.json();
    return data;
};

const WorkoutPageById = async ({ params }: TWorkoutPageProps) => {
    const { id } = await params;
    const workout = await getSingleData(id);

    return (
        <div className="px-6">
            <div className="mx-auto mt-10 mb-10 grid max-w-7xl gap-10 lg:grid-cols-2">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 bg-base-300">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                    />
                </div>

                <div>
                    <h1 className="font-display text-4xl font-bold uppercase leading-none tracking-tight">
                        {workout.name}
                    </h1>

                    <p className="mt-3 max-w-lg text-sm leading-6 text-gray-400">
                        {workout.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                        {workout.muscleGroups.map((muscle) => (
                            <span
                                key={muscle}
                                className="rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase text-primary-content"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    <div className="mt-5 rounded-xl border border-white/10 bg-base-300 px-6 py-1">
                        <div className="flex items-center justify-between border-b border-white/10 py-2.5">
                            <span className="text-xs uppercase tracking-wider text-gray-400">EQUIPMENT</span>
                            <span className="text-sm">{workout.equipment}</span>
                        </div>

                        <div className="flex items-center justify-between border-b border-white/10 py-2.5">
                            <span className="text-xs uppercase tracking-wider text-gray-400">DIFFICULTY</span>
                            <span className="text-sm">{workout.difficulty}</span>
                        </div>

                        <div className="flex items-center justify-between border-b border-white/10 py-2.5">
                            <span className="text-xs uppercase tracking-wider text-gray-400">SETS</span>
                            <span className="text-sm">{workout.sets}</span>
                        </div>

                        <div className="flex items-center justify-between border-b border-white/10 py-2.5">
                            <span className="text-xs uppercase tracking-wider text-gray-400">REPS</span>
                            <span className="text-sm">{workout.reps}</span>
                        </div>

                        <div className="flex items-center justify-between border-b border-white/10 py-2.5">
                            <span className="text-xs uppercase tracking-wider text-gray-400">DURATION</span>
                            <span className="text-sm">{workout.duration} min</span>
                        </div>

                        <div className="flex items-center justify-between border-b border-white/10 py-2.5">
                            <span className="text-xs uppercase tracking-wider text-gray-400">CALORIES</span>
                            <span className="text-sm">{workout.caloriesBurned} kcal</span>
                        </div>

                        <div className="flex items-center justify-between py-2.5">
                            <span className="text-xs uppercase tracking-wider text-gray-400">RATING</span>
                            <span className="text-sm">{workout.rating}</span>
                        </div>
                    </div>

                    <h2 className="mt-8 font-display text-sm font-bold uppercase tracking-wider">
                        INSTRUCTIONS
                    </h2>

                    <ol className="mt-4 space-y-3">
                        {workout.instructions.map((instruction, index) => (
                            <li
                                key={instruction}
                                className="flex gap-3 text-sm leading-6 text-gray-400"
                            >
                                <span className="text-gray-500">{index + 1}.</span>
                                <span>{instruction}</span>
                            </li>
                        ))}
                    </ol>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <button className="btn btn-primary rounded-md px-5 text-xs font-bold border-none">
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
                                <path strokeLinecap="round" d="M12 7v5M9.5 9.5h5" />
                            </svg>
                            Add to today&apos;s plan
                        </button>

                        <button className="btn btn-outline rounded-md border-white/10 px-5 text-xs font-bold">
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
                            Save for later
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkoutPageById;
