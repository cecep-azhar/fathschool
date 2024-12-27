import { dataFooter } from "@/data";
import { Container } from "./Container";
import Link from "next/link";

export const Footer: React.FC<React.HtmlHTMLAttributes<HTMLDivElement>> = () => {
  return (
    <>
      <footer className="bg-dark text-inverse">
        <Container>
          <div className="row gy-6 gy-lg-0">
            <FooterHeader data={dataFooter} />
            <div className="col-lg-2 d-none d-lg-block"></div>
            <FooterBody data={dataFooter} />
          </div>

          <hr className="mt-13 mt-md-15 mb-7" />

          <FooterBottom data={dataFooter} />
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

const FooterHeader = ({data}: {data: typeof dataFooter}) => {
  return (
    <div className="col-lg-4">
      <div className="widget">
        <h3 className="h2 mb-3 text-white">{data.headline}</h3>
        <p className="lead mb-5">{data.desc}</p>
        <Link href={data.button.link} className="btn btn-white rounded-pill">
          {data.button.text}
        </Link>
      </div>
    </div>
  );
};

const FooterBody = ({data}: {data: typeof dataFooter}) => {
  return data.columns.map((column, index) => (
    <div key={index} className="col-md-4 col-lg-2">
      <div className="widget">
        <h4 className="widget-title text-white mb-3">{column.title}</h4>
        {column.items && (
          <ul className="list-unstyled text-reset mb-0">
            {column.items.map((item, idx) => (
              <li key={idx}>
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        )}
        {column.extra && (
          <ul className="list-unstyled text-reset mt-3">
            <li>
              <Link href={`mailto:${column.extra.email}`}>{column.extra.email}</Link>
            </li>
            <li>
              <Link href={`tel:${column.extra.phone}`}>{column.extra.phone}</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  ))
};

const FooterBottom = ({data}: {data: typeof dataFooter}) => {
  return (
    <div className="d-md-flex align-items-center justify-content-between">
      <p className="mb-2 mb-lg-0">© 2024 FathSchool. All rights reserved.</p>
      <nav className="nav social social-white text-md-end">
        {data.sosmed.map((sosmed, index) => (
          <Link key={index} href={sosmed.link} target="_blank">
            <i className={sosmed.icon}></i>
          </Link>
        ))}
      </nav>
    </div>
  );
};

