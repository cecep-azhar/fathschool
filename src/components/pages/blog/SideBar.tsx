'use client';

import { dataBlogs } from "@/data";
import { useGetBlogs } from "@/hooks/GET/useGetBlogs";
import { Blog } from "@/types/response";
import { FormatedDate } from "@/utils/FormatedDate";
import { GetMediaUrl } from '@/utils/GetMediaUrl';
import Image from "next/image";
import Link from "next/link";

export const SideBar = ({ slug }: { slug: string }) => {
  const { dataResponse, isLoading, isError, isSuccess } = useGetBlogs();
  const data = isSuccess && dataResponse?.length > 0 ? dataResponse : dataBlogs;
  const filteredBlogs = data?.filter((item: Blog) => item.slug !== slug) || [];

  return (
    <aside className="col-lg-4 sidebar mt-8 mt-lg-0">
      <div className="widget">
        <h4 className="widget-title mb-3">Blogs Lainnya</h4>

        <ul className="image-list">
          {isLoading && <p>Loading...</p>}
          {!isLoading && filteredBlogs.length === 0 && <p>Data tidak ditemukan</p>}
          {!isLoading &&filteredBlogs.slice(0, 5).map((blog: Blog) => (
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
                <ul className="post-meta">
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
          ))}
        </ul>

        {/* <div className="widget mt-8">
          <h4 className="widget-title mb-3">Categories</h4>
          <ul className="unordered-list bullet-primary text-reset">
            <li>
              <a href="#">Teamwork (21)</a>
            </li>
            <li>
              <a href="#">Ideas (19)</a>
            </li>
            <li>
              <a href="#">Workspace (16)</a>
            </li>
          </ul>
        </div> */}
      </div>
    </aside>
  );
};