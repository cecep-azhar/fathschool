'use client';

import { DetailBlog, DetailBlogLoader } from "./DetailBlog";
import { dataBlogs } from "@/data";
import { useGetBlogs } from "@/hooks/GET/useGetBlogs";

export function ContentBlog({ slug }: { slug: string }) {
  const { dataResponse, isLoading, isSuccess } = useGetBlogs(slug);
  const defaultBlog = dataBlogs.find((blog) => blog.slug === slug);
  const blogData = !isLoading && dataResponse ? dataResponse : defaultBlog;

  const content = isLoading ? <DetailBlogLoader /> : blogData ? (
    <DetailBlog data={blogData} />
  ) : <p>Data tidak ditemukan</p>

  return <div className="col-lg-8">{content}</div>;
}
