"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Container } from "./Container";
import { Illustration404 } from "@/data/images";
import { useRouter } from "next/navigation";

export const DataNotFound = () => {
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
        <div className="col-lg-8 col-xl-7 col-xxl-9 mx-auto text-center">
          <h1 className="mb-3">Oops! Data Tidak Ditemukan.</h1>
          <p className="lead mb-7 px-md-12 px-lg-5 px-xl-7">
            Maaf, data yang Anda cari tidak ada di sini. Mungkin ada kesalahan
            dalam link atau data tersebut sudah dihapus. Silakan kembali ke
            beranda atau coba cari lainnya.
          </p>
          <Link href="/" className="btn btn-blue rounded-pill me-4">Kembali ke Beranda</Link>
          <button onClick={() => router.back()} className="btn btn-white rounded-pill">Kembali</button>
        </div>
      </div>
    </Container>
  );
};
