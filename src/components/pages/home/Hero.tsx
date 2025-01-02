import Image from "next/image";
import { dataDesign } from "@/data";
import { motion } from "framer-motion";
import type { Hero } from "@/types/response";
import { Container } from "@/components/layouts/Container";
import { GetMediaUrl } from "@/utils/GetMediaUrl";
import { AnimationList, FadeInDown } from "@/animations";
import { Polygon, ButtonGooglePlay } from "@/components/elements";
import { HighlightKeyword } from "@/utils/HighlightKeyword";

export function Hero({ data }: { data: Hero }): React.ReactNode {

  return (
    <section id="home" className="wrapper image-wrapper bg-overlay bg-overlay-light-600"
      style={{
        backgroundImage: "url(/assets/img/photos/bg23.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <div className="row gx-0 gy-10 align-items-center text-center text-lg-start">
          <div className="col-lg-6 col-xxl-5 position-relative">
            {dataDesign.hero.map((item, index) => (
              <Image
                key={index}
                src={item.src}
                style={item.style}
                className={`${item.style?.height} position-absolute d-none d-lg-block`}
                alt="svg"
                width={100}
                height={100}
              />
            ))}

            {/* Headline With Animation */}
            <motion.div
              variants={AnimationList.listVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                variants={AnimationList.itemVariants}
                className="display-1 fs-50 mb-4"
              >
                {HighlightKeyword(data.title, "FathSchool")}
              </motion.h1>
              <motion.p
                variants={AnimationList.itemVariants}
                className="lead fs-24 lh-sm mb-7"
              >
                {data.description}
              </motion.p>

              <motion.div variants={AnimationList.itemVariants}>
                <ButtonGooglePlay href={data.playstore_link} />
              </motion.div>
            </motion.div>

          </div>

          {/* Image Content */}
          <motion.div className="col-lg-6 ms-auto mb-20 mb-xxl-n22" variants={FadeInDown} animate="visible" initial="hidden">
            <figure>
              <Image
                src={GetMediaUrl(data.device_image)}
                alt="Image"
                quality={100}
                width={500}
                height={500}
                loading="lazy"
              />
            </figure>
          </motion.div>

        </div>
      </Container>

      <Polygon />
    </section>
  );
}
