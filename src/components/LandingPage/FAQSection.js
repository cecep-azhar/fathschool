import React from "react";

export default function FAQSection() {
  return (
    <section className="wrapper image-wrapper bg-full bg-image bg-overlay bg-overlay-light-600 bg-content" data-image-src="/assets/img/photos/bg23.png">
      <div className="container py-14 pt-md-16 pt-lg-0 pb-md-17 position-relative" style={{ zIndex: 2 }}>
        <div className="row">
          <div className="col-xl-11 col-xxl-10 mx-auto">
            <div className="mt-lg-n20 mt-xl-n22 mb-14 mb-md-16 rounded-xl">
              <div className="player" data-plyr-provider="vimeo" data-plyr-embed-id="165101721"></div>
            </div>
            <div className="position-relative">
              <img
                src="/assets/img/svg/doodle7.svg"
                className="h-7 position-absolute d-none d-lg-block"
                data-delay="1800"
                style={{ top: "-90%", right: "-3%" }}
                alt=""
              />
              <img
                src="/assets/img/svg/doodle8.svg"
                className="h-14 position-absolute d-none d-lg-block"
                data-delay="1800"
                style={{ top: "-20%", left: "-12%" }}
                alt=""
              />
              <h2 className="fs-16 text-uppercase text-muted mb-3 text-center">FAQ</h2>
              <h3 className="display-3 mb-11 px-lg-8 px-xl-11 text-center">
                If you don't see an <span className="text-gradient gradient-7">answer</span> to your question, you can send us an email from our contact form.
              </h3>
            </div>
            <div className="row">
              <div className="col-lg-6 mb-0">
                <div id="accordion-1" className="accordion-wrapper">
                  <div className="card accordion-item shadow-lg">
                    <div className="card-header" id="accordion-heading-1-1">
                      <button className="collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-collapse-1-1" aria-expanded="false" aria-controls="accordion-collapse-1-1">
                        Can I cancel my subscription?
                      </button>
                    </div>
                    <div id="accordion-collapse-1-1" className="collapse" aria-labelledby="accordion-heading-1-1" data-bs-target="#accordion-1">
                      <div className="card-body">
                        <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.</p>
                      </div>
                    </div>
                  </div>
                  <div className="card accordion-item shadow-lg">
                    <div className="card-header" id="accordion-heading-1-2">
                      <button className="collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-collapse-1-2" aria-expanded="false" aria-controls="accordion-collapse-1-2">
                        Which payment methods do you accept?
                      </button>
                    </div>
                    <div id="accordion-collapse-1-2" className="collapse" aria-labelledby="accordion-heading-1-2" data-bs-target="#accordion-1">
                      <div className="card-body">
                        <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.</p>
                      </div>
                    </div>
                  </div>
                  <div className="card accordion-item shadow-lg">
                    <div className="card-header" id="accordion-heading-1-3">
                      <button className="collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-collapse-1-3" aria-expanded="false" aria-controls="accordion-collapse-1-3">
                        How can I manage my Account?
                      </button>
                    </div>
                    <div id="accordion-collapse-1-3" className="collapse" aria-labelledby="accordion-heading-1-3" data-bs-target="#accordion-1">
                      <div className="card-body">
                        <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div id="accordion-2" className="accordion-wrapper">
                  <div className="card accordion-item shadow-lg">
                    <div className="card-header" id="accordion-heading-2-1">
                      <button className="collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-collapse-2-1" aria-expanded="false" aria-controls="accordion-collapse-2-1">
                        How do I get my subscription receipt?
                      </button>
                    </div>
                    <div id="accordion-collapse-2-1" className="collapse" aria-labelledby="accordion-heading-2-1" data-bs-target="#accordion-2">
                      <div className="card-body">
                        <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.</p>
                      </div>
                    </div>
                  </div>
                  <div className="card accordion-item shadow-lg">
                    <div className="card-header" id="accordion-heading-2-2">
                      <button className="collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-collapse-2-2" aria-expanded="false" aria-controls="accordion-collapse-2-2">
                        Are there any discounts for people in need?
                      </button>
                    </div>
                    <div id="accordion-collapse-2-2" className="collapse" aria-labelledby="accordion-heading-2-2" data-bs-target="#accordion-2">
                      <div className="card-body">
                        <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.</p>
                      </div>
                    </div>
                  </div>
                  <div className="card accordion-item shadow-lg">
                    <div className="card-header" id="accordion-heading-2-3">
                      <button className="collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-collapse-2-3" aria-expanded="false" aria-controls="accordion-collapse-2-3">
                        Do you offer a free trial edit?
                      </button>
                    </div>
                    <div id="accordion-collapse-2-3" className="collapse" aria-labelledby="accordion-heading-2-3" data-bs-target="#accordion-2">
                      <div className="card-body">
                        <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
