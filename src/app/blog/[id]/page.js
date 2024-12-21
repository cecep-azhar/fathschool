import React from "react";
import BlogDetail from "@/components/Blog/BlogDetail";

const defaultBlogs = [
  {
    id: 1,
    image: "Blog-1.png",
    title: "Apa Itu FathSchool?",
    description:
      "FathSchool adalah aplikasi berbasis web yang dirancang khusus untuk membantu sekolah dalam mengelola administrasi, akademik, keuangan, hingga komunikasi dengan orang tua. Dengan FathSchool, semua aktivitas pengelolaan sekolah menjadi lebih mudah, terintegrasi, dan efisien.",
    category: "Informasi",
    author: "Arkan",
    date: "17 Desember 2024"
  },
  {
    id: 2,
    image: "Blog-2.png",
    title: "Digitalisasi Sekolah",
    description:
      "Era digital menuntut sekolah untuk beradaptasi dengan teknologi. FathSchool mempermudah langkah awal digitalisasi sekolah Anda melalui fitur-fitur sederhana namun powerful, tanpa memerlukan infrastruktur rumit.",
    category: "Informasi",
    author: "Zena",
    date: "17 Desember 2024"
  }
];

// Komponen utama untuk halaman detail blog
export default function BlogDetailPage({ params }) {
  const { id } = params; // Mengambil ID dari params
  const blogId = parseInt(id, 10); // Mengonversi ID menjadi integer

  console.log("Received ID:", blogId);

  // Mencari blog yang ditemukan dari defaultBlogs
  const foundBlog = defaultBlogs.find((b) => b.id === blogId);

  console.log("Found Blog:", foundBlog);

  // Menangani jika blog tidak ditemukan
  if (!foundBlog) {
    return (
      <section className="wrapper bg-soft-primary">
        <div className="container pt-10 pb-19 pt-md-14 pb-md-20 text-center">
          <h1>Blog tidak ditemukan</h1>
        </div>
      </section>
    );
  }

  // Mengembalikan komponen BlogDetail dengan data blog yang ditemukan
  return <BlogDetail blog={foundBlog} />;
}
