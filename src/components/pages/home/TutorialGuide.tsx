import { Headline } from "@/components/fragments/Headline";
import { Container } from "@/components/layouts/Container";
import { dataTutorial } from "@/data";
import { ImageDevice } from "@/data/images";
import Image from "next/image";

export function TutorialGuide(): React.ReactNode {
  return (
    <Container>
      <Headline
        name={dataTutorial.name}
        headline={dataTutorial.headline}
        doodleImages={dataTutorial.designDoodle}
        desc={
          <>
            Unduh aplikasinya, buat profil dan tadaa,{" "}
            <span className="text-gradient gradient-7">Fathschool</span> siap
            digunakan!
          </>
        }
      />

      <div className="row mb-lg-20 mb-xl-23">
        <div className="col-xxl-11 mx-auto">
          <div className="row gy-10 gy-lg-0 text-center d-flex align-items-center">

            <div className="col-md-6 col-lg-4 mx-auto mb-n10 mb-lg-0">
              <figure className="mx-auto">
                <Image
                  src={ImageDevice.src}
                  alt="image"
                  width={800}
                  height={800}
                />
              </figure>
            </div>
            
            <div className="w-100 d-lg-none"></div>

            <div className="col-md-6 col-lg-4 order-lg-first">
              <div className="mb-8">
                <span className="fs-60 lh-1 mb-3 fw-normal text-gradient gradient-7">
                  01
                </span>
                <h4 className="fs-20">Download Aplikasi</h4>
                <p className="mb-0 px-xl-7">FathSchool tersedia di Playstore</p>
              </div>
              <div>
                <span className="fs-60 lh-1 mb-3 fw-normal text-gradient gradient-7">
                  02
                </span>
                <h4 className="fs-20">Pendaftaran Cepat</h4>
                <p className="mb-0 px-xl-7">
                  Daftar dengan mudah dan cepat untuk memulai pengalaman belajar
                  Anda.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="mb-8">
                <span className="fs-60 lh-1 mb-3 fw-normal text-gradient gradient-7">
                  03
                </span>
                <h4 className="fs-20">Lacak Pengeluaran Anda</h4>
                <p className="mb-0 px-xl-7">
                  Pantau pengeluaran Anda dengan mudah dan tetap dalam kendali
                  keuangan.
                </p>
              </div>
              <div>
                <span className="fs-60 lh-1 mb-3 fw-normal text-gradient gradient-7">
                  04
                </span>
                <h4 className="fs-20">Kendalikan Segalanya</h4>
                <p className="mb-0 px-xl-7">
                  Dapatkan kontrol penuh atas keuangan Anda dan buat keputusan
                  yang lebih baik.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </Container>
  );
}
