"use client";

import { CardBlog, CardLoaderBlog, Pagination } from "@/components/fragments";
import { Container } from "@/components/layouts/Container";
import { useGetBlogs } from "@/hooks/GET/useGetBlogs";
import { useState } from "react";
import "@/components/fragments/style.css";
  
export default function Blogs(): React.ReactNode {
  const { dataResponse, isLoading, isIdle, isError } = useGetBlogs();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Filter data berdasarkan halaman
  const paginatedData = Array.isArray(dataResponse) ? dataResponse.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) : [];
  const totalPages = Array.isArray(dataResponse) ? Math.ceil(dataResponse.length / itemsPerPage): 0;

  return (
    <Container>
      <div>
        <h2 className="display-4 mb-3 text-center">Blogs FathSchool</h2>
        <p className="lead fs-lg text-center px-sm-16 px-md-18 px-lg-20 px-xl-22">
          Ini adalah sumber informasi yang dapat membantu Anda berkembang dan
          terus belajar
        </p>
      </div>

      {/* Category Filter is here */}

      <div className="row my-10">
        {isLoading && [1, 2, 3, 4, 5, 6].map((item, index) => <CardLoaderBlog key={index} />)}
        {!isLoading && !isError && !isIdle && Array.isArray(paginatedData) && paginatedData.map((item) => <CardBlog key={item.id} data={item} />)}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </Container>
  );
}
