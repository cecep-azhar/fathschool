import { Breadcrumb, CardBlog } from "@/components/fragments";
import { Container } from "@/components/layouts/Container";
import { ContentBlog } from "@/components/pages/Blog/ContentBlog";
import {
  DetailBlog,
  DetailBlogLoader,
} from "@/components/pages/Blog/DetailBlog";
import { SideBar } from "@/components/pages/Blog/SideBar";
import { dataBlogs } from "@/data";
import { useGetBlogs } from "@/hooks/GET/useGetBlogs";
import { Blog } from "@/types/response";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function BlogDetail({params}: { params: Promise<{ slug: string }>}) {
  const { slug } = await params;

  return (
    <Container>
      <Breadcrumb />
      <div className="row gx-lg-8 gx-xl-12 mt-8">
        <ContentBlog slug={slug} />
        <SideBar slug={slug} />
      </div>
    </Container>
  );
}

const FooterBlog = ({ dataOther }: { dataOther?: [] }) => {
  return (
    <div>
      <h3 className="mb-6">You Might Also Like</h3>
      <div
        className="swiper-container blog grid-view mb-16"
        data-margin="30"
        data-dots="true"
        data-items-md="2"
        data-items-xs="1"
      >
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
