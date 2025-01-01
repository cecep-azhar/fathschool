import { BenefitItem, Headline } from "@/components/fragments";
import { Container } from "@/components/layouts/Container";
import { dataDesign } from "@/data";
import { motion } from "framer-motion";
import type { Benefits } from "@/types/response";
import { AnimationList } from "@/animations";
import Image from "next/image";
import { GetMediaUrl } from "@/utils/GetMediaUrl";

export function Benefits({ data }: { data: Benefits }): React.ReactNode {
  const ImageUrl = GetMediaUrl(data.device_benefits);

  return (
    <Container>
      <Headline
        doodleImages={dataDesign.benefits}
        headline={data.title}
        desc={data.description}
      />

      <div className="row d-flex align-items-start mt-8">
        <div className="col-lg-6 position-lg-sticky" style={{ top: "4rem" }}>
          <figure>
            <Image
              src={ImageUrl}
              alt="image"
              loading="lazy"
              width={400}
              height={400}
              quality={100}
            />
          </figure>
        </div>
        <BenefitsItems {...data} />
      </div>
    </Container>
  );
}

const BenefitsItems = ({ data }: { data: Benefits["data"] }) => {
  return (
    <motion.div
      className="col-lg-5 ms-auto mt-12 mt-lg-0"
      variants={AnimationList.listVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {data.map((item) => (
        <motion.div key={item.id} variants={AnimationList.itemVariants}>
          <BenefitItem data={item} />
        </motion.div>
      ))}
    </motion.div>
  );
};
