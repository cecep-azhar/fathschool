import { ButtonGooglePlay } from "@/components/elements";
import { doodle3, doodle8, ImageHero } from "@/data/images";
import Image from "next/image";

export function Banner(): React.ReactNode {
  return (
    <section className="wrapper image-wrapper bg-full bg-image bg-overlay bg-overlay-light-600" style={{
      backgroundImage: "url(/assets/img/photos/bg23.png)",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      <div className="overflow-hidden" style={{ zIndex: 1 }}>
        <div className="divider divider-alt text-light mx-n2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
            <g fill="currentColor">
              <polygon points="1440 100 0 15 0 0 1440 0 1440 100" />
            </g>
          </svg>
        </div>
      </div>
      
      <div className="container pt-10 pt-lg-10 pt-md-13 pb-8 pb-md-10 text-center text-lg-start">
        <div className="row gx-0 gy-10">
          <div className="col-md-10 offset-md-1 offset-lg-0 col-lg-6 position-relative">
            <Image
              src={doodle8}
              className="h-15 position-absolute d-none d-lg-block"
              style={{ bottom: '36%', right: '-25%' }}
              alt=""
              width={300}
              height={300}
            />
            <Image
              src={doodle3}
              className="h-14 position-absolute d-none d-lg-block"
              style={{ top: '-20%', left: '-25%' }}
              alt=""
              width={300}
              height={300}
            />
            <h2 className="display-3 mb-4">
              Kelola Pembelajaran, Jadwal, dan <span className="text-gradient gradient-7"> Kegiatan</span> Sekolah dalam Satu Platform
            </h2>
            <p className="lead fs-24 lh-sm mb-7">FathSchool tersedia untuk diunduh di Google Play Store.</p>
            <ButtonGooglePlay href="https://play.google.com/store/apps/details?id=com.fathschool.fathschool" />
          </div>
          <div className="col-lg-5 ms-auto mt-lg-n15 mt-xl-n20">
            <figure>
              <Image
                src={ImageHero.src}
                alt="Devices"
                width={400}
                height={400}
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}