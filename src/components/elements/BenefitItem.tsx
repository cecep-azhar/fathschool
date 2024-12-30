import { TypeBenefits } from "@/types/data";
import Image from "next/image";

export const BenefitItem: React.FC<{data: TypeBenefits["defaultData"][number]}> = ({data}) => {
  return (
    <div className="d-flex flex-row mb-8">
      <div>
        <div className={`${data.icon.color} svg-bg svg-bg-lg rounded-xl me-5`}>
          <Image
            src={data.icon.src}
            className="h-12 w-8 icon-svg solid text-navy"
            alt="image"
            loading="lazy"
            width={100}
            height={100}
          />
        </div>
      </div>
      <div>
        <h4 className="fs-20">{data.name}</h4>
        <p>{data.desc}</p>
      </div>
    </div>
  );
};
