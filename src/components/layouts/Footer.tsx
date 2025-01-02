"use client";

import { Container } from "./Container";
import Link from "next/link";
import { useGetLandingPage } from "@/hooks/GET/useGetLandingPage";
import { MainFooter, SectionsData} from "@/types/response";
import { dataDefault } from "@/data";

export const Footer: React.FC<React.HtmlHTMLAttributes<HTMLDivElement>> = () => {
  const { dataResponse, isSuccess, isLoading } = useGetLandingPage();
  const dataFooter = (isSuccess && dataResponse?.sections.data) || dataDefault.data.sections.data;
  const { main_footer } = (isSuccess && dataResponse?.sections.data) || dataDefault.data.sections.data;

  if (isLoading) return null;

  return (
    <>
      <footer className="bg-dark text-inverse">
        <Container padding="py-13">
          <div className="row gy-6 gy-lg-0">
            <FooterHeader data={main_footer} />
            <div className="col-lg-2 d-none d-lg-block"></div>
            <FooterBody data={dataFooter} />
          </div>

          <hr className="mt-13 mt-md-15 mb-7" />

          <FooterBottom data={dataFooter.main_footer} />
        </Container>
      </footer>

      <div className="progress-wrap">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
    </>
  );
};

const FooterHeader = ({ data }: { data: MainFooter }) => {
  return (
    <div className="col-lg-4">
      <div className="widget">
        <h3 className="h2 mb-3 text-white">{data.title}</h3>
        <p className="lead mb-5">{data.description}</p>
        <Link
          target="_blank"
          href={data.button_link}
          className="btn btn-white rounded-pill"
        >
          {data.button_title}
        </Link>
      </div>
    </div>
  );
};

const FooterBody = ({ data }: { data: SectionsData }) => {

  return (
    <>
      <div className="col-md-4 col-lg-2">
        <div className="widget">
          <h4 className="widget-title text-white mb-3">
            {data.footer_section_1.title}
          </h4>
          <ul className="list-unstyled text-reset mb-0">
            {data.footer_section_1.data.map((item) => (
              <li key={item.id}>
                <Link href={item.link}>{item.item}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-md-4 col-lg-2">
        <div className="widget">
          <h4 className="widget-title text-white mb-3">
            {data.footer_section_2.title}
          </h4>
          <ul className="list-unstyled text-reset mb-0">
            {data.footer_section_2.data.map((item) => (
              <li key={item.id}>
                <Link href={item.link}>{item.item}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-md-4 col-lg-2">
        <div className="widget">
          <h4 className="widget-title text-white mb-3">
            {data.footer_section_3.title}
          </h4>
          <ul className="list-unstyled text-reset mb-0">
            {data.footer_section_3.data.map((item) => (
              <li key={item.id}>
                <Link href={item.link} target="_blank">{item.item}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

const FooterBottom = ({ data }: { data: MainFooter }) => {
  return (
    <div className="d-md-flex align-items-center justify-content-between">
      <p className="mb-2 mb-lg-0">{data.copyright}</p>
      <nav className="nav social social-white text-md-end">
        {data.data.map((sosmed, index) => (
          <Link key={index} href={sosmed.link} target="_blank">
            <i className={sosmed.icon}></i>
          </Link>
        ))}
      </nav>
    </div>
  );
};
