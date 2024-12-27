import { Container } from "@/components/layouts/Container";
import { dataTestimonials } from "@/data";
import Image from "next/image";

export function TestimonialsSection(): React.ReactNode {
  return (
    <Container>
      <div id="testimoni" className="row">
        <Headline data={dataTestimonials} />
      </div>

      <div className="grid mb-12">
        <Testimonials data={dataTestimonials} />
      </div>
    </Container>
  );
}

const Headline = ({ data }: { data: typeof dataTestimonials }) => {
  return (
    <div className="col-md-11 col-lg-10 col-xl-9 col-xxl-8 mx-auto text-center position-relative">
      {data.designDoodle.map((doodle, index) => (
        <Image key={index} src={doodle.src} className="position-absolute d-none d-lg-block" style={doodle.style} alt="doodle" width={70} height={70}/>
      ))}
      <h2 className="fs-16 text-uppercase text-muted mb-3">{data.headline}</h2>
      <h3 className="display-3 mb-11 px-xl-10 px-xxl-13">{data.desc}</h3>
    </div>
  );
};

const Testimonials = ({ data }: { data: typeof dataTestimonials }) => {
  return (
    <div className="row isotope gy-6">
      {data.defaultData.map((testimonial, index) => (
        <div className="item col-md-6 col-xl-4" key={index}>
          <div className={`card shadow-none rounded-xl ${testimonial.color}`}>
            <div className="card-body">
              <blockquote className="icon mb-0">
                <p>“{testimonial.message}”</p>
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
