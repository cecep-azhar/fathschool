"use client";

import { CardTestimonial, Headline } from "@/components/fragments";
import { Container } from "@/components/layouts/Container";
import { dataDefault, dataTestimonials } from "@/data";
import type { Testimonials } from "@/types/response";

export function Testimonial({data}: {data: Testimonials | undefined}): React.ReactNode {

  if (!data) {
    data = dataDefault.data.sections.data.testimonials;
  }

  return (
    <section id="testimoni">
      <Container>
        <Headline
          doodleImages={dataTestimonials.designDoodle}
          headline={data.title}
          desc={data.description}
        />

        <div className="row isotope gy-6 mt-8">
          {data.data.map((item) => <CardTestimonial key={item.id} data={item} />)}
        </div>
      </Container>
    </section>
  );
}
