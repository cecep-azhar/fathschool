import { Container } from "@/components/layouts/Container";
import { Headline } from "@/components/fragments/Headline";
import { dataBenefits } from "@/data";
import { ImageBenefits } from "@/data/images";
import Image from "next/image";

export function BenefitsSection(): React.ReactNode {
  return (
    <Container>
      <div className="row border">
        <Headline doodleImages={dataBenefits.designDoodle} headline={dataBenefits.headline} desc={dataBenefits.desc} name={dataBenefits.name} />
      </div>

      <div className="row d-flex align-items-start mt-8">
        <Device />
        <Benefits data={dataBenefits.defaultData} />
      </div>
    </Container>
  );
}

const Device = () => {
  return (
    <div className="col-lg-6 position-lg-sticky" style={{ top: "4rem" }}>
      <figure>
        <Image src={ImageBenefits.src} alt="image" loading="lazy" width={400} height={400} quality={100}/>
      </figure>
    </div>
  );
};

const Benefits = ({ data }: { data: typeof dataBenefits.defaultData }) => {
  return (
    <div className="col-lg-5 ms-auto mt-12 mt-lg-0">
      {data.map((item, index) => (
        <div key={index} className="d-flex flex-row mb-8">
          <div>
            <div className={`${item.icon.color} svg-bg svg-bg-lg rounded-xl me-5`}>
              <Image src={item.icon.src} className="h-12 w-8 icon-svg solid text-navy" alt="image" loading="lazy" width={100} height={100}/>
            </div>
          </div>
          <div>
            <h4 className="fs-20">{item.name}</h4>
            <p>{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
