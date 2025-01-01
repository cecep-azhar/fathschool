"use client";

import { Breadcrumb, CardBlog } from "@/components/fragments";
import { Container } from "@/components/layouts/Container";
import { DetailBlog, DetailBlogLoader } from "@/components/pages/blog/DetailBlog";
import { useGetBlogs } from "@/hooks/GET/useGetBlogs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
   const { dataResponse, isLoading } = useGetBlogs(React.use(params).slug);

  return (
    <Container>
      <Breadcrumb />
      <div className="row gx-lg-8 gx-xl-12 mt-8">

        <div className="col-lg-8">
          {isLoading && <DetailBlogLoader />}
          { !isLoading && dataResponse &&
            <DetailBlog data={dataResponse}>
              <FooterBlog />
            </DetailBlog>
          }
        </div>

        <SideBar />
      </div>
    </Container>
  );
}

const SideBar = () => {
  return (
    <aside className="col-lg-4 sidebar">
      <div className="widget">
        <h4 className="widget-title mb-3">Popular Posts</h4>
        <ul className="image-list">
          <li>
            <figure className="rounded">
              <Link href="/blog-post">
                <Image
                  src="/assets/img/photos/a1.jpg"
                  alt="Popular Post"
                  width={100}
                  height={100}
                />
              </Link>
            </figure>
            <div className="post-content">
              <h6 className="mb-2">
                <a className="link-dark" href="/blog-post">
                  Magna Mollis Ultricies
                </a>
              </h6>
              <ul className="post-meta">
                <li className="post-date">
                  <i className="uil uil-calendar-alt"></i>
                  <span>26 Mar 2022</span>
                </li>
                <li className="post-comments">
                  <a href="#">
                    <i className="uil uil-comment"></i>3
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <figure className="rounded">
              <a href="/blog-post">
                <Image
                  src="/assets/img/photos/a2.jpg"
                  alt="Popular Post"
                  width={100}
                  height={100}
                />
              </a>
            </figure>
            <div className="post-content">
              <h6 className="mb-2">
                <a className="link-dark" href="/blog-post">
                  Ornare Nullam Risus
                </a>
              </h6>
              <ul className="post-meta">
                <li className="post-date">
                  <i className="uil uil-calendar-alt"></i>
                  <span>15 Mar 2022</span>
                </li>
                <li className="post-comments">
                  <a href="#">
                    <i className="uil uil-comment"></i>5
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <div className="widget mt-8">
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
        </div>
      </div>
    </aside>
  );
};


const FooterBlog = ({ dataOther }: { dataOther?: [] }) => {
  return (
    <div>
      <h3 className="mb-6">You Might Also Like</h3>
      <div className="swiper-container blog grid-view mb-16" data-margin="30" data-dots="true" data-items-md="2" data-items-xs="1">
        <div className="swiper">
          <div className="swiper-wrapper">
            {dataOther?.map((post: any, index: number) => (
              <CardBlog key={index} data={post} className="swiper-slide" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
