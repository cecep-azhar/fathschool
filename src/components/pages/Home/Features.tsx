import { FeatureItem } from "@/components/elements/FeatureItem";
import { Headline } from "@/components/fragments";
import { Container } from "@/components/layouts/Container";
import { dataDesign } from "@/data";
import type { AppFeature } from "@/types/response";

export function Features({ data }: { data: AppFeature }): React.ReactNode {

  return (
    <section id="feature">
      <Container padding="pt-18 pt-md-22">
        <Headline
          doodleImages={dataDesign.features}
          headline={data.title}
          desc={data.description}
        />

        <div className="row mt-8">
          <div className="col-xxl-11 mx-auto">
            <div className="row gx-md-8 gy-10 text-center">
              {data.data.map((item, index) => <FeatureItem key={index} data={item} />)}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
