"use client";

import React, { useEffect } from "react";

const backgroundClasses = [
  "bg-pale-grape",
  "bg-pale-yellow",
  "bg-pale-green",
  "bg-pale-pink",
  "bg-pale-blue",
  "bg-pale-leaf"
];

// Fungsi untuk menginjeksi SVG
const injectSVG = async (imgElement) => {
  const src = imgElement.getAttribute('src');
  if (!src) return;

  try {
    const response = await fetch(src);
    if (!response.ok) throw new Error('Failed to load SVG');

    const svgText = await response.text();
    const parser = new DOMParser();
    const svgElement = parser.parseFromString(svgText, "image/svg+xml").documentElement;

    // Menghapus atribut yang tidak diperlukan
    svgElement.removeAttribute('xmlns:a');
    svgElement.setAttribute('class', imgElement.className); // Menyalin kelas dari img ke svg

    // Pastikan parentNode ada sebelum mengganti
    if (imgElement.parentNode) {
      imgElement.parentNode.replaceChild(svgElement, imgElement); // Mengganti img dengan svg
    }
  } catch (error) {
    console.error('Error injecting SVG:', error);
  }
};

export default function Reason({ props, testimonials }) {
  useEffect(() => {
    // Menginjeksi semua gambar SVG setelah komponen dimount
    const svgImages = document.querySelectorAll('img.svg-inject');
    svgImages.forEach(injectSVG);
  }, []);

  return (
    <section className="wrapper bg-light">
      <div className="container py-16 py-md-18">
        <div className="row text-center">
          <div className="col-md-11 col-lg-9 col-xl-8 col-xxl-7 mx-auto position-relative">
            <img src="/assets/img/svg/doodle3.svg" className="h-11 position-absolute d-none d-lg-block" style={{ top: "-20%", right: "-12%" }} alt="" />
            <img src="/assets/img/svg/doodle9.svg" className="h-17 position-absolute d-none d-lg-block" style={{ bottom: "5%", left: "-17%" }} alt="" />
            <h2 className="fs-16 text-uppercase text-muted mb-3">{props.title}</h2>
            <h3 className="display-3 mb-12">{props.subTitle}</h3>
          </div>
        </div>
        <div className="row d-flex align-items-start mb-19">
          <div className="col-lg-6 position-lg-sticky" style={{ top: "8rem" }}>
            <figure>
              <img src="/assets/img/photos/devices5.png" srcSet="/assets/img/photos/devices5@2x.png 2x" alt="" />
            </figure>
          </div>
          <div className="col-lg-5 ms-auto">
            {props.data.map((reason, index) => {
              const randomBgClass = backgroundClasses[Math.floor(Math.random() * backgroundClasses.length)];
              return (
                <div className="d-flex flex-row mb-8" key={index}>
                  <div>
                    <div className={`svg-bg svg-bg-lg ${randomBgClass} rounded-xl me-5`}>
                      <img src={reason.image} className="svg-inject icon-svg solid text-navy" alt="" />
                    </div>
                  </div>
                  <div>
                    <h4 className="fs-20">{reason.title}</h4>
                    <p>{reason.subTitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div id="testimoni" className="row">
          <div className="col-md-11 col-lg-10 col-xl-9 col-xxl-8 mx-auto text-center position-relative">
            <img src="/assets/img/svg/doodle1.svg" className="h-9 position-absolute d-none d-lg-block" style={{ top: "2%", left: "9%" }} alt="" />
            <img src="/assets/img/svg/doodle10.svg" className="h-7 position-absolute d-none d-lg-block" style={{ top: "-45%", left: "-17%" }} alt="" />
            <img src="/assets/img/svg/doodle11.svg" className="h-13 position-absolute d-none d-lg-block" style={{ top: "-40%", right: "-15%" }} alt="" />
            <h2 className="fs-16 text-uppercase text-muted mb-3">{testimonials.title}</h2>
            <h3 className="display-3 mb-11 px-xl-10 px-xxl-13">{testimonials.subTitle}</h3>
          </div>
        </div>
        <div className="grid mb-12">
          <div className="row isotope gy-6">
            {testimonials.data.map((testimonial, index) => (
              <div className="item col-md-6 col-xl-4" key={index}>
                <div className="card shadow-none rounded-xl bg-soft-grape">
                  <div className="card-body">
                    <blockquote className="icon mb-0">
                      <p>{testimonial.description}</p>
                      <div className="blockquote-details">
                        <div className="info ps-0">
                          <h5 className="mb-1">{testimonial.name}</h5>
                          <p className="mb-0">{testimonial.job}</p>
                        </div>
                      </div>
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
