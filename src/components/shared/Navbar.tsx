import Link from 'next/link';
import Image from 'next/image';
import logo from "@/assets/logo.png";
import React from 'react';

const Navbar = () => {
    return (
        <div className="px-4 px-10 border-b-2 border-white/10 mb-4">
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><Link href="/workout">Workout</Link></li>
                            <li><Link href="/my-plan">My Plan</Link></li>
                        </ul>
                    </div>
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src={logo}
                            alt="FITLOG Logo"
                            width={28}
                            height={28}
                        />
                        <span className="font-osw font-bold text-lg tracking-wide">
                            FITLOG
                        </span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link href="/workout">Workout</Link></li>
                        <li><Link href="/my-plan">My Plan</Link></li>
                    </ul>
                </div>
                <div className="navbar-end gap-5">
                    <Link href="/my-plan" className="flex items-center gap-2 text-xs text-gray-300">
                        Plan
                        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-lime-400 text-[10px] font-bold text-black">
                            0
                        </span>
                    </Link>
                    <Link href="/my-plan" className="flex items-center gap-2 text-xs text-gray-300">
                        Plan
                        <span className="flex h-4 w-4 items-center justify-center rounded-full border border-white/10 text-[10px] text-gray-400">
                            0
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;