import { Container } from "@/components/layouts/Container";
import { dataBenefits } from "@/data";
import Image from "next/image";
import React from "react";

export default function BenefitsSection() {
  return (
    <Container>
      <div className="row text-center">
        <div className="col-md-11 col-lg-9 col-xl-8 col-xxl-7 mx-auto position-relative">
          {dataBenefits.designDoodle.map((item) => (
            <Image
              key={item.name}
              src={item.src}
              style={item.style}
              className="h-14 position-absolute d-none d-lg-block"
              alt="image"
              width={100}
              height={100}
            />
          ))}
          <h2 className="fs-16 text-uppercase text-muted mb-3">{dataBenefits.headline}</h2>
          <h3 className="display-3 mb-12">{dataBenefits.desc}</h3>
        </div>
      </div>

      <div className="row d-flex align-items-start mb-19 border">
        <div
          className="col-lg-6 position-lg-sticky border"
          style={{ top: "4rem" }}
        >
          <figure>
            <Image
              src="/assets/img/hero/device_mengapa.png"
              alt="image"
              loading="lazy"
              width={400}
              height={400}
            />
          </figure>
        </div>
        <div className="col-lg-5 ms-auto">
          <div className="d-flex flex-row mb-8">
            <div>
              <div className={`svg-bg svg-bg-lg rounded-xl me-5`}>
                {/* <Image
                  src={""}
                  className="svg-inject icon-svg solid text-navy"
                  alt="image"
                  width={100}
                  height={100}
                /> */}
              </div>
            </div>
            <div>
              <h4 className="fs-20">Aman & Berbasis Cloud</h4>
              <p>Data sekolah tersimpan dengan aman dan mudah diakses.</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
