import { Container } from "@/components/layouts/Container";
import { dataTestimonial } from "@/data";
import Image from "next/image";

export function TestimonialsSection() {
  return (
    <Container>
      <div id="testimoni" className="row">
        <Headline data={dataTestimonial} />
      </div>

      <div className="grid mb-12">
        <Testimonials data={dataTestimonial} />
      </div>
    </Container>
  );
}

const Headline = ({ data }: { data: typeof dataTestimonial }) => {
  return (
    <div className="col-md-11 col-lg-10 col-xl-9 col-xxl-8 mx-auto text-center position-relative">
      {data.designDoodle.map((doodle, index) => (
        <Image key={index} src={doodle.src} className="position-absolute d-none d-lg-block" style={doodle.style} alt="doodle" width={70} height={70}/>
      ))}
      <h2 className="fs-16 text-uppercase text-muted mb-3">{data.title}</h2>
      <h3 className="display-3 mb-11 px-xl-10 px-xxl-13">{data.subTitle}</h3>
    </div>
  );
};

const Testimonials = ({ data }: { data: typeof dataTestimonial }) => {
  return (
    <div className="row isotope gy-6">
      {data.defaultData.map((testimonial, index) => (
        <div className="item col-md-6 col-xl-4" key={index}>
          <div className="card shadow-none rounded-xl bg-soft-grape">
            <div className="card-body">
              <blockquote className="icon mb-0">
                <p>{testimonial.message}</p>
                <div className="blockquote-details">
                  <div className="info ps-0">
                    <h5 className="mb-1">{testimonial.name}</h5>
                    <p className="mb-0">{testimonial.position}</p>
                  </div>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
