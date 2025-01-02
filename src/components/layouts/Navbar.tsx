"use client";

import Link from "next/link";
import Image from "next/image";
import { LogoDark, LogoLight } from "@/data/images";
import { Hamburger } from "../elements/Hamburger";
import { dataFooter, MenuNavbar } from "@/data";

export const Navbar: React.FC<{ NoPhone?: string } & React.HtmlHTMLAttributes<HTMLDivElement>> = ({ NoPhone = dataFooter.columns[2].extra?.phone }) => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg center-nav transparent position-absolute navbar-light caret-none">
        <div className="container flex-lg-row flex-nowrap align-items-center">
          <LogoDesktop />

          <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
            <LogoMobile />

            <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
              <Menu data={MenuNavbar} />

              <InformationMobile />
            </div>
          </div>

          <div className="navbar-other w-100 d-flex ms-auto">
            <ul className="navbar-nav flex-row align-items-center ms-auto">
              <li className="nav-item d-none d-md-block">
                <Link target="_blank" href={`https://api.whatsapp.com/send?phone=${NoPhone}&text=Halo%20selamat%20datang%20di%20WhatsApp%20admin%20Fathforc`} className="btn btn-sm btn-primary rounded-pill">
                  Kontak
                </Link>
              </li>

              <li className="nav-item d-lg-none">
                <Hamburger />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

const Menu = ({ data }: { data: typeof MenuNavbar }) => {
  return (
    <ul className="navbar-nav">
      {data.map((item, index) => (
        <li key={index} className="nav-item">
          <Link className="nav-link" href={item.href}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const InformationMobile = () => {
  return (
    <div className="d-lg-none mt-auto pt-6 pb-6 order-4">
      <Link href={`mailto:${dataFooter.columns[2].extra?.email}`} className="link-inverse">
        {dataFooter.columns[2].extra?.email}
      </Link>
      <br />
      <Link  target="_blank" href={`tel:${dataFooter.columns[2].extra?.phone}`} className="link-inverse">
        +{dataFooter.columns[2].extra?.phone}
      </Link>
      <nav className="nav social social-white mt-4">
        {dataFooter.sosmed.map((item, index) => (
          <Link key={index} href={item.link} target="_blank">
            <i className={item.icon}></i>
          </Link>
        ))}
      </nav>
    </div>
  );
};

const LogoMobile = () => {
  return (
    <div className="offcanvas-header d-lg-none">
      <Link href="/">
        <Image
          src={LogoLight.src}
          alt="Logo"
          blurDataURL={LogoLight.blurDataURL}
          width={125}
          height={28}
        />
      </Link>
      <button
        type="button"
        className="btn-close btn-close-white"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
  );
};

const LogoDesktop = () => {
  return (
    <div className="navbar-brand w-100">
      <Link href="/">
        <Image
          src={LogoDark.src}
          blurDataURL={LogoDark.blurDataURL}
          alt="Logo"
          width={150}
          height={30}
        />
      </Link>
    </div>
  );
};
