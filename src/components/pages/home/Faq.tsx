"use client";

import Image from "next/image";
import { Poster } from "@/data/images";
import { AccordionGroup } from "@/components/fragments";
import { dataDesign } from "@/data";
import { GetMediaUrl } from "@/utils/GetMediaUrl";
import type { Faq } from "@/types/response";

export function Faq({ data }: { data: Faq }): React.ReactNode {
  return (
    <section id="faq" className="wrapper image-wrapper bg-full bg-image bg-overlay bg-overlay-light-600 bg-content" style={{
        backgroundImage: "url(/assets/img/photos/bg23.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container pt-16 pb-14 pt-md-18 pb-md-16 position-relative" style={{ zIndex: 2 }}>
        <div className="row">
          <div className="col-xl-11 col-xxl-10 mx-auto">

            {/* Content Video */}
            <div className="mt-lg-n20 mt-xl-n22 mb-14 rounded-xl shadow-xl ">
              <video poster={GetMediaUrl(data.thumbnail_video) ?? Poster.src} className="player rounded-xl shadow-xl" playsInline controls preload="none">
                <source src={GetMediaUrl(data.video)} type="video/mp4"/>
              </video>
            </div>

            <Headline data={data} />

            <div className="row">
              
              <AccordionGroup
                id="accordion-1"
                className="col-lg-6 mb-0"
                data={data.data?.length > 0 ? data.data.slice(0, 3) : []}
              />

              <AccordionGroup
                id="accordion-2"
                className="col-lg-6 mb-0"
                data={data.data?.length > 3 ? data.data.slice(3) : []}
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
      {dataDesign.faq.map((doodle, index) => (
        <Image
          key={index}
          src={doodle.src}
          style={doodle.style}
          className="w-14 position-absolute d-none d-lg-block"
          data-delay="1800"
          alt="image"
          width={100}
          height={100}
        />
      ))}

      <h2 className="fs-16 text-uppercase text-muted mb-3 text-center">
        {data.title}
      </h2>
      <h3 className="display-3 mb-11 px-lg-8 px-xl-8 text-center">
        {data.description}
      </h3>
    </div>
  );
};
