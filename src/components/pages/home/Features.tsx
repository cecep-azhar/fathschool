import { Headline } from "@/components/fragments/Headline";
import { Container } from "@/components/layouts/Container";
import { dataFeatures } from "@/data";
import Image from "next/image";

export function Features(): React.ReactNode {
  return (
    <section id="feature" className="wrapper bg-light">
      <Container padding="pt-18 pt-md-22">
        
        <Headline doodleImages={dataFeatures.designDoodle} headline={dataFeatures.headline} desc={dataFeatures.desc} name={dataFeatures.name}/>

        <div className="row mt-8">
          <div className="col-xxl-11 mx-auto">
            <div className="row gx-md-8 gy-10 text-center">
              {dataFeatures.defaultData.map((item, index) => (
                  <div className="col-md-6 col-lg-3" key={index}>
                    <div className={`svg-bg svg-bg-lg rounded-xl mb-4 ${item.icon.color}`}>
                      <Image src={item.icon.src} className="icon-svg solid text-navy" alt='image' width={100} height={100}/>
                    </div>
                    <h4 className="fs-20">{item.title}</h4>
                  </div>
                ))
              }
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
}
