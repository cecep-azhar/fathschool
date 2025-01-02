"use client";

import { Banner, Benefits, Faq, Features, Hero, Testimonial, TutorialGuide } from "@/components/pages/Home/index";
import { useGetLandingPage } from "@/hooks/GET/useGetLandingPage";
import { dataDefault } from "@/data";

export default function Home() {
  const { dataResponse, isLoading, isSuccess } = useGetLandingPage();

  // * Destructure data dengan fallback ke default
  const { hero, app_feature, tutorial, benefits, faq, testimonials } = isSuccess && dataResponse?.sections?.data
    ? dataResponse.sections.data
    : dataDefault.data.sections.data;

  if (isLoading) {
    return <div className="page-loader" />;
  }

  return (
    <>
      <Hero data={hero}/>
      <Features data={app_feature} />
      <TutorialGuide data={tutorial} />
      <Faq data={faq}/>
      <Benefits data={benefits} />
      <Testimonial data={testimonials} />
      <Banner />
    </>
  );
}
