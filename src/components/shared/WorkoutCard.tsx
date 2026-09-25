import Image from 'next/image';
import Link from 'next/link';
import { TWorkout } from '@/types/workout.type';

const WorkoutCard = ({ workout }: { workout: TWorkout }) => {
    return (
        <Link
            href={`/workout/${workout.id}`}
            className="group block w-full overflow-hidden rounded-2xl border border-white/10 bg-base-300 transition-all duration-200 hover:-translate-y-1"
        >
            <div className="relative aspect-[1.45/1] overflow-hidden">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            <div className="p-7">
                <div className="flex flex-wrap gap-2">
                    {workout.muscleGroups.map((muscle) => (
                        <span
                            key={muscle}
                            className="rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase text-primary-content"
                        >
                            {muscle}
                        </span>
                    ))}
                </div>

                <h2 className="mt-5 font-display text-2xl font-bold uppercase leading-none tracking-tight">
                    {workout.name}
                </h2>

                <p className="mt-3 text-sm text-gray-400">
                    {workout.equipment}
                </p>

                <div className="my-5 border-t border-white/10" />

                <div className="flex items-center gap-5 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
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

                    <div className="flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-6"
                        >
                            <path
                                fillRule="evenodd" d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z" clipRule="evenodd"
                            />
                        </svg>

                        <span>{workout.caloriesBurned} kcal</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
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
        </Link>
    );
};

export default WorkoutCard;