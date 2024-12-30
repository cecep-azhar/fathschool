import { FeatureItem } from "@/components/elements/FeatureItem";
import { Headline } from "@/components/fragments/Headline";
import { Container } from "@/components/layouts/Container";
import { dataFeatures } from "@/data";

export function Features(): React.ReactNode {
  return (
    <section id="feature" className="wrapper bg-light">
      <Container padding="pt-18 pt-md-22">
        <Headline
          doodleImages={dataFeatures.designDoodle}
          headline={dataFeatures.headline}
          name={dataFeatures.name}
          desc={
            <>
              Fitur Unggulan{" "}
              <span className="text-gradient gradient-7">FathSchool</span>
            </>
          }
        />

        <div className="row mt-8">
          <div className="col-xxl-11 mx-auto">
            <div className="row gx-md-8 gy-10 text-center">
              {dataFeatures.defaultData.map((item, index) => (
                <FeatureItem key={index} data={item} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
