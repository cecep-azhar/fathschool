import Image from "next/image";
import { ButtonGooglePlay } from "@/components/elements/ButtonGooglePlay";
import { Polygon } from "@/components/elements/Polygon";
import { dataDefault, dataHero } from "@/data";
import type { Hero } from "@/types/response";

export function Hero({ data }: { data: Hero | undefined }): React.ReactNode {

  if (!data) {
    data = dataDefault.data.sections.data.hero  ;
  }

  return (
    <section id="home" className="wrapper image-wrapper bg-overlay bg-overlay-light-600"
      style={{
        backgroundImage: "url(/assets/img/photos/bg23.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container pt-16 pt-md-18 pb-9">
        <div className="row gx-0 gy-10 align-items-center text-center text-lg-start">
          
          <div className="col-lg-6 col-xxl-5 position-relative" data-cues="slideInDown" data-group="page-title" data-delay="350">

            {dataHero.designDoodle.map((item, index) => (
              <Image
                key={index}
                src={item.src}
                data-cue={item.dataCue}
                data-delay={item.dataDelay}
                style={item.style}
                className={`${item.style?.height} position-absolute d-none d-lg-block`}
                alt="svg"
                width={100}
                height={100}
              />
            ))}

            <h1 className="display-1 fs-50 mb-4">{data.title}</h1>
            <p className="lead fs-24 lh-sm mb-7">{data.description}</p>

            <ButtonGooglePlay href={data.playstore_link} />
          </div>

          <ImageContent data={data.device_image} />
        </div>
      </div>

      <Polygon />
    </section>
  );
}

const ImageContent = ({ data }: { data: string }) => {
  const ImageUrl = process.env.NEXT_PUBLIC_STORAGE_URL?.concat(data) || dataDefault.data.sections.data.hero.device_image;

  return (
    <div className="col-lg-6 ms-auto mb-20 mb-xxl-n22" data-cue="fadeIn" data-delay="2000">
      <figure>
        <Image src={ImageUrl} alt="Image" quality={100} width={500} height={500} loading="lazy"/>
      </figure>
    </div>
  );
};
