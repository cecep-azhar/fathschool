import { CardTestimonial } from "@/components/elements/CardTestimonial";
import { Headline } from "@/components/fragments/Headline";
import { Container } from "@/components/layouts/Container";
import { dataTestimonials } from "@/data";

export function Testimonial(): React.ReactNode {
  return (
    <Container>
      <div id="testimoni">
        <Headline
          doodleImages={dataTestimonials.designDoodle}
          headline={dataTestimonials.headline}
          desc={
            <>
              Kata Mereka Tentang <span className="text-gradient gradient-7">FathSchool</span>
            </>
          }
          name={dataTestimonials.name}
        />
      </div>

      <div className="grid mt-8">
        <Testimonials data={dataTestimonials} />
      </div>
    </Container>
  );
}

const Testimonials = ({ data }: { data: typeof dataTestimonials }) => {
  return (
    <div className="row isotope gy-6">
      {data.defaultData.map((testimonial, index) => (
        <CardTestimonial key={index} data={testimonial} />
      ))}
    </div>
  );
};
