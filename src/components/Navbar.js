"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  useEffect(() => {
    const handleSmoothScroll = (e, href, offset) => {
      e.preventDefault();
      const targetId = href.replace('/#', '');
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      } else {
        // Navigasi ke halaman home jika tidak ada target
        window.location.href = '/'; // Menggunakan window.location.href untuk navigasi
      }
    };

    const navLinks = document.querySelectorAll('a[href^="/#"]');
    const handleClick = (e) => {
      const href = e.currentTarget.getAttribute('href');
      const offset = parseInt(e.currentTarget.getAttribute('data-offset') || '0', 10);
      
      if (href) {
        handleSmoothScroll(e, href, offset);
      }
    };

    navLinks.forEach((link) => {
      link.addEventListener('click', handleClick);
    });

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener('click', handleClick);
      });
    };
  }, [pathname]); // Menggunakan pathname sebagai dependensi

  return (
    <header>
      <nav className="navbar navbar-expand-lg center-nav transparent position-absolute navbar-light caret-none">
        <div className="container flex-lg-row flex-nowrap align-items-center">
          <div className="navbar-brand w-100">
            <Link href="/">
              <Image
                src="/assets/img/logo_fathschool.png"
                alt="Logo"
                width={150}
                height={40}
                priority={true}
              />
            </Link>
          </div>
          <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
            <div className="offcanvas-header d-lg-none">
              <Link href="/">
                <Image
                  src="/assets/img/logo_fathschool.png"
                  alt="Logo"
                  width={150}
                  height={40}
                  priority={true}
                />
              </Link>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" href="/#home" data-offset="80">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/#feature" data-offset="100">
                    Fitur
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/#faq" data-offset="200">
                    FAQ
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/#testimoni" data-offset="200">
                    Testimoni
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/blog" data-offset="0">
                    Blog
                  </Link>
                </li>
              </ul>
              <div className="d-lg-none mt-auto pt-6 pb-6 order-4">
                <a href="mailto:first.last@email.com" className="link-inverse">
                  info@email.com
                </a>
                <br /> 00 (123) 456 78 90 <br />
                <nav className="nav social social-white mt-4">
                  <a href="#">
                    <i className="uil uil-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="uil uil-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="uil uil-dribbble"></i>
                  </a>
                  <a href="#">
                    <i className="uil uil-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="uil uil-youtube"></i>
                  </a>
                </nav>
              </div>
            </div>
          </div>
          <div className="navbar-other w-100 d-flex ms-auto">
            <ul className="navbar-nav flex-row align-items-center ms-auto">
              <li className="nav-item d-none d-md-block">
                <a
                  href="https://wa.me/6285161721727"
                  className="btn btn-sm btn-primary rounded-pill"
                >
                  Kontak
                </a>
              </li>
              <li className="nav-item d-lg-none">
                <button className="hamburger offcanvas-nav-btn">
                  <span></span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
