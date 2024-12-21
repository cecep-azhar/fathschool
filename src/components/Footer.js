import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-inverse">
        <div className="container pt-13 pt-md-15 pb-7">
          <div className="row gy-6 gy-lg-0">
            <div className="col-lg-4">
              <div className="widget">
                <h3 className="h2 mb-3 text-white">Bergabung Bersama Kami</h3>
                <p className="lead mb-5">
                  Kelola operasional sekolah lebih efisien dengan aplikasi
                  manajemen sekolah berbasis teknologi. Mudah, cepat, dan
                  terintegrasi.
                </p>
                <a href="#" className="btn btn-white rounded-pill">
                  Join Us
                </a>
              </div>
              {/* /.widget */}
            </div>
            {/* /column */}
            <div className="col-md-4 col-lg-2 offset-lg-2">
              <div className="widget">
                <h4 className="widget-title text-white mb-3">Butuh Bantuan?</h4>
                <ul className="list-unstyled text-reset mb-0">
                  <li>
                    <a href="#">Support</a>
                  </li>
                  <li>
                    <a href="#">Get Started</a>
                  </li>
                  <li>
                    <a href="#">Terms of Use</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
              {/* /.widget */}
            </div>
            {/* /column */}
            <div className="col-md-4 col-lg-2">
              <div className="widget">
                <h4 className="widget-title text-white mb-3">Pelajari Lebih Lanjut</h4>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Our Story</a>
                  </li>
                  <li>
                    <a href="#">Projects</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                  <li>
                    <a href="#">Features</a>
                  </li>
                </ul>
              </div>
              {/* /.widget */}
            </div>
            {/* /column */}
            <div className="col-md-4 col-lg-2">
              <div className="widget">
                <h4 className="widget-title text-white mb-3">Hubungi Kami</h4>
                <address>
                Pajaten RT 03 RW 19 Desa Kecamatan Cileunyi Kabupaten Bandung, Jawa Barat
                </address>
                <a href="mailto:first.last@email.com">hi@fathforce</a>
                <br /> 0851-6172-1727
              </div>
              {/* /.widget */}
            </div>
            {/* /column */}
          </div>
          {/*/.row */}
          <hr className="mt-13 mt-md-15 mb-7" />
          <div className="d-md-flex align-items-center justify-content-between">
            <p className="mb-2 mb-lg-0">© 2024 FathSchool. All rights reserved.</p>
            <nav className="nav social social-white text-md-end">
              <a href="#">
                <i className="uil uil-twitter"></i>
              </a>
              <a href="#">
                <i className="uil uil-facebook-f"></i>
              </a>
              <a href="#">
                <i className="uil uil-dribbble"></i>
              </a>
              <a href="https://www.instagram.com/fathforce_official?igsh=MTN4dnFvcjB5bTV4Nw==">
                <i className="uil uil-instagram"></i>
              </a>
              <a href="https://www.youtube.com/@fathforce">
                <i className="uil uil-youtube"></i>
              </a>
            </nav>
            {/* /.social */}
          </div>
          {/* /div */}
        </div>
        {/* /.container */}
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

export default Footer;
