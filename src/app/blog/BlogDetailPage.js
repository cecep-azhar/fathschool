"use client"
import React from "react";
import BlogDetail from "@/components/Blog/BlogDetail";

const Blogs = [
    {
        image: 'Blog-1.png',
        title: 'Apa Itu FathSchool?',
        description: 'FathSchool adalah aplikasi berbasis web yang dirancang khusus untuk membantu sekolah dalam mengelola administrasi, akademik, keuangan, hingga komunikasi dengan orang tua. Dengan FathSchool, semua aktivitas pengelolaan sekolah menjadi lebih mudah, terintegrasi, dan efisien.',
        category: 'Informasi',
        author: 'Arkan',
        date: '17 Desember 2024'
    },
    {
        image: 'Blog-2.png',
        title: 'Digitalisasi Sekolah',
        description: 'Era digital menuntut sekolah untuk beradaptasi dengan teknologi. FathSchool mempermudah langkah awal digitalisasi sekolah Anda melalui fitur-fitur sederhana namun powerful, tanpa memerlukan infrastruktur rumit.',
        category: 'Informasi',
        author: 'Zena',
        date: '17 Desember 2024'
    },
];

export default function BlogDetailPage({ params }) {
  const { title } = params;
  const blog = Blogs.find(blog => blog.title === decodeURIComponent(title));

  return blog ? <BlogDetail blog={blog} /> : <div>Blog not found</div>;
}