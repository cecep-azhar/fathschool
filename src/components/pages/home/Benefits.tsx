import { Container } from "@/components/layouts/Container";
import { dataBenefits } from "@/data";
import Image from "next/image";
import ImageDevice from "@/assets/img/content/device_benefits.png";

export default function BenefitsSection(): React.ReactNode {
  return (
    <Container>
      <div className="row text-center">
        <Headline data={dataBenefits} />
      </div>

      <div className="row d-flex align-items-start mb-19 border">
        <Device />
        <Benefits data={dataBenefits.defaultData} />
      </div>
    </Container>
  );
}

const Headline = ({ data }: { data: typeof dataBenefits }) => {
  return (
    <div className="col-md-11 col-lg-9 col-xl-8 col-xxl-7 mx-auto position-relative">
      {data.designDoodle.map((item) => (
        <Image key={item.name} src={item.src} style={item.style} className="h-14 position-absolute d-none d-lg-block" alt="image" width={100} height={100}/>
      ))}
      <h2 className="fs-16 text-uppercase text-muted mb-3">{dataBenefits.headline}</h2>
      <h3 className="display-3 mb-12">{dataBenefits.desc}</h3>
    </div>
  );
};

const Device = () => {
  return (
    <div className="col-lg-6 position-lg-sticky border" style={{ top: "4rem" }}>
      <figure>
        <Image src={ImageDevice.src} alt="image" loading="lazy" width={400} height={400} quality={100}/>
      </figure>
    </div>
  );
};

const Benefits = ({ data }: { data: typeof dataBenefits.defaultData }) => {
  return (
    <div className="col-lg-5 ms-auto">
      {data.map((item) => (
        <div key={item.name} className="d-flex flex-row mb-8">
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
