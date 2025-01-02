"use client";

import Link from "next/link";
import Image from "next/image";
import { LogoDark, LogoLight } from "@/data/images";
import { Hamburger } from "../elements/Hamburger";
import { dataDefault, MenuNavbar } from "@/data";
import { useGetLandingPage } from "@/hooks/GET/useGetLandingPage";

export const Navbar: React.FC<{ NoPhone?: string } & React.HtmlHTMLAttributes<HTMLDivElement>> = ({ NoPhone = dataDefault.data.sections.data.footer_section_3.data[2].item }) => {

  return (
    <header>
      <nav className="navbar navbar-expand-lg center-nav transparent position-absolute navbar-light caret-none">
        <div className="container flex-lg-row flex-nowrap align-items-center">
          <LogoDesktop />

          <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
            <LogoMobile />

            <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
              <Menu data={MenuNavbar} />
            </div>
          </div>

          <div className="navbar-other w-100 d-flex ms-auto">
            <ul className="navbar-nav flex-row align-items-center ms-auto">
              <li className="nav-item d-none d-md-block">
                <Link target="_blank" href={`https://api.whatsapp.com/send?phone=${NoPhone}&text=Halo%20selamat%20datang%20di%20WhatsApp%20admin%20FathSchool`} className="btn btn-sm btn-blue rounded-pill">
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
