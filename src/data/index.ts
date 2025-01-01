import {
  TypeFeatures,
  TypeFooter,
  TypeHero,
  TypeBenefits,
  TyperTutorial,
  TypeTestimonials,
} from "@/types/data";
import {
  doodle1,
  doodle10,
  doodle11,
  doodle2,
  doodle3,
  doodle4,
  doodle5,
  doodle6,
  doodle7,
  doodle8,
  doodle9,
  IconCalender,
  ImageBenefits,
  ImageDevice,
  ImageHero,
} from "./images";

import IconComputer from "@/assets/img/icons/solid/computer.svg";
import IconCode from "@/assets/img/icons/solid/code.svg";
import { ResponseLandingPage } from "@/types/response";

export const dataDesign = {
  hero: [
    {
      name: "doodle1",
      src: doodle1,
      style: {
        height: "h-10",
        top: "-10%",
        left: "-10%",
      },
    },
    {
      name: "doodle2",
      src: doodle2,
      style: {
        height: "h-14",
        top: "90%",
        right: "20%",
      },
    },
    {
      name: "doodle5",
      src: doodle5,
      style: {
        width: "w-16",
        height: "h-16",
        top: "0%",
        right: "-3%",
      },
    },
  ],
  tutorialGuide: [
    {
      name: "doodle8",
      src: doodle8,
      style: {
        top: "-30%",
        left: "-10%",
      },
    },
    {
      name: "doodle5",
      src: doodle5,
      style: {
        width: "w-16",
        height: "h-16",
        top: "95%",
        right: "17%",
      },
    },
  ],
  faq: [
    {
      name: "doodle7",
      src: doodle7,
      style: {
        top: "-80%",
        right: "-5%",
      },
    },
    {
      name: "doodle8",
      src: doodle8,
      style: {
        height: "h-13",
        top: "-20%",
        left: "-15%",
      },
    },
  ],
  features: [
    {
      name: "doodle3",
      src: doodle3,
      style: {
        top: "-30%",
        left: "5%",
        height: "h-12",
      },
    },
    {
      name: "doodle4",
      src: doodle4,
      style: {
        top: "50%",
        right: "10%",
        height: "h-10",
      },
    },
  ],
  testimonial: [
    {
      name: "doodle1",
      src: doodle1,
      style: {
        height: "h-10",
        top: "0%",
        left: "8%",
      },
    },
    {
      name: "doodle10",
      src: doodle10,
      style: {
        height: "h-12",
        top: "-80%",
        left: "-10%",
      },
    },
    {
      name: "doodle11",
      src: doodle11,
      style: {
        top: "-40%",
        right: "-15%",
      },
    },
  ],
  benefits: [
    {
      name: "doodle3",
      src: doodle3,
      style: {
        width: "w-13",
        top: "-30%",
        right: "0%",
      },
    },
    {
      name: "doodle9",
      src: doodle9,
      style: {
        width: "w-16",
        height: "h-16",
        top: "40%",
        left: "-20%",
      },
    },
  ],
};

// * NAVBAR
const MenuNavbar: { name: string; href: string }[] = [
  {
    name: "Beranda",
    href: "/",
  },
  {
    name: "Fitur",
    href: "/#feature",
  },
  {
    name: "FAQ",
    href: "/#faq",
  },
  {
    name: "Testimoni",
    href: "/#testimoni",
  },
  {
    name: "Blogs",
    href: "/blogs",
  },
];

