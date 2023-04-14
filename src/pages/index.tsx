import Hero from "@/components/Hero";
import SuggestCard from "@/components/SuggestCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />

      <SuggestCard />
    </main>
  );
}
