"use client"; // Ensure this is at the top of your file

import React, { useState, useEffect } from "react";

export default function Feature() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const features = [
    {
      imgSrc: "/assets/img/icons/solid/cloud-network-2.svg",
      title: "Always up to Date",
      bgClass: "bg-pale-yellow",
    },
    {
      imgSrc: "/assets/img/icons/solid/touchscreen.svg",
      title: "Easy Usage",
      bgClass: "bg-pale-green",
    },
    {
      imgSrc: "/assets/img/icons/solid/lock.svg",
      title: "Secure Payments",
      bgClass: "bg-pale-purple",
    },
    {
      imgSrc: "/assets/img/icons/solid/rocket.svg",
      title: "Fast Transactions",
      bgClass: "bg-pale-pink",
    },
    {
      imgSrc: "/assets/img/icons/solid/bar-chart.svg",
      title: "Reports & Forecasting",
      bgClass: "bg-pale-violet",
    },
    {
      imgSrc: "/assets/img/icons/solid/safe.svg",
      title: "Online Banking",
      bgClass: "bg-pale-orange",
    },
    {
      imgSrc: "/assets/img/icons/solid/controls.svg",
      title: "Configurable Fields",
      bgClass: "bg-pale-blue",
    },
    {
      imgSrc: "/assets/img/icons/solid/checked.svg",
      title: "List of Transactions",
      bgClass: "bg-pale-leaf",
    },
  ];

  useEffect(() => {
    const imagePromises = features.map(feature => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = feature.imgSrc;
        img.onload = resolve; // Resolve the promise when the image loads
        img.onerror = reject; // Reject the promise if there's an error
      });
    });

    Promise.all(imagePromises)
      .then(() => setImagesLoaded(true))
      .catch((error) => {
        console.error("Error loading images:", error);
      });
  }, []);

  return (
    <section className="wrapper bg-light">
      <div className="container pt-18 pt-md-20 pb-14 pb-md-16">
        <div className="row text-center">
          <div className="col-lg-10 col-xl-9 col-xxl-8 mx-auto position-relative">
            <img
              src="/assets/img/svg/doodle3.svg"
              className="h-11 position-absolute d-none d-lg-block"
              style={{ top: "-45%", left: "23%" }}
              alt=""
            />
            <img
              src="/assets/img/svg/doodle4.svg"
              className="h-8 position-absolute d-none d-lg-block"
              style={{ top: "6%", right: "2%" }}
              alt=""
            />
            <h2 className="fs-16 text-uppercase text-muted mb-3">
              App Features
            </h2>
            <h3 className="display-3 mb-11 px-lg-5 px-xl-0 px-xxl-6">
              Sandbox makes your spending{" "}
              <span className="text-gradient gradient-7">stress-free</span> for
              you to have the perfect control.
            </h3>
          </div>
        </div>

        <div className="row mb-20">
          <div className="col-xxl-11 mx-auto">
            <div className="row gx-md-8 gy-10 text-center">
              {imagesLoaded ? (
                features.map((feature, index) => (
                  <div className="col-md-6 col-lg-3" key={index}>
                    <div
                      className={`svg-bg svg-bg-lg ${feature.bgClass} rounded-xl mb-4`}
                    >
                      <img
                        src={feature.imgSrc}
                        className="svg-inject icon-svg solid text-navy"
                        alt={feature.title}
                      />
                    </div>
                    <h4 className="fs-20">{feature.title}</h4>
                  </div>
                ))
              ) : (
                <p>Loading images...</p>
              )}
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="row text-center">
          <div className="col-md-10 col-lg-7 mx-auto position-relative">
            <img
              src="/assets/img/svg/doodle5.svg"
              className="w-15 position-absolute d-none d-lg-block"
              data-delay="1800"
              style={{ bottom: "-60%", right: "10%" }}
              alt=""
            />
            <img
              src="/assets/img/svg/doodle6.svg"
              className="h-15 position-absolute d-none d-lg-block"
              data-delay="1800"
              style={{ top: "-40%", left: "-5%" }}
              alt=""
            />
            <h2 className="fs-16 text-uppercase text-muted mb-3">How It Works</h2>
            <h3 className="display-3 mb-8 px-xl-6">
              Download the app, create your profile and{" "}
              <span className="text-gradient gradient-7">voilà</span>, you're all set!
            </h3>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
        <div className="row mb-lg-20 mb-xl-23">
          <div className="col-xxl-11 mx-auto">
            <div className="row gy-10 gy-lg-0 text-center d-flex align-items-center">
              <div className="col-md-6 col-lg-4 mx-auto mb-n10 mb-lg-0">
                <figure className="mx-auto">
                  <img
                    src="/assets/img/photos/devices4.png"
                    srcSet="/assets/img/photos/devices4@2x.png 2x"
                    alt=""
                  />
                </figure>
              </div>
              {/* /column */}
              <div className="w-100 d-lg-none"></div>
              <div className="col-md-6 col-lg-4 order-lg-first">
                <div className="mb-8">
                  <span className="fs-60 lh-1 mb-3 fw-normal text-gradient gradient-7">01</span>
                  <h4 className="fs-20">Download Application</h4>
                  <p className="mb-0 px-xl-7">
                    Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus.
                  </p>
                </div>
                {/* /div */}
                <div>
                  <span className="fs-60 lh-1 mb-3 fw-normal text-gradient gradient-7">02</span>
                  <h4 className="fs-20">Quick Registration</h4>
                  <p className="mb-0 px-xl-7">
                    Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus.
                  </p>
                </div>
                {/* /div */}
              </div>
              {/* /column */}
              <div className="col-md-6 col-lg-4">
                <div className="mb-8">
                  <span className="fs-60 lh-1 mb-3 fw-normal text-gradient gradient-7">03</span>
                  <h4 className="fs-20">Track Your Spending</h4>
                  <p className="mb-0 px-xl-7">
                    Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus.
                  </p>
                </div>
                {/* /div */}
                <div>
                  <span className="fs-60 lh-1 mb-3 fw-normal text-gradient gradient-7">04</span>
                  <h4 className="fs-20">Have Total Control</h4>
                  <p className="mb-0 px-xl-7">
                    Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus.
                  </p>
                </div>
                {/* /div */}
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
      </div>
    </section>
  );
}
