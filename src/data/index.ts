import { TypeFooter } from "@/types/data";
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
import { Blog, ResponseLandingPage } from "@/types/response";

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
  blogs: [
    {
      name: "doodle1",
      src: doodle1,
      style: {
        height: "h-10",
        top: "-30%",
        left: "33%",
      },
    },
    {
      name: "doodle1",
      src: doodle2,
      style: {
        height: "h-14",
        top: "0%",
        right: "5%",
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
    link: "https://api.whatsapp.com/send?phone=6285161721727&text=Halo%20selamat%20datang%20di%20WhatsApp%20admin%20Fathforce",
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
          name: "Pajaten RT 03 RW 19 Desa Kecamatan Cileuyi Kabupaten Bandung, Jawa Barat",
          link: "#",
        },
      ],
      extra: {
        email: "hi@FathSchool.com",
        phone: "62 851 6172 1727",
      },
    },
  ],
  sosmed: [
    {
      name: "facebook",
      link: "https://www.facebook.com/",
      icon: "uil uil-facebook-f",
    },
    {
      name: "instagram",
      link: "https://www.instagram.com/",
      icon: "uil uil-instagram",
    },
    {
      name: "youtube",
      link: "https://www.youtube.com/@fathforce",
      icon: "uil uil-youtube",
    },
  ],
};

const dataBlogs: Blog[] = [
  {
    id: 1,
    title: "Data Default FathSchool",
    slug: "data-default-fathschool",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    published_at: "2023-05-05",
    seo_title: "Data Default FathSchool",
    seo_description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    image: "",
    createdAt: "2023-05-05",
    updatedAt: "2023-05-05",
    blog_author: {
      id: 1,
      name: "Fath School",
      email: "hi@fathschool.com",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
      photo: "",
      github_handle: "",
      twitter_handle: "",
    },
    blog_category: {
      id: 1,
      name: "DataDefault",
      slug: "data-default",
      description: null,
      is_visible: true,
      seo_title: null,
      seo_description: null,
    },
    tags: [
      { id: 1, type: null, name: "DataDefault", slug: "data-default" },
      { id: 2, type: null, name: "FathSchool", slug: "fathschool" },
    ],
  },
  {
    id: 2,
    title: "Belajar TypeScript untuk Pemula",
    slug: "belajar-typescript-untuk-pemula",
    content: "Panduan lengkap belajar TypeScript dari awal hingga mahir.",
    summary: "Panduan lengkap belajar TypeScript dari awal hingga mahir.",
    published_at: "2023-06-01",
    seo_title: "Belajar TypeScript",
    seo_description:
      "Panduan lengkap belajar TypeScript dari awal hingga mahir.",
    image: "",
    createdAt: "2023-06-01",
    updatedAt: "2023-06-01",
    blog_author: {
      id: 1,
      name: "Fath School",
      email: "hi@fathschool.com",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
      photo: "",
      github_handle: "",
      twitter_handle: "",
    },
    blog_category: {
      id: 2,
      name: "FathSchool",
      slug: "fathschool",
      description: null,
      is_visible: true,
      seo_title: null,
      seo_description: null,
    },
    tags: [
      { id: 3, type: null, name: "TypeScript", slug: "typescript" },
      { id: 4, type: null, name: "Programming", slug: "programming" },
    ],
  },
  {
    id: 3,
    title: "Panduan Deploy Next.js ke Vercel",
    slug: "panduan-deploy-nextjs-ke-vercel",
    content: "Cara mudah untuk deploy proyek Next.js ke Vercel.",
    summary: "Cara mudah untuk deploy proyek Next.js ke Vercel.",
    published_at: "2023-07-01",
    seo_title: "Deploy Next.js",
    seo_description: "Cara mudah untuk deploy proyek Next.js ke Vercel.",
    image: "",
    createdAt: "2023-07-01",
    updatedAt: "2023-07-01",
    blog_author: {
      id: 1,
      name: "Fath School",
      email: "hi@fathschool.com",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
      photo: "",
      github_handle: "",
      twitter_handle: "",
    },
    blog_category: {
      id: 3,
      name: "FathSchool",
      slug: "fathschool",
      description: null,
      is_visible: true,
      seo_title: null,
      seo_description: null,
    },
    tags: [
      { id: 5, type: null, name: "Next.js", slug: "nextjs" },
      { id: 6, type: null, name: "Vercel", slug: "vercel" },
    ],
  },
  {
    id: 4,
    title: "Tips Meningkatkan SEO Website",
    slug: "tips-meningkatkan-seo-website",
    content: "Strategi untuk meningkatkan SEO website Anda.",
    summary: "Strategi untuk meningkatkan SEO website Anda.",
    published_at: "2023-08-01",
    seo_title: "Meningkatkan SEO",
    seo_description: "Strategi untuk meningkatkan SEO website Anda.",
    image: "",
    createdAt: "2023-08-01",
    updatedAt: "2023-08-01",
    blog_author: {
      id: 1,
      name: "Fath School",
      email: "hi@fathschool.com",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
      photo: "",
      github_handle: "",
      twitter_handle: "",
    },
    blog_category: {
      id: 4,
      name: "Information",
      slug: "information",
      description: null,
      is_visible: true,
      seo_title: null,
      seo_description: null,
    },
    tags: [
      { id: 7, type: null, name: "SEO", slug: "seo" },
      {
        id: 8,
        type: null,
        name: "Website Optimization",
        slug: "website-optimization",
      },
    ],
  },
];

