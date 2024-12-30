import { Benefits, Contact, Faq, Features, Hero, Testimonial, TutorialGuide } from "@/components/pages/Home";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <TutorialGuide />
      <Faq />
      <Benefits />
      <Testimonial />
      {/* <Contact /> */}
    </>
  );
}
