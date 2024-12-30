"use client";

import { Container } from "@/components/layouts/Container";
import { Illustration404 } from "@/data/images";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <Container>
      <div className="row">
        {/* Image 404 */}
        <div className="col-lg-9 col-xl-8 mx-auto">
          <figure className="mb-10">
            <Image
              className="img-fluid"
              src={Illustration404.src}
              blurDataURL={Illustration404.blurDataURL}
              quality={100}
              width={400}
              height={400}
              loading="lazy"
              alt="image"
            />
          </figure>
        </div>

        {/* Message 404 */}
        <div className="col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center">
          <h1 className="mb-3">Oops! Halaman Tidak Ditemukan.</h1>
          <p className="lead mb-7 px-md-12 px-lg-5 px-xl-7">
            Maaf, halaman yang Anda cari tidak dapat ditemukan. Periksa kembali
            URL atau kembali ke halaman utama untuk melanjutkan.
          </p>
          <Link href="/" className="btn btn-primary rounded-pill me-4">
            Go to Homepage
          </Link>
          <button
            onClick={() => router.back()}
            className="btn btn-white rounded-pill"
          >
            Kembali
          </button>
        </div>
      </div>
    </Container>
  );
}
