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

async function getData(api_url) {
  const response = await fetch(api_url);
  if (!response.ok) {
    throw new Error(`Network response was not ok: ${response.statusText}`);
  }
  return response.json();
}

async function fetchBlogById(blogId) {
  const apiUrl = `https://fathschool.com/blogs/${blogId}`; // Replace with your actual API URL
  try {
    const blog = await getData(apiUrl);
    return blog;
  } catch (error) {
    console.error('Error fetching blog:', error);
    return null; // Return null if there's an error
  }
}

export default async function BlogDetailPage({ params }) {
  const { id } = params; // Use params directly
  const blogId = parseInt(id, 10);

  console.log("Received ID:", blogId);

  const blog = await fetchBlogById(blogId);

  const foundBlog = blog || defaultBlogs.find((b) => b.id === blogId);

  console.log("Found Blog:", foundBlog);

  if (!foundBlog) {
    return (
      <section className="wrapper bg-soft-primary">
        <div className="container pt-10 pb-19 pt-md-14 pb-md-20 text-center">
          <h1>Blog tidak ditemukan</h1>
        </div>
      </section>
    ); // Handle if blog is not found
  }

  return <BlogDetail blog={foundBlog} />;
}
