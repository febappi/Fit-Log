import Image from "next/image";
import { TWorkout } from "@/types/workout.type";
import { notFound } from "next/navigation";
import WorkoutActions from "./WorkoutActions";

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

                    <WorkoutActions workoutId={workout.id} />
                </div>
            </div>
        </div>
    );
};

export default WorkoutPageById;
