import bannerImage from "@/assets/banner.png";
import Image from "next/image";

const Hero = () => {
    return (
        <div className="mt-10 mb-10 rounded-xl border border-white/10 bg-base-300">
            <div className="hero-content flex-col gap-10 px-8 py-12 lg:flex-row-reverse lg:justify-between lg:px-12">
                <div>
                    <Image
                        src={bannerImage}
                        alt="FITLOG Banner"
                    />
                </div>
                <div className="max-w-xl">
                    <p className="font-logo text-xs font-light text-primary tracking-widest mb-8">
                        WORKOUT LIBRARY
                    </p>
                    <h1 className="mt-4 font-display text-5xl font-bold lg:leading-[0.5] tracking-tight">
                        <span className="block">
                            TRAIN WITH INTENT. LOG
                        </span>
                        <span className="block lg:mt-6">
                            EVERY SET.
                        </span>
                    </h1>
                    <p className="mt-5 max-w-md text-sm leading-6 text-gray-400">
                        <span className="lg:block lg:mt-6">
                            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                        </span>
                        <span className="lg:block">
                            into today's plan, and watch the week's work add up.
                        </span>
                    </p>
                    <button className="btn btn-primary mt-6 rounded-md px-5 text-xs font-bold border-none">
                        BROWSE WORKOUTS
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;