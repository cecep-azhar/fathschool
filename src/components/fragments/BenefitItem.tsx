import { dataDefault } from "@/data";
import { Benefits } from "@/types/response";
import Image from "next/image";

export const BenefitItem: React.FC<{data: Benefits['data'][0]}> = ({data}) => {
  const ImageSrc = process.env.NEXT_PUBLIC_STORAGE_URL?.concat(data.icon.toString()) || dataDefault.data.sections.data.benefits.device_benefits;
  
  const colorCard = [
    "bg-pale-orange",
    "bg-pale-red",
    "bg-pale-blue",
    "bg-pale-purple",
    "bg-pale-green",
    "bg-pale-yellow",
  ];

  const colorIndex = (data.id as number)  % colorCard.length; 

  return (
    <div className="d-flex flex-row mb-8">
      <div>
        <div className={`${colorCard[colorIndex]} svg-bg svg-bg-lg rounded-xl me-5`}>
          <Image src={ImageSrc} className="h-12 w-8 icon-svg solid text-navy" alt="image" loading="lazy" width={100} height={100}/>
        </div>
      </div>
      <div>
        <h4 className="fs-20">{data.title}</h4>
        <p>{data.description}</p>
      </div>
    </div>
  );
};
