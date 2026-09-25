import { getData } from "@/lib/data";
import { TWorkout } from "@/types/workout.type";
import WorkoutCard from "../shared/WorkoutCard";

const TheLibrary = async () => {
    const data = await getData();
    return (
        <div className="mt-15 mb-10">
            <div className="mb-10">
            <h1 className="font-display text-3xl font-bold lg:leading-[0.5] tracking-tight">
                THE LIBRARY
            </h1>
            <p className="lg:mt-2 max-w-md text-sm leading-6 text-gray-400">
                Twelve lifts covering every major muscle group.
            </p>
            </div>
            <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {data.map((workout: TWorkout) => (
                    <div key={workout.id} className="mb-4">
                        <WorkoutCard workout={workout} />
                    </div>
                ))}
            </div>
        </div>
        
    );
};

export default TheLibrary;