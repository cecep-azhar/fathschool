import Image from "next/image";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import { Blog } from "@/types/response";
import { FormatedDate } from "@/utils/FormatedDate";
import { GetMediaUrl } from "@/utils/GetMediaUrl";

const CardBlog: React.FC<{ data: Blog } & React.HTMLAttributes<HTMLDivElement>> = ({ data, className }) => {
  if (!data) return null;

  return (
    <article className={`col-md-6 col-lg-4 g-6 ${className}`}>
      <Header data={data} />
      <Body data={data} />
      <Footer data={data} />
    </article>
  );
};

const Header: React.FC<{ data: Blog }> = ({ data }) => {

  return (
    <figure className="overlay overlay-1 hover-scale rounded mb-5 imageHover-container">
      <Link href={`/blogs/detail/${data.slug}`}>
        <Image src={GetMediaUrl(data.image)} alt="image" className="image" quality={100} width={400} height={400} />
      </Link>
      <figcaption>
        <h5 className="from-top mb-0">Lihat Selengkapnya</h5>
      </figcaption>
    </figure>
  );
};

const Body: React.FC<{ data: Blog }> = ({ data }) => {
  return (
    <div className="post-header">
      <div className="post-category text-line">
        <Link href="#" className="hover" rel="category">
          {data.blog_category.name}
        </Link>
      </div>
      <h2 className="post-title h3 mt-1 mb-3">
        <Link className="link-dark" href={`/blogs/detail/${data.slug}`}>
          {data.title}
        </Link>
      </h2>
      <div className="post-content mb-2">
        {data.summary.slice(0, 150) + " ..."}
      </div>
    </div>
  );
};

const Footer: React.FC<{ data: Blog }> = ({ data }) => {
  return (
    <div className="post-footer">
      <ul className="post-meta">
        <li className="post-author">
          <i className="uil uil-user"></i>
          <span>{data.blog_author.name}</span>
        </li>
        <li className="post-date">
          <i className="uil uil-calendar-alt"></i>
          <span>{FormatedDate(data.published_at)}</span>
        </li>
      </ul>
    </div>
  );
};

const CardLoaderBlog: React.FC = () => {
  return (
    <article className="col-lg-4 g-6">
      <Skeleton height={250} />
      <div className="mb-2 mt-3">
        <Skeleton width={"80%"} height={30} />
        <Skeleton width={"50%"} height={25} />
      </div>
      <Skeleton width={"25%"} height={20} />
    </article>
  );
};

export { CardBlog, CardLoaderBlog };