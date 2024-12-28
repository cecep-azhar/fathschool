import { Headline } from "@/components/fragments/Headline";
import { Container } from "@/components/layouts/Container";
import { dataTestimonials } from "@/data";

export function TestimonialsSection(): React.ReactNode {
  return (
    <Container>
      <div id="testimoni" className="row">
        <Headline doodleImages={dataTestimonials.designDoodle} headline={dataTestimonials.headline} desc={dataTestimonials.desc} name={dataTestimonials.name} />
      </div>

      <div className="grid">
        <Testimonials data={dataTestimonials} />
      </div>
    </Container>
  );
}

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
