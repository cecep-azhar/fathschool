import React from "react";
import Image from "next/image";

export default function FAQSection({ props }) {
  const { faqs } = props;

  if (!Array.isArray(faqs)) {
    console.error("faqs is not an array:", faqs);
    return null;
  }

  return (
    <section
      id="faq"
      className="wrapper image-wrapper bg-full bg-image bg-overlay bg-overlay-light-600 bg-content"
      data-image-src="/assets/img/photos/bg23.png"
    >
      <div
        className="container py-14 pt-md-16 pt-lg-0 pb-md-17 position-relative"
        style={{ zIndex: 2 }}
      >
        <div className="row">
          <div className="col-xl-11 col-xxl-10 mx-auto">
            <div className="mt-lg-n20 mt-xl-n22 mb-14 mb-md-16 rounded-xl">
              <iframe
                width="100%"
                height="391"
                src="https://www.youtube-nocookie.com/embed/KRtRogig5Vg?enablejsapi=0"
                title="Introduce FathSchool"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                sandbox="allow-same-origin allow-scripts allow-popups allow-presentation"
              ></iframe>
            </div>
            <div className="position-relative">
              <Image
                src="/assets/img/svg/doodle7.svg"
                className="h-7 position-absolute d-none d-lg-block"
                data-delay="1800"
                style={{
                  top: "-90%",
                  right: "-3%",
                  width: "auto",
                  height: "auto"
                }}
                alt="svg"
                width={100}
                height={100}
              />
              <Image
                src="/assets/img/svg/doodle8.svg"
                className="h-14 position-absolute d-none d-lg-block"
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

              <h2 className="fs-16 text-uppercase text-muted mb-3 text-center">
                FAQ
              </h2>
              <h3 className="display-3 mb-11 px-lg-8 px-xl-11 text-center">
                Jika Anda tidak melihat{" "}
                <span className="text-gradient gradient-7">jawaban</span> untuk
                pertanyaan Anda, Anda dapat mengirim email kepada kami dari
                formulir kontak kami.
              </h3>
            </div>
            <div className="row">
              <div className="col-lg-6 mb-0">
                <div id="accordion-1" className="accordion-wrapper">
                  {faqs.slice(0, 3).map((faq, index) => (
                    <div className="card accordion-item shadow-lg" key={index}>
                      <div
                        className="card-header"
                        id={`accordion-heading-1-${index + 1}`}
                      >
                        <button
                          className="collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target={`#accordion-collapse-1-${index + 1}`}
                          aria-expanded="false"
                          aria-controls={`accordion-collapse-1-${index + 1}`}
                        >
                          {faq.question}
                        </button>
                      </div>
                      <div
                        id={`accordion-collapse-1-${index + 1}`}
                        className="collapse"
                        aria-labelledby={`accordion-heading-1-${index + 1}`}
                        data-bs-parent="#accordion-1"
                      >
                        <div className="card-body">
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-lg-6">
                <div id="accordion-2" className="accordion-wrapper">
                  {faqs.slice(3).map((faq, index) => (
                    <div
                      className="card accordion-item shadow-lg"
                      key={index + 3}
                    >
                      <div
                        className="card-header"
                        id={`accordion-heading-2-${index + 1}`}
                      >
                        <button
                          className="collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target={`#accordion-collapse-2-${index + 1}`}
                          aria-expanded="false"
                          aria-controls={`accordion-collapse-2-${index + 1}`}
                        >
                          {faq.question}
                        </button>
                      </div>
                      <div
                        id={`accordion-collapse-2-${index + 1}`}
                        className="collapse"
                        aria-labelledby={`accordion-heading-2-${index + 1}`}
                        data-bs-parent="#accordion-2"
                      >
                        <div className="card-body">
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
