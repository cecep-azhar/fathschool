import { Blog } from "@/types/response";

// Filter berdasarkan kategori
export const filterByCategory = (data: Blog[], category: string) => {
  if (!category || category === "All") return data;
  return data.filter((blog) => blog.blog_category.slug === category);
};

// Fungsi pagination
export const paginateData = (data: Blog[], currentPage: number, itemsPerPage: number) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  return data.slice(startIndex, startIndex + itemsPerPage);
};

// Hitung total halaman
export const calculateTotalPages = (data: Blog[], itemsPerPage: number) => {
  return Math.ceil(data.length / itemsPerPage);
};
