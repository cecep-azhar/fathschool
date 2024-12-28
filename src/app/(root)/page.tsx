import { Hero } from "@/components/LandingPage/Hero";
import { BenefitsSection } from "@/components/pages/home/Benefits";
import { FaqSection } from "@/components/pages/home/Faq";
import { Features } from "@/components/pages/home/Features";
import { TestimonialsSection } from "@/components/pages/home/Testimonials";
import { TutorialGuide } from "@/components/pages/home/TutorialGuide";
import { defaultHero } from "@/data/index";

export default function Home() {
  return (
    <>
      <Hero props={defaultHero} />
      <Features/>
      <TutorialGuide/>
      <FaqSection />
      <BenefitsSection />
      <TestimonialsSection />
    </>
  );
}
