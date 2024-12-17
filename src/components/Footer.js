import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-inverse">
        <div className="container pt-13 pt-md-15 pb-7">
          <div className="row gy-6 gy-lg-0">
            <div className="col-lg-4">
              <div className="widget">
                <h3 className="h2 mb-3 text-white">Join the Community</h3>
                <p className="lead mb-5">
                  Let's make something great together. We are trusted by over
                  5000+ clients. Join them by using our services and grow your
                  business.
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
                <h4 className="widget-title text-white mb-3">Need Help?</h4>
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
                <h4 className="widget-title text-white mb-3">Learn More</h4>
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
                <h4 className="widget-title text-white mb-3">Get in Touch</h4>
                <address>
                  Moonshine St. 14/05 Light City, London, United Kingdom
                </address>
                <a href="mailto:first.last@email.com">info@email.com</a>
                <br /> 00 (123) 456 78 90
              </div>
              {/* /.widget */}
            </div>
            {/* /column */}
          </div>
          {/*/.row */}
          <hr className="mt-13 mt-md-15 mb-7" />
          <div className="d-md-flex align-items-center justify-content-between">
            <p className="mb-2 mb-lg-0">© 2024 Sandbox. All rights reserved.</p>
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
              <a href="#">
                <i className="uil uil-instagram"></i>
              </a>
              <a href="#">
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