// * Footer
const dataFooter: TypeFooter = {
  name: "Footer",
  headline: "Bergabung Bersama Kami",
  desc: "Kelola operasional sekolah lebih efisien dengan aplikasi manajemen sekolah berbasis teknologi. Mudah, cepat, dan terintegrasi.",
  button: {
    text: "Join Us",
    link: "#",
  },
  columns: [
    {
      title: "Butuh Bantuan?",
      items: [
        { name: "Support", link: "#" },
        { name: "Syarat & Ketentuan", link: "#" },
        { name: "Kebijakan Privasi", link: "#" },
      ],
    },
    {
      title: "Pelajari lebih lanjut",
      items: [
        { name: "Tentang Kami", link: "#" },
        { name: "Cerita Kami", link: "#" },
        { name: "Proyek", link: "#" },
        { name: "Fitur", link: "#" },
      ],
    },
    {
      title: "Hubungi Kami",
      items: [
        {
          name: "Moonshine St. 14/05 Light City, London, United Kingdom",
          link: "#",
        },
      ],
      extra: {
        email: "hi@FathSchool.com",
        phone: "0851-6172-1727",
      },
    },
  ],
  sosmed: [
    {
      name: "twitter",
      link: "https://twitter.com/",
      icon: "uil uil-twitter",
    },
    {
      name: "facebook",
      link: "https://www.facebook.com/",
      icon: "uil uil-facebook-f",
    },
    {
      name: "dribbble",
      link: "https://dribbble.com/",
      icon: "uil uil-dribbble",
    },
    {
      name: "instagram",
      link: "https://www.instagram.com/",
      icon: "uil uil-instagram",
    },
    {
      name: "youtube",
      link: "https://www.youtube.com/",
      icon: "uil uil-youtube",
    },
  ],
};

export { MenuNavbar, dataFooter };

// -------------------------------------------------------------------- //

