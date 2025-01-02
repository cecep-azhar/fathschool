"use client";

import { CardTestimonial, Headline } from "@/components/fragments";
import { Container } from "@/components/layouts/Container";
import { dataDesign } from "@/data";
import type { Testimonials } from "@/types/response";

export function Testimonial({data}: {data: Testimonials}): React.ReactNode {

  return (
    <section id="testimoni">
      <Container>
        <Headline
          doodleImages={dataDesign.testimonial}
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
