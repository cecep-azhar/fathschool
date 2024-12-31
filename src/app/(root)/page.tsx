'use client';

import { Benefits, Testimonial, Faq, Features, Hero, TutorialGuide } from "@/components/pages/Home";
import { useGetLandingPage } from "@/hooks/GET/useGetLandingPage";

export default function Home() {
  const { dataResponse } = useGetLandingPage();

  return (
    <>
      <Hero data={dataResponse?.sections.data.hero} />
      <Features data={dataResponse?.sections.data.app_feature} />
      <TutorialGuide />
      <Faq data={dataResponse?.sections.data.faq} />
      <Benefits data={dataResponse?.sections.data.benefits} />
      <Testimonial data={dataResponse?.sections.data.testimonials} />
    </>
  );
}