export const dataDefault: ResponseLandingPage = {
  status: true,
  message: "Page retrieved successfully.",
  data: {
    page_name: "landing_page",
    sections: {
      data: {
        hero: {
          title: "Sekolah Ku, Sudah Pakai FathSchool?",
          description:
            "Kelola operasional sekolah lebih efisien dengan aplikasi manajemen sekolah berbasis teknologi. Mudah, cepat, dan terintegrasi.",
          device_image: ImageHero.src,
          playstore_image: "",
          playstore_link: "#",
        },
        app_feature: {
          title: "App Features",
          description: "Fitur Unggulan FathSchool",
          data: [
            {
              id: 1,
              image: IconCalender,
              description: "Manajemen Data Siswa dan Guru",
            },
            {
              id: 2,
              image: IconCalender,
              description: "Pengaturan Jadwal Pelajaran",
            },
            {
              id: 3,
              image: IconCalender,
              description: "Sistem Pembayaran Digital",
            },
            {
              id: 4,
              image: IconCalender,
              description: "Laporan Akademik",
            },
            {
              id: 5,
              image: IconCalender,
              description: "Notifikasi dan Komunikasi",
            },
          ],
        },
        tutorial: {
          title: "Cara Kerja Fathschool",
          description:
            "Unduh aplikasinya, buat profil dan tadaa, Fathschool siap digunakan!",
          device_tutorial: ImageDevice.src,
          data: [
            {
              number: "01",
              title: "Download Aplikasi",
              description: "FathSchool tersedia di Playstore",
            },
            {
              number: "02",
              title: "Pendaftaran Cepat",
              description:
                "Daftar dengan mudah dan cepat untuk memulai pengalaman belajar Anda.",
            },
            {
              number: "03",
              title: "Lacak Pengeluaran Anda",
              description:
                "Pantau pengeluaran Anda dengan mudah dan tetap dalam kendali keuangan.",
            },
            {
              number: "04",
              title: "Kendalikan Segalanya",
              description:
                "Dapatkan kontrol penuh atas keuangan Anda dan buat keputusan yang lebih baik.",
            },
          ],
        },
        faq: {
          video: "/assets/media/Introduce FathSchool.mp4",
          title: "FAQ",
          description:
            "Jika Anda tidak melihat jawaban untuk pertanyaan Anda, Anda dapat mengirim email kepada kami dari formulir kontak kami.",
          data: [
            {
              question: "Apa itu FathSchool?",
              answer:
                "FathSchool adalah aplikasi berbasis web yang membantu sekolah mengelola data siswa, guru, jadwal pelajaran, pembayaran, hingga laporan akademik dalam satu platform yang mudah digunakan.",
            },
            {
              question: "Apakah Fathschool Bisa Diakses di Smartphone?",
              answer:
                "Jelas, FathSchool berbasis cloud dan dapat diakses melalui perangkat apapun, baik desktop maupun smartphone, selama terhubung dengan internet.",
            },
            {
              question: "Siapa yang Bisa Menggunakan FathSchool?",
              answer:
                "FathSchool dirancang untuk digunakan oleh semua jenis sekolah, mulai dari SD, SMP, SMA, hingga lembaga pendidikan lainnya. Semua pihak seperti administrator, guru, siswa, dan orang tua dapat terhubung melalui platform ini.",
            },
            {
              question: "Apakah Data Sekolah Aman?",
              answer:
                "Keamanan adalah prioritas kami. Semua data di FathSchool disimpan di server yang terenkripsi dan hanya dapat diakses oleh pengguna yang memiliki otorisasi.",
            },
            {
              question: "Bagaimana Jika membutuhkan Dukungan Teknis?",
              answer:
                "Tim dukungan kami siap membantu Anda kapan saja. Anda dapat menghubungi kami melalui email atau layanan chat langsung di aplikasi.",
            },
            {
              question: "Apakah FathSchool Bisa Dikustomisasi?",
              answer:
                "Ya, FathSchool fleksibel dan dapat disesuaikan dengan kebutuhan sekolah, termasuk penambahan fitur atau branding khusus.",
            },
          ],
        },
        benefits: {
          title: "Mengapa Fathschool?",
          description:
            "Berikut ini beberapa alasan mengapa pelanggan kami memilih Fathschool.",
          device_benefits: ImageBenefits.src,
          data: [
            {
              id: 1,
              icon: IconComputer,
              title: "Mudah Digunakan",
              description: "Antarmuka ramah pengguna untuk semua pihak.",
            },
            {
              id: 2,
              icon: IconComputer,
              title: "Aman & Berbasis Cloud",
              description:
                "Aman & Berbasis Cloud Data sekolah tersimpan dengan aman dan mudah diakses.",
            },
            {
              id: 3,
              icon: IconComputer,
              title: "Terintegrasi",
              description: "Semua kebutuhan sekolah dalam satu aplikasi.",
            },
            {
              id: 4,
              icon: IconComputer,
              title: "Dukungan Teknis",
              description: "Tim profesional siap membantu Anda kapan saja.",
            },
          ],
        },
        testimonials: {
          title: "Pelanggan yang Puas",
          description: "Kata Mereka Tentang FathSchool.",
          data: [
            {
              id: 1,
              name: "Jafar Awalaan",
              position: "Pelajar",
              message:
                "Sejak menggunakan FathSchool, pengelolaan data siswa menjadi jauh lebih terorganisir. Guru dan staf kami merasa sangat terbantu dengan fitur otomatisasinya. Terima kasih FathSchool!",
            },
            {
              id: 2,
              name: "Bulan Ramdani",
              position: "Teacher",
              message:
                "Sistem pembayaran digital di FathSchool sangat memudahkan kami dalam memantau administrasi keuangan sekolah. Orang tua siswa juga lebih mudah membayar dengan transparansi penuh.",
            },
            {
              id: 3,
              name: "Dwi Kuncoro",
              position: "Developer",
              message:
                "FathSchool adalah solusi terbaik untuk sekolah modern. Saya bisa mengakses laporan akademik siswa secara real-time, kapan saja dan di mana saja. Sangat praktis!",
            },
            {
              id: 4,
              name: "Eka Prasetya",
              position: "Pelajar",
              message:
                "Dengan FathSchool, komunikasi antara guru, orang tua, dan siswa menjadi lebih lancar. Notifikasi otomatis untuk jadwal dan laporan sangat membantu kami dalam menjaga keteraturan.",
            },
            {
              id: 5,
              name: "Dede Kurniawan",
              position: "Kepala Sekolah",
              message:
                "FathSchool memberikan solusi modern yang membuat pengelolaan sekolah menjadi lebih efisien. Semua data penting tersedia hanya dengan beberapa klik, sehingga saya dapat fokus pada pengembangan sekolah.",
            },
          ],
        },
      },
    },
  },
};
