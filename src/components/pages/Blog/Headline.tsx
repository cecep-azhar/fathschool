import Image from "next/image";
import { dataDesign } from "@/data";

export function HeadlineBlog(): React.ReactNode {
  return (
    <div className="position-relative">
      {dataDesign.blogs.map((item, index) => (
        <Image
          key={index}
          src={item.src}
          style={item.style}
          className={`${item.style?.height} position-absolute d-none d-lg-block`}
          alt="svg"
          width={100}
          height={100}
        />
      ))}
      <h2 className="display-4 mb-3 text-center">
        Blogs <span className="underline-3 style-3 orange">FathSchool</span>
      </h2>
      <p className="lead fs-lg text-center px-sm-0 px-md-10 px-lg-18 px-xl-22">
        Selamat datang di blog kami! Temukan informasi menarik, inspiratif, dan
        bermanfaat untuk menambah wawasan Anda
      </p>
    </div>
  );
}
