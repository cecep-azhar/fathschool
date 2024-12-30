import { Container } from "@/components/layouts/Container";
import { IlustrationI5 } from "@/data/images";
import Image from "next/image";

export function Contact() {
  return (
    <section className="wrapper bg-light">
      <Container>
        <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
          <div className="col-lg-7">
            <figure>
              <Image
                className="w-auto"
                src={IlustrationI5.src}
                blurDataURL={IlustrationI5.blurDataURL}
                quality={100}
                loading="lazy"
                alt="image"
                width={400}
                height={400}
              />
            </figure>
          </div>
          <div className="col-lg-5">
            <h2 className="fs-15 text-uppercase text-line text-primary text-center mb-3">
              Get In Touch
            </h2>
            <h3 className="display-5 mb-7">
              Got any questions? Don't hesitate to get in touch.
            </h3>
            <div className="d-flex flex-row">
              <div>
                <div className="icon text-primary fs-28 me-4 mt-n1">
                  {" "}
                  <i className="uil uil-location-pin-alt"></i>{" "}
                </div>
              </div>
              <div>
                <h5 className="mb-1">Address</h5>
                <address>Moonshine St. 14/05 Light City, London</address>
              </div>
            </div>
            <div className="d-flex flex-row">
              <div>
                <div className="icon text-primary fs-28 me-4 mt-n1">
                  {" "}
                  <i className="uil uil-phone-volume"></i>{" "}
                </div>
              </div>
              <div>
                <h5 className="mb-1">Phone</h5>
                <p>00 (123) 456 78 90</p>
              </div>
            </div>
            <div className="d-flex flex-row">
              <div>
                <div className="icon text-primary fs-28 me-4 mt-n1">
                  {" "}
                  <i className="uil uil-envelope"></i>{" "}
                </div>
              </div>
              <div>
                <h5 className="mb-1">E-mail</h5>
                <p className="mb-0">
                  <a href="mailto:sandbox@email.com" className="link-body">
                    sandbox@email.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
