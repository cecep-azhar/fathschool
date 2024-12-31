"use client";

import { CardBlog, CardLoaderBlog } from "@/components/fragments";
import { Container } from "@/components/layouts/Container";
import { useGetBlogs } from "@/hooks/GET/useGetBlogs";
import Link from "next/link";
import "@/components/fragments/style.css";

export default function Blogs(): React.ReactNode {
  const { dataResponse, isLoading, isIdle, isError } = useGetBlogs();

  return (
    <Container>
      <div>
        <h2 className="display-4 mb-3 text-center">Blogs FathSchool</h2>
        <p className="lead fs-lg text-center px-md-16 px-lg-21 px-xl-0">
          Ini adalah sumber informasi yang dapat membantu Anda berkembang dan
          terus belajar
        </p>
      </div>

      {/* Category Filter is here */}

      <div className="row my-10">
        {isLoading && [1, 2, 3, 4, 5, 6].map((item, index) => <CardLoaderBlog key={index} />)}
        {!isLoading && !isError && !isIdle && dataResponse?.map((item, index) => <CardBlog key={index} data={item} />)}
      </div>

      <nav className="d-flex justify-content-center" aria-label="pagination">
        <ul className="pagination pagination-alt mb-0">
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
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">
                <i className="uil uil-arrow-right"></i>
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
