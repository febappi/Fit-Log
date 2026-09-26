import type { Metadata } from "next";
import { Geist, Geist_Mono, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import { PlanProvider } from "@/lib/PlanContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/components/shared/Footer";

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
            className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} h-full overflow-y-scroll antialiased`}
        >
            <body className="min-h-full flex flex-col">
                <PlanProvider>
                    <Navbar />
                    <main className="flex-1">
                        {children}
                    </main>
                    <Footer />
                    <ToastContainer 
                        position="bottom-right"
                        autoClose={1500}
                        theme="dark"
                    />
                </PlanProvider>
            </body>
        </html>
    );
}