import Hero from "./components/Hero";
import SuggestCard from "./components/SuggestCard";
import WhatIsThis from "./components/WhatIsThis";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhatIsThis />
      <SuggestCard />
    </main>
  );
}
