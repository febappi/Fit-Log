import { TWorkout } from "@/types/workout.type";

export const getData = async (): Promise<TWorkout[]> => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await res.json();
    return data;
};