import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ServicesSection limit={3} />
    </div>
  );
}
