import Hero from "@/components/homepage/Hero";
import TheLibrary from "@/components/homepage/Library";

export default function Home() {
  return (
    <div className="px-6">
      <Hero />
      <TheLibrary />
    </div>
  );
}