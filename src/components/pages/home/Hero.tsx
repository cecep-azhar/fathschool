import { ButtonGooglePlay } from "@/components/elements/ButtonGooglePlay";
import { Polygon } from "@/components/elements/Polygon";
import { dataHero } from "@/data";
import Image from "next/image";

export function Hero(): React.ReactNode {
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

            <h1 className="display-1 fs-50 mb-4">
              Sekolah Ku, Sudah Pakai{" "}
              <span className="text-gradient gradient-7">FathSchool</span>
            </h1>
            <p className="lead fs-24 lh-sm mb-7">{dataHero.desc}</p>

            <ButtonGooglePlay />
          </div>

          <ImageContent data={dataHero.imageHero} />
        </div>
      </div>

      <Polygon />
    </section>
  );
}

const ImageContent = ({ data }: { data: typeof dataHero.imageHero }) => {
  return (
    <div className="col-lg-6 ms-auto mb-20 mb-xxl-n22" data-cue="fadeIn" data-delay="2000">
      <figure>
        <Image
          src={data.src}
          blurDataURL={data.blurDataURL}
          alt="Image"
          quality={100}
          width={500}
          height={500}
          loading="lazy"
        />
      </figure>
    </div>
  );
};
