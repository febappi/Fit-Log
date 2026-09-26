import { Suspense } from "react";
import Hero from "@/components/homepage/Hero";
import TheLibrary from "@/components/homepage/Library";
import LibrarySkeleton from "@/components/homepage/LibrarySkeleton";

export default function Home() {
  return (
    <div className="px-6">
      <Hero />
      <Suspense fallback={<LibrarySkeleton />}>
        <TheLibrary />
      </Suspense>
    </div>
  );
}