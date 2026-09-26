import Link from 'next/link';
import Image from 'next/image';
import logo from "@/assets/logo.png";
import React from 'react';
import { NavLinks, NavStats } from './NavbarClient';

const Navbar = () => {
    return (
        <div className="sticky top-0 z-50 bg-base-100 px-10 border-b-2 border-white/10 mb-4">
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <NavLinks />
                        </ul>
                    </div>
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src={logo}
                            alt="FITLOG Logo"
                            width={28}
                            height={28}
                        />
                        <span className="font-display font-bold text-lg tracking-wide leading-[0.5]">
                            FITLOG
                        </span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <NavLinks />
                    </ul>
                </div>
                <NavStats />
            </div>
        </div>
    );
};

export default Navbar;