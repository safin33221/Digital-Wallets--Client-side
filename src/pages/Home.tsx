import Features from "@/components/Modules/Home/Features";
import { Hero } from "@/components/Modules/Home/Hero";
import HowItWorks from "@/components/Modules/Home/HowItWorks";

export default function Home() {
  return (
    <div className="space-y-20 max-md:mx-3 mx-auto">
      <Hero />
      <Features />
      <HowItWorks/>
    </div>
  );
};

