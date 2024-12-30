import { TypeBenefits, TypeFaq, TypeFeatures, TypeFooter, TypeHero, TyperTutorial, TypeTestimonials} from "@/types/data";
import { doodle1, doodle10, doodle11, doodle2, doodle3, doodle4, doodle5, doodle6, doodle7, doodle8, doodle9, ImageHero} from "./images";

import IconComputer from "@/assets/img/icons/solid/computer.svg";
import IconCode from "@/assets/img/icons/solid/code.svg";

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

// * HERO
const dataHero: TypeHero = {
  name: "Hero",
  headline: "Sekolah Ku, Sudah Pakai FathSchool",
  desc: "Kelola operasional sekolah lebih efisien dengan aplikasi manajemen sekolah berbasis teknologi. Mudah, cepat, dan terintegrasi.",
  designDoodle: [
    {
      name: "doodle1",
      src: doodle1,
      style: {
        height: "h-10",
        top: "-10%",
        left: "-10%",
      },
      dataCue: "slideInUp",
      dataDelay: "2000",
    },
    {
      name: "doodle2",
      src: doodle2,
      style: {
        height: "h-14",
        top: "90%",
        right: "20%",
      },
      dataCue: "slideInUp",
      dataDelay: "2300",
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
      dataCue: "slideInUp",
      dataDelay: "2500",
    },
  ],
  imageHero: ImageHero,
};

// * TUTORIAL GUIDE
const dataTutorial: TyperTutorial = {
  name: "Tutorial",
  headline: "Cara Kerja FathSchool",
  designDoodle: [
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
  defaultData: [
    {
      name: "Tutorial",
      title: "Download Aplikasi",
      desc: "FathSchool tersedia di Playstore",
    },
  ],
};

// * FAQ
const dataFaq: TypeFaq = {
  name: "FAQ",
  headline: "Tanya Jawab Umum",
  defaultData: [
    {
      question: "Apa itu FathSchool?",
      answer:
        "FathSchool adalah aplikasi berbasis web yang membantu sekolah mengelola data siswa, guru, jadwal pelajaran, pembayaran, hingga laporan akademik dalam satu platform yang mudah digunakan.",
    },
    {
      question: "Siapa yang bisa menggunakan FathSchool?",
      answer:
        "FathSchool dirancang untuk digunakan oleh semua jenis sekolah, mulai dari SD, SMP, SMA, hingga lembaga pendidikan lainnya. Semua pihak seperti administrator, guru, siswa, dan orang tua dapat terhubung melalui platform ini.",
    },
    {
      question: "Apakah FathSchool bisa diakses di Smartphone?",
      answer:
        "Jelas, FathSchool berbasis cloud dan dapat diakses melalui perangkat apapun, baik desktop maupun smartphone, selama terhubung dengan internet.",
    },
    {
      question: "Apakah data sekolah aman?",
      answer:
        "Keamanan adalah prioritas kami. Semua data di FathSchool disimpan di server yang terenkripsi dan hanya dapat diakses oleh pengguna yang memiliki otorisasi.",
    },
    {
      question: "Bagaimana jika membutuhkan bantuan teknis?",
      answer:
        "Tim dukungan kami siap membantu Anda kapan saja. Anda dapat menghubungi kami melalui email atau layanan chat langsung di aplikasi.",
    },
  ],
  designDoodle: [
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
};

// * FEATURES
const dataFeatures: TypeFeatures = {
  name: "Features",
  headline: "App Features",
  desc: "Fitur Unggulan FathSchool",
  defaultData: [
    {
      name: "Laporan Akademik",
      title: "Laporan Akademik",
      icon: {
        src: IconCode,
        color: "bg-pale-grape",
      },
    },
    {
      name: "Laporan Akademik",
      title: "Laporan Akademik",
      icon: {
        src: IconCode,
        color: "bg-pale-green",
      },
    },
    {
      name: "Laporan Akademik",
      title: "Laporan Akademik.",
      icon: {
        src: IconCode,
        color: "bg-pale-orange",
      },
    },
    {
      name: "Laporan Akademik",
      title: "Laporan Akademik",
      icon: {
        src: IconCode,
        color: "bg-pale-pink",
      },
    },
    {
      name: "Laporan Akademik",
      title: "Laporan Akademik",
      icon: {
        src: IconCode,
        color: "bg-pale-blue",
      },
    },
    {
      name: "Laporan Akademik",
      title: "Laporan Akademik",
      icon: {
        src: IconCode,
        color: "bg-pale-yellow",
      },
    },
    {
      name: "Laporan Akademik",
      title: "Laporan Akademik",
      icon: {
        src: IconCode,
        color: "bg-pale-red",
      },
    },
    {
      name: "Laporan Akademik",
      title: "Laporan Akademik",
      icon: {
        src: IconCode,
        color: "bg-pale-purple",
      },
    },
  ],
  designDoodle: [
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
};

// * Testimonials
const dataTestimonials: TypeTestimonials = {
  name: "Testimonial",
  headline: "Pelanggan yang Puas",
  desc: "Kata Mereka Tentang FathSchool",
  defaultData: [
    {
      name: "John Doe",
      position: "CEO, FathSchool",
      message:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
      color: "bg-soft-grape",
    },
    {
      name: "John Doe",
      position: "CEO, FathSchool",
      message:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
      color: "bg-soft-green",
    },
    {
      name: "John Doe",
      position: "CEO, FathSchool",
      message:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
      color: "bg-soft-orange",
    },
    {
      name: "John Doe",
      position: "CEO, FathSchool",
      message:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
      color: "bg-soft-pink",
    },
    {
      name: "John Doe",
      position: "CEO, FathSchool",
      message:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
      color: "bg-soft-blue",
    },
    {
      name: "John Doe",
      position: "CEO, FathSchool",
      message:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
      color: "bg-soft-yellow",
    },
  ],
  designDoodle: [
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
};

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
      items: [{ name: "Moonshine St. 14/05 Light City, London, United Kingdom", link: "#" }],
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

// * Benefits
const dataBenefits: TypeBenefits = {
  name: "Mengapa FathSchool?",
  headline: "Bergabung Bersama Kami",
  desc: "Beberapa Alasan Mengapa Pelanggan Kami Memilih FathSchool.",
  designDoodle: [
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
  defaultData: [
    {
      name: "John Doe",
      title: "Aman & Berbasis Cloud",
      desc: "Data sekolah tersimpan dengan aman dan mudah diakses",
      icon: {
        src: IconComputer,
        color: "bg-pale-grape",
      },
    },
    {
      name: "John Doe",
      title: "Aman & Berbasis Cloud",
      desc: "Data sekolah tersimpan dengan aman dan mudah diakses",
      icon: {
        src: IconComputer,
        color: "bg-pale-green",
      },
    },
    {
      name: "John Doe",
      title: "Aman & Berbasis Cloud",
      desc: "Data sekolah tersimpan dengan aman dan mudah diakses",
      icon: {
        src: IconComputer,
        color: "bg-pale-pink",
      },
    },
    {
      name: "John Doe",
      title: "Aman & Berbasis Cloud",
      desc: "Data sekolah tersimpan dengan aman dan mudah diakses",
      icon: {
        src: IconComputer,
        color: "bg-pale-yellow",
      },
    },
  ],
};

export {
  MenuNavbar,
  dataHero,
  dataFooter,
  dataTestimonials,
  dataBenefits,
  dataFeatures,
  dataTutorial,
  dataFaq,
};
