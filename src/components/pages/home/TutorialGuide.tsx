import { FadeInDown } from "@/animations";
import { Headline } from "@/components/fragments";
import { Container } from "@/components/layouts/Container";
import { dataDesign } from "@/data";
import { Tutorial } from "@/types/response";
import { GetMediaUrl } from "@/utils/GetMediaUrl";
import { motion } from "framer-motion";
import Image from "next/image";

export function TutorialGuide({ data }: { data: Tutorial }): React.ReactNode {
  const UrlImage = GetMediaUrl(data.device_tutorial);

  return (
    <Container>
      <Headline
        headline={data.title}
        doodleImages={dataDesign.tutorialGuide}
        desc={data.description}
      />

      <div className="row mb-lg-16 mb-xl-24">
        <div className="col-xxl-11 mx-auto">
          <div className="row gy-10 gy-lg-0 text-center d-flex align-items-center">

            {/* Image Content */}
            <motion.div className="col-md-6 col-lg-4 mx-auto mb-n10 mb-lg-0" variants={FadeInDown} initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.3}}>
              <figure className="mx-auto">
                <Image src={UrlImage} alt="image" width={800} height={800} />
              </figure>
            </motion.div>

            <div className="w-100 d-lg-none"></div>

            {/* Column Left */}
            <div className="col-md-6 col-lg-4 order-lg-first">
              <div className="mb-8">
                <span className="fs-60 lh-1 mb-3 fw-normal text-gradient gradient-7">
                  {data.data[0].number}
                </span>
                <h4 className="fs-20">{data.data[0].title}</h4>
                <p className="mb-0 px-xl-7">{data.data[0].description}</p>
              </div>
              <div>
                <span className="fs-60 lh-1 mb-3 fw-normal text-gradient gradient-7">
                  {data.data[1].number}
                </span>
                <h4 className="fs-20">{data.data[1].title}</h4>
                <p className="mb-0 px-xl-7">{data.data[1].description}</p>
              </div>
            </div>

            {/* Column Right */}
            <div className="col-md-6 col-lg-4">
              <div className="mb-8">
                <span className="fs-60 lh-1 mb-3 fw-normal text-gradient gradient-7">
                  {data.data[2].number}
                </span>
                <h4 className="fs-20">{data.data[2].title}</h4>
                <p className="mb-0 px-xl-7">{data.data[2].description}</p>
              </div>
              <div>
                <span className="fs-60 lh-1 mb-3 fw-normal text-gradient gradient-7">
                  {data.data[3].number}
                </span>
                <h4 className="fs-20">{data.data[3].title}</h4>
                <p className="mb-0 px-xl-7">{data.data[3].description}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </Container>
  );
}