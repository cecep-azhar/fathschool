'use client';

import { ButtonShare } from "@/components/elements/ButtonShare";
import { Tags } from "@/components/elements/Tags";
import { Blog } from "@/types/response";
import { FormatedDate } from "@/utils/FormatedDate";
import { GetMediaUrl } from "@/utils/GetMediaUrl";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";

function DetailBlog({ data, children}: { data: Blog; children?: React.ReactNode}): React.ReactNode {
  const blog = data;

  return (
    <div className="blog single">
      <div className="card">
        <figure className="card-img-top">
          <Image src={GetMediaUrl(blog.image)} alt="Blog Post Image" width={1200} height={800}/>
        </figure>

        <div className="p-4 p-lg-6">
          <div className="classic-view mb-10">
            <article className="post">
              
              {/* Post Meta */}
              <ul className="post-meta mb-4 d-flex flex-column flex-md-row">
                <li className="d-none"/>
                <li>
                  <i className="uil uil-user"></i>
                  <span>{blog.blog_author.name}</span>
                </li>
                <li>
                  <i className="uil uil-calendar-alt"></i>
                  <span>{FormatedDate(blog.published_at)}</span>
                </li>
                <li>
                  <i className="uil uil-apps"></i>
                  <span>{blog.blog_category.name}</span>
                </li>
              </ul>

              {/* Post Content */}
              <div className="post-content mb-5">
                <h2 className="h1 mb-4">{blog.title}</h2>
                <p>{blog.content}</p>
              </div>

              {/* Post Footer */}
              <div className="post-footer d-md-flex flex-md-row justify-content-md-between align-items-center mt-8">
                <Tags data={blog.tags} />
                <ButtonShare title={blog.title} />
              </div>
            </article>
          </div>

          {children}

        </div>
      </div>
    </div>
  );
}

function DetailBlogLoader() {
  const skeletonWidths = [60, 80, 40];

  return (
    <div>
      <Skeleton height={270} />
      <div className="card-body mt-8">
        <div className="classic-view mb-10">
          <article className="post">

            <div className="post-content">
              {skeletonWidths.map((width, index) => (
                <Skeleton key={index} height={35} width={`${width}%`} />
              ))}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export { DetailBlog, DetailBlogLoader };
