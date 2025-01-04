import { Blog } from "@/types/response";
import { FormatedDate } from "@/utils/FormatedDate";
import { GetMediaUrl } from "@/utils/GetMediaUrl";
import Image from "next/image";
import Link from "next/link";

export const SideBarItem = ({ blog }: { blog: Blog }) => {
  return (
    <li key={blog.id}>
      <figure className="rounded">
        <Link href={`/blogs/detail/${blog.slug}`}>
          <Image
            src={GetMediaUrl(blog.image)}
            alt={blog.title}
            width={100}
            height={100}
          />
        </Link>
      </figure>
      <div className="post-content">
        <h6 className="mb-2">
          <Link href={`/blogs/detail/${blog.slug}`} className="link-dark">
            {blog.title}
          </Link>
        </h6>
        <ul className="post-meta ">
          <li className="post-comments"></li>
          <li className="post-user">
            <i className="uil uil-user"></i>
            <span>{blog.blog_author.name}</span>
          </li>
          <li className="post-date">
            <i className="uil uil-calendar-alt"></i>
            <span>{FormatedDate(blog.published_at)}</span>
          </li>
        </ul>
      </div>
    </li>
  );
};
