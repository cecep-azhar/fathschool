"use client";

import { SideBarItem } from "@/components/elements/SideBarItem";
import { useGetBlogs } from "@/hooks/GET/useGetBlogs";
import { Blog } from "@/types/response";
import { useCategoryCount, useRelatedBlogs } from "@/utils/UtilsBlogs";
import Skeleton from "react-loading-skeleton";

export function SideBar ({ slug }: { slug: string }): React.ReactNode {
  const { data: response, isLoading } = useGetBlogs();
  const blogs = Array.isArray(response?.data) ? response.data : [];
  const filteredBlogs = useRelatedBlogs(blogs, slug);
  const categories  = useCategoryCount(response?.data);

  const content = isLoading ? (
    [1, 2, 3, 4, 5].map((item) => <LoaderBlogOther key={item} />)
  ) : filteredBlogs.length === 0 ? (
    <p>Tidak ada data lainnya</p>
  ) : (filteredBlogs.slice(0, 6).map((item: Blog) => <SideBarItem key={item.id} blog={item} />));

  return (
    <aside className="col-lg-4 sidebar mt-8 mt-lg-0">
      <div className="widget">
        <h4 className="widget-title mb-6">Blogs Lainnya</h4>
        <ul className="image-list">{content}</ul>
      </div>
      <div className="widget">
        <h4 className="widget-title mb-6">Categories</h4>
        <ul className="unordered-list bullet-primary text-reset">
          {categories.map((item) => (
            <li key={item.id}>{item.name} ({item.count})</li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

const LoaderBlogOther = () => {
  return (
    <li>
      <figure className="rounded">
        <Skeleton width={60} height={60} />
      </figure>
      <div className="post-content">
        <Skeleton height={20} width={200} />
        <Skeleton height={15} width={100} />
      </div>
    </li>
  );
};
