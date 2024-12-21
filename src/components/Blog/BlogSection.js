"use client"

import React from "react";
import Link from "next/link";
import Image from 'next/image';

const BlogSection = ({ blogs }) => {
  return (
    <section className="wrapper bg-light">
      <div className="container pb-14 pb-md-16">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="blog classic-view mt-n17">
              {blogs.slice(0, 3).map((blog, index) => (
                <article className="post" key={index}>
                  <div className="card">
                    <figure className="card-img-top overlay overlay-1 hover-scale">
                      <Link href={`/blog/${blog.id}`} className="link-dark">
                        <Image
                          src={`/assets/img/blog/${blog.image}`}
                          alt={blog.title}
                          width={1000}
                          height={500}
                        />
                      </Link>
                      <figcaption>
                        <h5 className="from-top mb-0">Read More</h5>
                      </figcaption>
                    </figure>
                    <div className="card-body">
                      <div className="post-header">
                        <div className="post-category text-line">
                          <Link href="#" className="hover" rel="category">
                            {blog.category}
                          </Link>
                        </div>
                        <h2 className="post-title mt-1 mb-0">
                          <Link href={`/blog/${blog.id}`} className="link-dark">
                            {blog.title}
                          </Link>
                        </h2>
                      </div>
                      <div className="post-content">
                        <p>{blog.description}</p>
                      </div>
                    </div>
                    <div className="card-footer">
                      <ul className="post-meta d-flex mb-0">
                        <li className="post-date">
                          <i className="uil uil-calendar-alt"></i>
                          <span>{blog.date}</span>
                        </li>
                        <li className="post-author">
                          <Link href="#">
                            <i className="uil uil-user"></i>
                            <span>By {blog.author}</span>
                          </Link>
                        </li>
                        <li className="post-comments">
                          <Link href="#">
                            <i className="uil uil-comment"></i>3
                            <span> Comments</span>
                          </Link>
                        </li>
                        <li className="post-likes ms-auto">
                          <Link href="#">
                            <i className="uil uil-heart-alt"></i>3
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </article>
              ))}

              <div className="blog grid grid-view">
                <div className="row isotope gx-md-8 gy-8 mb-8">
                  {blogs.slice(3).map((blog, index) => (
                    <article className="item post col-md-6" key={index}>
                      <div className="card">
                        <figure className="card-img-top overlay overlay-1 hover-scale">
                          <Link href={`/blog/${blog.id}`}>
                            <Image
                              src={`/assets/img/blog/${blog.image}`}
                              alt={blog.title}
                              width={1000}
                              height={500}
                            />
                          </Link>
                          <figcaption>
                            <h5 className="from-top mb-0">Read More</h5>
                          </figcaption>
                        </figure>
                        <div className="card-body">
                          <div className="post-header">
                            <div className="post-category text-line">
                              <Link href="#" className="hover" rel="category">
                                {blog.category}
                              </Link>
                            </div>
                            <h2 className="post-title h3 mt-1 mb-3">
                              <Link href={`/blog/${blog.id}`} className="link-dark">
                                {blog.title}
                              </Link>
                            </h2>
                          </div>
                          <div className="post-content">
                            <p>{blog.description}</p>
                          </div>
                        </div>
                        <div className="card-footer">
                          <ul className="post-meta d-flex mb-0">
                            <li className="post-date">
                              <i className="uil uil-calendar-alt"></i>
                              <span>{blog.date}</span>
                            </li>
                            <li className="post-comments">
                              <Link href="#">
                                <i className="uil uil-comment"></i>3
                              </Link>
                            </li>
                            <li className="post-likes ms-auto">
                              <Link href="#">
                                <i className="uil uil-heart-alt"></i>3
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <nav className="d-flex" aria-label="pagination">
                <ul className="pagination">
                  <li className="page-item disabled">
                    <Link className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">
                        <i className="uil uil-arrow-left"></i>
                      </span>
                    </Link>
                  </li>
                  <li className="page-item active">
                    <Link className="page-link" href="#">
                      1
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" href="#">
                      2
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" href="#">
                      3
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">
                        <i className="uil uil-arrow-right"></i>
                      </span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
