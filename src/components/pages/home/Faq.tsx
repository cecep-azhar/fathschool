import Image from "next/image";
import { dataFaq } from "@/data";
import { bgFaq, Poster } from "@/data/images";
import { AccordionGroup } from "@/components/fragments/Accordion";

export function Faq(): React.ReactNode {
  return (
    <section id="faq" className="wrapper image-wrapper bg-full bg-image bg-overlay bg-overlay-light-600 bg-content" data-image-src={bgFaq.src}>
      <div className="container py-14 pt-md-16 pt-lg-0 pb-md-17 position-relative" style={{ zIndex: 2 }}>
        <div className="row">

          <div className="col-xl-11 col-xxl-10 mx-auto">
            <Video />
            <Headline data={dataFaq} />

            <div className="row">
              <AccordionGroup
                id="accordion-1"
                data={dataFaq.defaultData.slice(0, 3)}
                className="col-lg-6 mb-0"
              />
              
              <AccordionGroup
                id="accordion-2"
                data={dataFaq.defaultData.slice(3)}
                className="col-lg-6 mb-0"
              />

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}


const Headline = ({ data }: { data: typeof dataFaq }) => {
  return (
    <div className="position-relative">
      {data.designDoodle.map((doodle, index) => (
        <Image key={index} src={doodle.src} style={doodle.style} className="w-14 position-absolute d-none d-lg-block" data-delay="1800" alt="image" width={100} height={100}/>
      ))}

      <h2 className="fs-16 text-uppercase text-muted mb-3 text-center">
        {data.headline}
      </h2>
      <h3 className="display-3 mb-11 px-lg-8 px-xl-8 text-center">
        Jika <span className="text-gradient gradient-7">Pertayaan</span> Anda Belum Terjawab, Kirim Email Melalui Formulir Kontak Kami
      </h3>
    </div>
  );
};

export const Video = () => {
  return (
    <div className="mt-lg-n20 mt-xl-n22 mb-14 rounded-xl shadow-xl">
      <video poster={Poster.src} className="player" preload="none">
        <source src="/assets/media/Introduce FathSchool.mp4" type="video/mp4" />
      </video>
    </div>
  );
};
