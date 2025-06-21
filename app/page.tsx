import { AboutSection } from "@/components/about-section";
import { BioSection } from "@/components/bio-section";
import { ContactSection } from "@/components/contact-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { Navigation } from "@/components/navigation";
import { ServicesSection } from "@/components/services-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { WhyWorkSection } from "@/components/why-work-section";


export default function Home() {
  return (
       <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <BioSection />
      <ServicesSection />
      <WhyWorkSection />
      <TestimonialsSection />
      <CTASection />
      {/* <ContactSection /> */}
      <Footer />
    </div>
  );
}
