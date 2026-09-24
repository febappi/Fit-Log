import type { Metadata } from "next";
import { Geist, Geist_Mono, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const oswald = Oswald({
    variable: "--font-oswald",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "Fit Log",
    description: "Fitness Logging App",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html
            data-theme="fitlog"
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col">
                <Navbar />
                {children}
            </body>
        </html>
    );
}