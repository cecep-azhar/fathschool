import { Blog } from "@/types/response";
import { useMemo } from "react";

// Filter berdasarkan kategori
export function filterByCategory (data: Blog[], category: string) {
  if (!category || category === "All") return data;
  return data.filter((blog) => blog.blog_category.slug === category);
};

// Fungsi pagination
export function paginateData  (
  data: Blog[],
  currentPage: number,
  itemsPerPage: number
) {
  const startIndex = (currentPage - 1) * itemsPerPage;
  return data.slice(startIndex, startIndex + itemsPerPage);
};

// Hitung total halaman
export function calculateTotalPages (data: Blog[], itemsPerPage: number) {
  return Math.ceil(data.length / itemsPerPage);
};

// ------------------------------------------------------ //

// Fungsi untuk memfilter blog berdasarkan kategori
export function useFilteredBlogs(
  blogs: Blog[] | undefined,
  selectedCategory: string
) {
  return useMemo(() => {
    if (!blogs) return [];
    let filtered = blogs;

    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (blog) => blog.blog_category.slug === selectedCategory
      );
    }

    return [...filtered].sort(
      (a, b) =>
        new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
    );
  }, [blogs, selectedCategory]);
}

// Fungsi untuk memfilter blog berdasarkan kategori
export function useBlogCategories(blogs: Blog[] | undefined) {
  return useMemo(() => {
    if (!blogs) return [{ id: "all", name: "Semua" }];

    const uniqueCategories = Array.from(
      new Set(blogs.map((blog) => blog.blog_category.slug))
    ).map((slug) => {
      const category = blogs.find(
        (blog) => blog.blog_category.slug === slug
      )?.blog_category;
      return {
        id: slug,
        name: category?.name || slug,
      };
    });

    return [{ id: "all", name: "Semua" }, ...uniqueCategories];
  }, [blogs]);
}

// Fungsi untuk memfilter blog berdasarkan kategori
export function useRelatedBlogs(
  blogs: Blog[] | undefined,
  currentSlug: string
) {
  return useMemo(() => {
    if (!blogs) return [];

    return blogs
      .filter((blog) => blog.slug !== currentSlug)
      .sort(
        (a, b) =>
          new Date(b.published_at).getTime() -
          new Date(a.published_at).getTime()
      )
      .slice(0, 6);
  }, [blogs, currentSlug]);
}

// Hook untuk menghitung kategori dan jumlahnya
export function useCategoryCount (blogs: Blog[] = []): CategoryCount[] {
  return useMemo(() => {
    const categoryMap = blogs.reduce((acc, blog) => {
      const category = blog.blog_category;

      if (!acc[category.id]) {
        acc[category.id] = {
          id: category.id,
          name: category.name,
          slug: category.slug,
          count: 0,
        };
      }

      acc[category.id].count++;
      return acc;
    }, {} as Record<number, CategoryCount>);

    return Object.values(categoryMap).sort((a, b) => b.count - a.count);
  }, [blogs]);
};

interface CategoryCount {
  id: number;
  name: string;
  slug: string;
  count: number;
}
