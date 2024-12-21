"use client"
import React from "react";
import Image from 'next/image'; // Pastikan Anda mengimpor komponen Image

const BlogDetail = ({ blog }) => {
  if (!blog) {
    return (
      <section className="wrapper bg-soft-primary">
        <div>Blog tidak ditemukan</div>
      </section>
    ) 
  }

  return (
    <>
      <section className="wrapper bg-soft-primary">
        <div className="container pt-10 pb-19 pt-md-14 pb-md-20 text-center">
          <div className="row">
            <div className="col-md-10 col-xl-8 mx-auto">
              <div className="post-header">
                <div className="post-category text-line">
                  <a href="#" className="hover" rel="category">{blog.category}</a>
                </div>
                <h1 className="display-1 mb-4">{blog.title}</h1>
                <ul className="post-meta mb-5">
                  <li className="post-date">
                    <i className="uil uil-calendar-alt"></i>
                    <span>{blog.date}</span>
                  </li>
                  <li className="post-author">
                    <a href="#">
                      <i className="uil uil-user"></i>
                      <span>By {blog.author}</span>
                    </a>
                  </li>
                  <li className="post-comments">
                    <a href="#">
                      <i className="uil uil-comment"></i>3
                      <span> Comments</span>
                    </a>
                  </li>
                  <li className="post-likes">
                    <a href="#">
                      <i className="uil uil-heart-alt"></i>3
                      <span> Likes</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wrapper bg-light">
        <div className="container pb-14 pb-md-16">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="blog single mt-n17">
                <div className="card">
                  <figure className="card-img-top">
                    <Image src={`/assets/img/blog/${blog.image}`} alt={blog.title} width={800} height={500} />
                  </figure>
                  <div className="card-body">
                    <div className="classic-view">
                      <article className="post">
                        <div className="post-content mb-5">
                          <h2 className="h1 mb-4">{blog.title}</h2>
                          <p>{blog.description}</p>
                          {/* Add other relevant content */}
                        </div>
                        {/* Additional content here */}
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetail;
