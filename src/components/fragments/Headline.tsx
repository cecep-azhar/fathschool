import { TypeBase, TypeDesignDoodle } from "@/types/data";
import Image from "next/image";

interface Props extends TypeBase {
  doodleImages: TypeDesignDoodle[];
}

export const Headline: React.FC<Props> = ({ doodleImages, headline, desc }) => {
  return (
    <div className="row text-center">
      <div className="col-md-11 col-lg-10 col-xl-9 col-xxl-8 text-center mx-auto position-relative">
        {doodleImages.map((item, index) => (
          <Image
            key={index}
            src={item.src}
            style={item.style}
            className="w-16 position-absolute d-none d-lg-block"
            data-delay="1800"
            alt="image"
            width={100}
            height={100}
          />
        ))}
        <h2 className="fs-18 text-uppercase text-muted mb-3">{headline}</h2>
        <h3 className="display-3 mb-8 px-xl-6">{desc}</h3>
      </div>
    </div>
  );
};
