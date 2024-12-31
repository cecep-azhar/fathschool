'use client'

import Image from "next/image";
import { bgFaq, Poster } from "@/data/images";
import { AccordionGroup } from "@/components/fragments";
import { dataDefault, dataFaq } from "@/data";
import type { Faq } from "@/types/response";

export function Faq({data}: {data: Faq | undefined}): React.ReactNode {

  if (!data) {
    data = dataDefault.data.sections.data.faq;
  }

  return (
    <section id="faq" className="wrapper image-wrapper bg-full bg-image bg-overlay bg-overlay-light-600 bg-content" data-image-src={bgFaq.src}>
      <div className="container py-14 pt-md-16 pt-lg-0 pb-md-17 position-relative" style={{ zIndex: 2 }}>
        <div className="row">

          <div className="col-xl-11 col-xxl-10 mx-auto">
            <Video data={data}  />
            <Headline data={data} />

            <div className="row">
              <AccordionGroup
                id="accordion-1"
                data={data.data?.length > 0 ? data.data.slice(0, 3) : dataFaq.defaultData.slice(0, 3)}
                className="col-lg-6 mb-0"
              />
              
              <AccordionGroup
                id="accordion-2"
                data={data.data?.length > 3 ? data.data.slice(3) : dataFaq.defaultData.slice(3)}
                className="col-lg-6 mb-0"
              />

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

const Headline = ({ data }: { data: Faq }) => {
  return (
    <div className="position-relative">
      {dataFaq.designDoodle.map((doodle, index) => <Image key={index} src={doodle.src} style={doodle.style} className="w-14 position-absolute d-none d-lg-block" data-delay="1800" alt="image" width={100} height={100}/>)}

      <h2 className="fs-16 text-uppercase text-muted mb-3 text-center">
        {data.title}
      </h2>
      <h3 className="display-3 mb-11 px-lg-8 px-xl-8 text-center">
        {data.description}
      </h3>
    </div>
  );
};

export const Video = ({data}: {data: Faq}) => {
  const VideoUrl = process.env.NEXT_PUBLIC_STORAGE_URL?.concat(data.video) || dataDefault.data.sections.data.faq.video

  return (
    <div className="mt-lg-n20 mt-xl-n22 mb-14 rounded-xl shadow-xl">
      <video poster={Poster.src} className="player rounded-xl shadow-xl" preload="none">
        <source src={VideoUrl} type="video/mp4" />
      </video>
    </div>
  );
};
