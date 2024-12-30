import { TypeFeatures } from "@/types/data";
import Image from "next/image";

export const FeatureItem: React.FC<{data: TypeFeatures["defaultData"][number]}> = ({ data }) => {
  return (
    <div className="col-md-6 col-lg-3">
      <div className={`svg-bg svg-bg-lg rounded-xl mb-4 ${data.icon.color}`}>
        <Image
          src={data.icon.src}
          className="icon-svg solid text-navy"
          alt="image"
          width={100}
          height={100}
        />
      </div>
      <h4 className="fs-20">{data.title}</h4>
    </div>
  );
};
