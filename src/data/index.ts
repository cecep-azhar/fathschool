import { TypeFooterData } from "@/types/data";

import doodle1 from "@/assets/img/svg/doodle1.svg";
import doodle3 from "@/assets/img/svg/doodle3.svg"
import doodle9 from "@/assets/img/svg/doodle9.svg"
import doodle10 from "@/assets/img/svg/doodle10.svg";
import doodle11 from "@/assets/img/svg/doodle11.svg";

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


const dataTestimonial = {
  name: "Testimonial",
  title: "Kata Mereka Tentang FathSchool.",
  subTitle: "Pelanggan yang Puas",
  defaultData: [
    {
      name: "John Doe",
      position: "CEO, FathSchool",
      message: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    },
    {
      name: "John Doe",
      position: "CEO, FathSchool",
      message: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    },
    {
      name: "John Doe",
      position: "CEO, FathSchool",
      message: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    },
    {
      name: "John Doe",
      position: "CEO, FathSchool",
      message: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    },
    {
      name: "John Doe",
      position: "CEO, FathSchool",
      message: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    },
    {
      name: "John Doe",
      position: "CEO, FathSchool",
      message: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    },
  ],
  designDoodle: [
    {
      name: 'doodle1',
      src: doodle1,
      style: {
        top: "-8%",
        left: "8%"
      }
    },
    {
      name: 'doodle10',
      src: doodle10,
      style: {
        top: "-45%",
        left: "-17%"
      }
    },
    {
      name: 'doodle11',
      src: doodle11,
      style: {
        top: "-40%",
        right: "-15%"
      }
    }
  ]
}


const dataFooter: TypeFooterData = {
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

const dataBenefits = {
  name: 'Mengapa Fathschool?',
  headline: "Bergabung Bersama Kami",
  desc: "Berikut ini Beberapa Alasan Mengapa Pelanggan Kami Memilih Fathschool.",
  designDoodle: [
    {
      name: 'doodle3',
      src: doodle3,
      style: {
        top: "-20%",
        right: "-12%"
      }
    },
    {
      name: 'doodle9',
      src: doodle9,
      style: {
        top: "5%",
        left: "-17%"
      }
    },
  ]
}

export {
  dataFooter,
  dataTestimonial,
  dataBenefits,
  
  defaultHero,
  defaultFeature,
  defaultFAQ,
  defaultReasons,
  defaultTestimonials,
};
