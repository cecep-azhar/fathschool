import { ResponseLandingPage } from "@/types/response";
import { GetMediaUrl } from "@/utils/GetMediaUrl";
import Image from "next/image";

export const FeatureItem: React.FC<{data: ResponseLandingPage['data']['sections']['data']['app_feature']['data'][0]}> = ({ data }) => {
  const colorCard = ["bg-pale-orange", "bg-pale-red", "bg-pale-blue", "bg-pale-purple", "bg-pale-green", "bg-pale-yellow"];
  const colorIndex = (data.id as number) % colorCard.length;

  const ImageUrl = GetMediaUrl(data.image);

  return (
    <div className="col-md-6 col-lg-3">
      <div className={`svg-bg svg-bg-lg rounded-xl mb-4 ${colorCard[colorIndex]}`}>
        <Image
          src={ImageUrl}
          className="icon-svg solid text-navy h-14"
          alt="image"
          width={100}
          height={100}
        />
      </div>
      <h4 className="fs-20">{data.description}</h4>
    </div>
  );
};
