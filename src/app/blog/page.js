import React from "react";
import BlogSection from "@/components/Blog/BlogSection";
import Heading from "@/components/Blog/Heading";

// Data dummy untuk blog
const defaultBlogs = [
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

// Komponen utama untuk menampilkan blog
export default function Blog() {
  // Menggunakan data dummy langsung
  const blogs = defaultBlogs;

  return (
    <div>
      <Heading />
      <BlogSection blogs={blogs} />
    </div>
  );
}
