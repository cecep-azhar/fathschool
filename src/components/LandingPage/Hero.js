import React from "react";
import Image from "next/image";

export default function Hero({ props }) {
  const { title, subTitle } = props;

  const titleParts = title.split("FathSchool");
  const titleBefore = titleParts[0];
  const titleAfter = titleParts[1] ? titleParts[1] : "";

  return (
    <section
      id="home"
      className="wrapper image-wrapper bg-overlay bg-overlay-light-600"
      style={{
        backgroundImage: "url(/assets/img/photos/bg23.png)",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="container pt-16 pt-md-18 pb-9">
        <div className="row gx-0 gy-10 align-items-center text-center text-lg-start">
          <div
            className="col-lg-6 col-xxl-5 position-relative"
            data-cues="slideInDown"
            data-group="page-title"
            data-delay="400"
          >
            <Image
              src="/assets/img/svg/doodle1.svg"
              className="h-9 position-absolute d-none d-lg-block"
              data-cue="fadeIn"
              data-delay="3000"
              style={{
                top: "-20%",
                left: "-12%",
                width: "auto",
                height: "auto"
              }}
              alt="svg"
              width={100}
              height={100}
              loading="lazy"
            />
            <Image
              src="/assets/img/svg/doodle2.svg"
              className="h-15 position-absolute d-none d-lg-block"
              data-cue="fadeIn"
              data-delay="2000"
              style={{
                top: "-20%",
                left: "-12%",
                width: "auto",
                height: "auto"
              }}
              alt="svg"
              width={100}
              height={100}
              loading="lazy"
            />
            <h1 className="display-1 fs-50 mb-4">
              {titleBefore.trim()}{" "}
              <span className="text-gradient gradient-7">FathSchool</span>
              {titleAfter.trim()}
            </h1>
            <p className="lead fs-24 lh-sm mb-7">{subTitle}</p>
            <div
              className="d-flex justify-content-center justify-content-lg-start"
              data-cue="slideInDown"
              data-group="page-title-buttons"
              data-delay="500"
            >
              <span>
                <a href="#">
                  <img
                    src="/assets/img/photos/button-google-play.svg"
                    className="h-11 rounded-xl"
                    alt="Google Play"
                  />
                </a>
              </span>
            </div>
          </div>

          <div
            className="col-lg-6 ms-auto mb-n20 mb-xxl-n22"
            data-cue="fadeIn"
            data-delay="3000"
          >
            <figure>
              <Image
                src="/assets/img/hero/device_hero.png"
                alt="Hero Device"
                width={500}
                height={500}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/bAEMBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                sizes="(max-width: 1200px) 100vw, 50vw"
              />
            </figure>
          </div>
        </div>
      </div>
      <div className="overflow-hidden" style={{ zIndex: 1 }}>
        <div className="divider text-light mx-n2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
            <g fill="currentColor">
              <polygon points="1440 100 0 100 0 85 1440 0 1440 100" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
