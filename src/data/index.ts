import {
  TypeBenefits,
  TypeFaq,
  TypeFeatures,
  TypeFooter,
  TyperTutorial,
  TypeTestimonials,
} from "@/types/data";

import IconComputer from "@/assets/img/icons/solid/computer.svg";
import IconCode from "@/assets/img/icons/solid/code.svg";
import {
  doodle1,
  doodle10,
  doodle11,
  doodle3,
  doodle4,
  doodle5,
  doodle7,
  doodle8,
  doodle9,
} from "./images";

// Data dummy untuk halaman utama
const defaultHero = {
  title: "Sekolah Ku, Sudah Pakai Fathschool?",
  subTitle:
    "Kelola operasional sekolah lebih efisien dengan aplikasi manajemen sekolah berbasis teknologi. Mudah, cepat, dan terintegrasi.",
};

const defaultFeature = {
  title: "Fitur Unggulan FathSchool",
  features: [
    {
      imgSrc: "/assets/img/icons/solid/cloud-network-2.svg",
      title: "Manajemen Data Siswa dan Guru.",
      bgClass: "bg-pale-yellow",
    },
    {
      imgSrc: "/assets/img/icons/solid/cloud-network-2.svg",
      title: "Pengaturan Jadwal Pelajaran.",
      bgClass: "bg-pale-yellow",
    },
    {
      imgSrc: "/assets/img/icons/solid/cloud-network-2.svg",
      title: "Sistem Pembayaran Digital.",
      bgClass: "bg-pale-yellow",
    },
    {
      imgSrc: "/assets/img/icons/solid/cloud-network-2.svg",
      title: "Laporan Akademik.",
      bgClass: "bg-pale-yellow",
    },
    {
      imgSrc: "/assets/img/icons/solid/cloud-network-2.svg",
      title: "Notifikasi dan Komunikasi.",
      bgClass: "bg-pale-yellow",
    },
  ],
};

const defaultFAQ = [
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
    question: "Apakah FathSchool bisa diakses di smartphone?",
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
];

const defaultReasons = {
  title: "Mengapa Fathschool?",
  subTitle:
    "Berikut ini beberapa alasan mengapa pelanggan kami memilih Fathschool.",
  data: [
    {
      title: "Aman & Berbasis Cloud",
      subTitle: "Data sekolah tersimpan dengan aman dan mudah diakses.",
      image: "/assets/img/icons/solid/calendar.svg",
    },
    {
      title: "Mudah Digunakan",
      subTitle: "Antarmuka ramah pengguna untuk semua pihak.",
      image: "/assets/img/icons/solid/calendar.svg",
    },
    {
      title: "Terintegrasi",
      subTitle: "Semua kebutuhan sekolah dalam satu aplikasi.",
      image: "/assets/img/icons/solid/calendar.svg",
    },
    {
      title: "Dukungan Teknis",
      subTitle: "Tim profesional siap membantu Anda kapan saja.",
      image: "/assets/img/icons/solid/calendar.svg",
    },
  ],
};

const defaultTestimonials = {
  title: "Pelanggan yang Puas",
  subTitle: "Kata Mereka Tentang FathSchool.",
  data: [
    {
      name: "Jafar Awalaan",
      job: "-",
      description:
        "Sejak menggunakan FathSchool, pengelolaan data siswa menjadi jauh lebih terorganisir. Guru dan staf kami merasa sangat terbantu dengan fitur otomatisasinya. Terima kasih FathSchool!",
    },
    {
      name: "Bulan Ramdani",
      job: "-",
      description:
        "Sistem pembayaran digital di FathSchool sangat memudahkan kami dalam memantau administrasi keuangan sekolah. Orang tua siswa juga lebih mudah membayar dengan transparansi penuh.",
    },
    {
      name: "Rendy Ardiansyah",
      job: "-",
      description:
        "FathSchool adalah solusi terbaik untuk sekolah modern. Saya bisa mengakses laporan akademik siswa secara real-time, kapan saja dan di mana saja. Sangat praktis!",
    },
    {
      name: "Eka Prasetya",
      job: "-",
      description:
        "Dengan FathSchool, komunikasi antara guru, orang tua, dan siswa menjadi lebih lancar. Notifikasi otomatis untuk jadwal dan laporan sangat membantu kami dalam menjaga keteraturan.",
    },
  ],
};

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
  }
]

// * TUTORIAL GUIDE
const dataTutorial: TyperTutorial = {
  name: "Tutorial",
  headline: "Cara Kerja FATHSCHOOL",
  designDoodle: [
    {
      name: "doodle5",
      src: doodle5,
      style: {
        top: "-20%",
        left: "-12%",
      },
    },
    {
      name: "doodle5",
      src: doodle5,
      style: {
        top: "-25%",
        right: "-12%",
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

const dataFaq: TypeFaq = {
  name: "FAQ",
  headline: "FAQ",
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
    {
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Tim dukungan kami siap membantu Anda kapan saja. Anda dapat menghubungi kami melalui email atau layanan chat langsung di aplikasi.",
    },
  ],
  designDoodle: [
    {
      name: "doodle7",
      src: doodle7,
      style: {
        top: "-65%",
        right: "-5%",
      },
    },
    {
      name: "doodle8",
      src: doodle8,
      style: {
        top: "-20%",
        left: "-12%",
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
        top: "-20%",
        left: "-12%",
      },
    },
    {
      name: "doodle4",
      src: doodle4,
      style: {
        top: "-20%",
        right: "-12%",
      },
    },
  ],
};

// * Testimonials
const dataTestimonials: TypeTestimonials = {
  name: "Testimonial",
  headline: "Kata Mereka Tentang FathSchool",
  desc: "Pelanggan yang Puas",
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
        top: "-8%",
        left: "8%",
      },
    },
    {
      name: "doodle10",
      src: doodle10,
      style: {
        top: "-45%",
        left: "-17%",
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
      items: [{ name: "Alamat", link: "#" }],
      extra: {
        email: "hi@fathschool.com",
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
  name: "Mengapa Fathschool?",
  headline: "Bergabung Bersama Kami",
  desc: "Beberapa Alasan Mengapa Pelanggan Kami Memilih Fathschool.",
  designDoodle: [
    {
      name: "doodle3",
      src: doodle3,
      style: {
        top: "-20%",
        right: "-12%",
      },
    },
    {
      name: "doodle9",
      src: doodle9,
      style: {
        top: "5%",
        left: "-17%",
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
  dataFooter,
  dataTestimonials,
  dataBenefits,
  dataFeatures,
  dataTutorial,
  dataFaq,
  defaultHero,
  defaultFeature,
  defaultFAQ,
  defaultReasons,
  defaultTestimonials,
};
