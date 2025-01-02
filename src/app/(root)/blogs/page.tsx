"use client";

import "@/components/fragments/style.css";
import { CardBlog, CardLoaderBlog, Pagination } from "@/components/fragments";
import { Container } from "@/components/layouts/Container";
import { useGetBlogs } from "@/hooks/GET/useGetBlogs";
import { useState } from "react";
import { dataBlogs, dataDesign } from "@/data";
import { Blog } from "@/types/response";
import Image from "next/image";
import { calculateTotalPages, paginateData } from "@/utils/UtilsBlogs";

export default function Blogs(): React.ReactNode {
  const { dataResponse, isLoading, isSuccess } = useGetBlogs();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Fallback ke data default
  const data = isSuccess && dataResponse?.length > 0 ? dataResponse : dataBlogs;

  // Filter data berdasarkan halaman
  const paginatedData = paginateData(data, currentPage, itemsPerPage);

  // Kondisi Content
  const ResultCodination = isLoading ? (
    [1, 2, 3, 4, 5, 6].map((index) => <CardLoaderBlog key={index} />)
  ) : paginatedData.length === 0 ? (
    <p>Data tidak ditemukan</p>
  ) : (
    paginatedData.map((item: Blog) => <CardBlog key={item.id} data={item} />)
  );

  return (
    <Container>
      <Headline />

      {/* Category Filter is here */}

      <div className="row my-12">{ResultCodination}</div>

      <Pagination
        currentPage={currentPage}
        totalPages={calculateTotalPages(data, itemsPerPage)}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </Container>
  );
}

const Headline = () => {
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
      <h2 className="display-4 mb-3 text-center">Blogs <span className="underline-3 style-3 orange">FathSchool</span></h2>
      <p className="lead fs-lg text-center px-sm-16 px-md-18 px-lg-20 px-xl-23">
        Temukan berbagai informasi menarik dan inspiratif yang dirancang untuk
        membantu Anda terus berkembang, belajar, dan mencapai potensi terbaik
        Anda.
      </p>
    </div>
  );
};