export { MenuNavbar, dataFooter, dataBlogs };

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
          thumbnail_video: "/assets/media/Introduce FathSchool.png",
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
        banner: {
          headline:
            "Kelola Pembelajaran, Jadwal, dan Kegiatan Sekolah dalam Satu Platform",
          description: "FathSchool tersedia untuk diunduh di Google Play Store",
          image: ImageHero.src,
          button_google_play: "Google Play",
          link_google_play: "#",
        },
        main_footer: {
          title: "Bergabung Bersama Kami",
          description:
            "Kelola operasional sekolah lebih efisien dengan aplikasi manajemen sekolah berbasis teknologi. Mudah, cepat, dan terintegrasi.",
          button_title: "Join Us",
          button_link:
            "https://api.whatsapp.com/send?phone=6285161721727&text=Halo%20selamat%20datang%20di%20WhatsApp%20admin%20Fathforce",
          copyright: "Copyright © 2023 FathSchool. All rights reserved.",
          data: [
            {
              id: 1,
              link: "#",
              icon: "uil uil-facebook-f",
            },
          ],
        },
        footer_section_1: {
          title: 'Butuh Bantuan?',
          data: [
            {
              id: 1,
              item: "Support",
              link: "#",
            },
            {
              id: 2,
              item: "Syarat dan Ketentuan",
              link: "#",
            },
            {
              id: 3,
              item: "Kebijakan Privasi",
              link: "#",
            }
          ]
        },
        footer_section_2:{
          title: 'Pelajari Lebih Lanjut',
          data: [
            {
              id: 1,
              item: "Tentang Kami",
              link: "#",
            },
            {
              id: 2,
              item: "Cerita Kami",
              link: "#",
            },
            {
              id: 3,
              item: "Proyek",
              link: "#",
            },
            {
              id: 4,
              item: "Fitur",
              link: "#",
            }
          ]
        },
        footer_section_3: {
          title: 'Hubungi Kami',
          data: [
            {
              id: 1,
              item: "Panjatan RT 03 RW 019 Desa Kecamatan Cileunyi Kabupaten Bandung, Jawa Barat,",
              link: 'https://api.whatsapp.com/send?phone=6285161721727&text=Halo%20selamat%20datang%20di%20WhatsApp%20admin%20Fathforce'
            },
            {
              id: 2,
              item: "hi@fathschool.com",
              link: 'mailto:hi@fathschool.com'
            },
            {
              id: 3,
              item: "Phone: +62 851 6172 1727",
              link: 'https://api.whatsapp.com/send?phone=6285161721727&text=Halo%20selamat%20datang%20di%20WhatsApp%20admin%20Fathforce'
            }
          ]
        }
      },
    },
  },
};
