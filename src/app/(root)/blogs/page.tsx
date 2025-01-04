"use client";

import "@/components/fragments/style.css";
import { calculateTotalPages, paginateData, useBlogCategories, useFilteredBlogs } from "@/utils/UtilsBlogs";
import { CardBlog, CardLoaderBlog, Pagination } from "@/components/fragments";
import { Container } from "@/components/layouts/Container";
import { useGetBlogs } from "@/hooks/GET/useGetBlogs";
import { useState } from "react";
import { CategoryFilter } from "@/components/fragments/CategoryFilter";
import { DataNotFound } from "@/components/layouts/DataNotFound";
import { HeadlineBlog } from "@/components/pages/Blog/Headline";
import { dataBlogs } from "@/data";

export default function Blogs(): React.ReactNode {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const itemsPerPage = 6;

  const { data: response, isLoading, isSuccess } = useGetBlogs();
  const data = isSuccess && response ? response.data : dataBlogs;
  const filteredAndSortedData = useFilteredBlogs(data, selectedCategory);
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const paginatedData =
    paginateData(filteredAndSortedData, currentPage, itemsPerPage);

  return (
    <Container>
      <HeadlineBlog />
      
      <CategoryFilter
        categories={useBlogCategories(data)}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />

      <div className="row">
        {isLoading ? [1, 2, 3, 4, 5, 6].map((item) => <CardLoaderBlog key={item} />) : paginatedData.length === 0 ? <DataNotFound/> : paginatedData.map((item) => <CardBlog key={item.id} data={item} />)}
      </div>

      {filteredAndSortedData.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={calculateTotalPages(filteredAndSortedData, itemsPerPage)}
          onPageChange={(page) => setCurrentPage(page)}
        />
      )}
    </Container>
  );
}

