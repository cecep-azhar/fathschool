import { Container } from "@/components/layouts/Container";
import { Headline } from "@/components/fragments/Headline";
import { dataBenefits } from "@/data";
import { ImageBenefits } from "@/data/images";
import { BenefitItem } from "@/components/elements/BenefitItem";
import Image from "next/image";

export function Benefits(): React.ReactNode {
  return (
    <Container>
      <Headline
        doodleImages={dataBenefits.designDoodle}
        headline={dataBenefits.headline}
        desc={
          <>
            Beberapa Alasan Mengapa Pelanggan Kami Memilih{" "}
            <span className="text-gradient gradient-7">FathSchool</span>.
          </>
        }
        name={dataBenefits.name}
      />

      <div className="row d-flex align-items-start mt-8">
        <Device />
        <BenefitsItems data={dataBenefits.defaultData} />
      </div>
    </Container>
  );
}

const Device = () => {
  return (
    <div
      className="col-lg-6 position-lg-sticky"
      style={{ top: "4rem" }}
      data-cues="slideInLeft"
      data-delay="300"
    >
      <figure>
        <Image
          src={ImageBenefits.src}
          alt="image"
          loading="lazy"
          width={400}
          height={400}
          quality={100}
        />
      </figure>
    </div>
  );
};

const BenefitsItems = ({ data }: { data: typeof dataBenefits.defaultData }) => {
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
