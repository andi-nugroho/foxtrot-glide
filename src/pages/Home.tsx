import Hero from "@/components/home/Hero";
import BentoGrid from "@/components/home/BentoGrid";
import LogoMarquee from "@/components/home/LogoMarquee";
import ProcessSteps from "@/components/home/ProcessSteps";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <BentoGrid />
      <LogoMarquee />
      <ProcessSteps />
      <Testimonials />
      <CTA />
    </div>
  );
}
