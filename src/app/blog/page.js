import React from "react";
import BlogSection from "@/components/Blog/BlogSection";
import Heading from "@/components/Blog/Heading";

async function getData(api_url) {
  const response = await fetch(api_url);
  if (!response.ok) {
    throw new Error(`Network response was not ok: ${response.statusText}`);
  }
  return response.json();
}

async function fetchBlogs() {
  const apiUrl = 'https://fathschool.com/blogs'; // Replace with your actual API URL
  try {
    const blogs = await getData(apiUrl);
    return blogs;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    // Return default blogs or handle the error as needed
    return [
      {
        id: 1,
        image: 'Blog-1.png',
        title: 'Apa Itu FathSchool?',
        description: 'FathSchool adalah aplikasi berbasis web yang dirancang khusus untuk membantu sekolah dalam mengelola administrasi, akademik, keuangan, hingga komunikasi dengan orang tua. Dengan FathSchool, semua aktivitas pengelolaan sekolah menjadi lebih mudah, terintegrasi, dan efisien.',
        category: 'Informasi',
        author: 'Arkan',
        date: '17 Desember 2024'
      },
      {
        id: 2,
        image: 'Blog-2.png',
        title: 'Digitalisasi Sekolah',
        description: 'Era digital menuntut sekolah untuk beradaptasi dengan teknologi. FathSchool mempermudah langkah awal digitalisasi sekolah Anda melalui fitur-fitur sederhana namun powerful, tanpa memerlukan infrastruktur rumit.',
        category: 'Informasi',
        author: 'Zena',
        date: '17 Desember 2024'
      },
    ];
  }
}

export default async function Blog() {
  const blogs = await fetchBlogs();

  return (
    <div>
      <Heading />
      <BlogSection blogs={blogs} />
    </div>
  );
}
