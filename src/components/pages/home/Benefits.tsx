import { BenefitItem, Headline } from "@/components/fragments";
import { Container } from "@/components/layouts/Container";
import { dataBenefits, dataDefault } from "@/data";
import type { Benefits } from "@/types/response";
import Image from "next/image";

export function Benefits({ data }: { data: Benefits | undefined }): React.ReactNode {

  if (!data) {
    data = dataDefault.data.sections.data.benefits;
  }

  return (
    <Container>
      <Headline
        doodleImages={dataBenefits.designDoodle}
        headline={data.title}
        desc={data.description}
      />

      <div className="row d-flex align-items-start mt-8">
        <Device data={data} />
        <BenefitsItems {...data} />
      </div>
    </Container>
  );
}

const Device = ({ data }: { data: Benefits }) => {
  const ImageSrc = process.env.NEXT_PUBLIC_STORAGE_URL?.concat(data.device_benefits.toString()) || dataDefault.data.sections.data.benefits.device_benefits;

  return (
    <div className="col-lg-6 position-lg-sticky" style={{ top: "4rem" }} data-cues="slideInLeft" data-delay="300">
      <figure>
        <Image src={ImageSrc} alt="image" loading="lazy" width={400} height={400} quality={100}/>
      </figure>
    </div>
  );
};

const BenefitsItems = ({ data }: { data: Benefits['data'] }) => {
  return (
    <div
      className="col-lg-5 ms-auto mt-12 mt-lg-0"
      data-cues="slideInRight"
      data-group="benefits"
      data-delay="600"
    >
      {data.map((item, index) => (
        <BenefitItem key={index} data={item} />
      ))}
    </div>
  );
};
