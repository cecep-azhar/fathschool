"use client";

import React, { useEffect } from "react";
import Image from 'next/image';

const injectSVG = async (imgElement) => {
  const src = imgElement.getAttribute('src');
  if (!src) return;

  try {
    const response = await fetch(src);
    if (!response.ok) throw new Error('Failed to load SVG');

    const svgText = await response.text();
    const parser = new DOMParser();
    const svgElement = parser.parseFromString(svgText, "image/svg+xml").documentElement;

    svgElement.removeAttribute('xmlns:a');
    svgElement.setAttribute('class', imgElement.className);

    if (imgElement.parentNode) {
      imgElement.parentNode.replaceChild(svgElement, imgElement);
    }
  } catch (error) {
    console.error('Error injecting SVG:', error);
  }
};

export default function Feature({ props }) {
  const { title, features } = props;

  useEffect(() => {
    const svgImages = document.querySelectorAll('img.svg-inject');
    svgImages.forEach(injectSVG);
  }, []);

  return (
    <section id="feature" className="wrapper bg-light">
      <div className="container pt-18 pt-md-20 pb-14 pb-md-16">
        <div className="row text-center">
          <div className="col-lg-10 col-xl-9 col-xxl-8 mx-auto position-relative">
            <Image
              src="/assets/img/svg/doodle3.svg"
              className="h-11 position-absolute d-none d-lg-block"
              style={{
                top: "-20%",
                left: "-12%",
                width: "auto",
                height: "auto"
              }}
              alt="svg"
              width={100}
              height={100}
            />
            <Image
              src="/assets/img/svg/doodle4.svg"
              className="h-8 position-absolute d-none d-lg-block"
              style={{
                top: "-20%",
                left: "-12%",
                width: "auto",
                height: "auto"
              }}
              alt="svg"
              width={100}
              height={100}
            />
            <h2 className="fs-16 text-uppercase text-muted mb-3">App Features</h2>
            <h3 className="display-3 mb-11 px-lg-5 px-xl-0 px-xxl-6">{title}</h3>
          </div>
        </div>

        <div className="row mb-20">
          <div className="col-xxl-11 mx-auto">
            <div className="row gx-md-8 gy-10 text-center">
              {features && features.length > 0 ? (
                features.map((feature, index) => (
                  <div className="col-md-6 col-lg-3" key={index}>
                    <div className={`svg-bg svg-bg-lg ${feature.bgClass} rounded-xl mb-4`}>
                      <Image
                        src={feature.imgSrc}
                        className="svg-inject icon-svg solid text-navy"
                        alt={feature.title}
                        width={100}
                        height={100}
                      />
                    </div>
                    <h4 className="fs-20">{feature.title}</h4>
                  </div>
                ))
              ) : (
                <p>No features available.</p>
              )}
            </div>
          </div>
        </div>

        <div className="row text-center">
          <div className="col-md-10 col-lg-7 mx-auto position-relative">
            <Image
              src="/assets/img/svg/doodle5.svg"
              className="w-15 position-absolute d-none d-lg-block"
              data-delay="1800"
              style={{
                top: "-20%",
                left: "-12%",
                width: "auto",
                height: "auto"
              }}
              alt="svg"
              width={100}
              height={100}
            />
            <Image
              src="/assets/img/svg/doodle6.svg"
              className="h-15 position-absolute d-none d-lg-block"
              data-delay="1800"
              style={{
                top: "-20%",
                left: "-12%",
                width: "auto",
                height: "auto"
              }}
              alt="svg"
              width={100}
              height={100}
            />
            <h2 className="fs-16 text-uppercase text-muted mb-3">Cara Kerja FathSchool</h2>
            <h3 className="display-3 mb-8 px-xl-6">
              Unduh aplikasinya, buat profil dan tadaa, <span className="text-gradient gradient-7">Fathschool</span> siap digunakan!
            </h3>
          </div>
        </div>

        <div className="row mb-lg-20 mb-xl-23">
          <div className="col-xxl-11 mx-auto">
            <div className="row gy-10 gy-lg-0 text-center d-flex align-items-center">
              <div className="col-md-6 col-lg-4 mx-auto mb-n10 mb-lg-0">
                <figure className="mx-auto">
                  <Image
                    src="/assets/img/hero/device_cara_kerja.png"
                    srcSet="/assets/img/hero/device_cara_kerja@2x.png 2x"
                    alt=""
                    width={800}
                    height={800}
                  />
                </figure>
              </div>
              <div className="w-100 d-lg-none"></div>
              <div className="col-md-6 col-lg-4 order-lg-first">
                <div className="mb-8">
                  <span className="fs-60 lh-1 mb-3 fw-normal text-gradient gradient-7">01</span>
                  <h4 className="fs-20">Download Aplikasi</h4>
                  <p className="mb-0 px-xl-7">
                    FathSchool tersedia di Playstore
                  </p>
                </div>
                <div>
                  <span className="fs-60 lh-1 mb-3 fw-normal text-gradient gradient-7">02</span>
                  <h4 className="fs-20">Pendaftaran Cepat</h4>
                  <p className="mb-0 px-xl-7">
                  Daftar dengan mudah dan cepat untuk memulai pengalaman belajar Anda.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="mb-8">
                  <span className="fs-60 lh-1 mb-3 fw-normal text-gradient gradient-7">03</span>
                  <h4 className="fs-20">Lacak Pengeluaran Anda</h4>
                  <p className="mb-0 px-xl-7">
                  Pantau pengeluaran Anda dengan mudah dan tetap dalam kendali keuangan.
                  </p>
                </div>
                <div>
                  <span className="fs-60 lh-1 mb-3 fw-normal text-gradient gradient-7">04</span>
                  <h4 className="fs-20">Kendalikan Segalanya</h4>
                  <p className="mb-0 px-xl-7">
                  Dapatkan kontrol penuh atas keuangan Anda dan buat keputusan yang lebih baik.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
