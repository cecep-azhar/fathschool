import Hero from "@/components/LandingPage/Hero";
import BenefitsSection from "@/components/pages/home/Benefits";
import { TestimonialsSection } from "@/components/pages/home/Testimonials";
import { defaultHero } from "@/data/index";

export default function Home() {
  return (
    <>
      <Hero props={defaultHero} />
      <BenefitsSection />
      <TestimonialsSection />
    </>
  );
}
