import { ButtonShare } from "@/components/elements/ButtonShare";
import { Tags } from "@/components/elements/Tags";
import { formatedDate } from "@/utils/formatedDate";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import type { Blog } from "@/types/response";

function DetailBlog({ data, postsOther, children}: { data: Blog; postsOther?: []; children: React.ReactNode}): React.ReactNode {
  return (
    <div className="blog single">
      <div className="card">
        <figure className="card-img-top">
          <Image
            src="/assets/img/photos/b1.jpg"
            alt="Blog Post Image"
            width={1200}
            height={800}
          />
        </figure>

        <div className="card-body">
          <div className="classic-view mb-10">
            <article className="post">
              {/* Post Meta */}
              <ul className="post-meta mb-4">
                <li>
                  <i className="uil uil-user"></i>
                  <span>{data.blog_author.name}</span>
                </li>
                <li className="post-date">
                  <i className="uil uil-calendar-alt"></i>
                  <span>{formatedDate(data.published_at)}</span>
                </li>
              </ul>

              {/* Post Content */}
              <div className="post-content mb-5">
                <h2 className="h1 mb-4">{data.title}</h2>
                <p>{data.content}</p>
              </div>

              {/* Post Footer */}
              <div className="post-footer d-md-flex flex-md-row justify-content-md-between align-items-center mt-8">
                <Tags />
                <ButtonShare title={data.title} />
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
