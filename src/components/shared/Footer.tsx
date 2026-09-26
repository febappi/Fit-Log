import React from "react";
import Image from "next/image";
import icon from "@/assets/logo.png";

const Footer = () => {
    return (
        <footer className="mt-auto border-t border-white/10 bg-base-300 px-6 py-8">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
                <div className="flex items-center gap-2">
                    <Image src={icon} alt="FitLog Logo" width={24} height={24} className="h-6 w-auto" />
                    <span className="font-logo text-xl font-bold tracking-tight text-white">FITLOG</span>
                </div>
                <div className="text-sm text-gray-400 text-center sm:text-right">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
