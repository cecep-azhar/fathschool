import Hero from "@/components/LandingPage/Hero";
import Feature from "@/components/LandingPage/Feature";
import Reason from '@/components/LandingPage/Reason';
import FAQSection from "@/components/LandingPage/FAQSection";

// Data dummy untuk halaman utama
const defaultHero = {
  title: 'Sekolah Ku, Sudah Pakai Fathschool?', 
  subTitle: 'Kelola operasional sekolah lebih efisien dengan aplikasi manajemen sekolah berbasis teknologi. Mudah, cepat, dan terintegrasi.'
};

const defaultFeature = {
  title: 'Fitur Unggulan FathSchool',
  features: [
    { imgSrc: '/assets/img/icons/solid/cloud-network-2.svg', title: 'Manajemen Data Siswa dan Guru.', bgClass: "bg-pale-yellow" },
    { imgSrc: '/assets/img/icons/solid/cloud-network-2.svg', title: 'Pengaturan Jadwal Pelajaran.', bgClass: "bg-pale-yellow" },
    { imgSrc: '/assets/img/icons/solid/cloud-network-2.svg', title: 'Sistem Pembayaran Digital.', bgClass: "bg-pale-yellow" },
    { imgSrc: '/assets/img/icons/solid/cloud-network-2.svg', title: 'Laporan Akademik.', bgClass: "bg-pale-yellow" },
    { imgSrc: '/assets/img/icons/solid/cloud-network-2.svg', title: 'Notifikasi dan Komunikasi.', bgClass: "bg-pale-yellow" },
  ]
};

const defaultFAQ = [
  { question: 'Apa itu FathSchool?', answer: 'FathSchool adalah aplikasi berbasis web yang membantu sekolah mengelola data siswa, guru, jadwal pelajaran, pembayaran, hingga laporan akademik dalam satu platform yang mudah digunakan.' },
  { question: 'Siapa yang bisa menggunakan FathSchool?', answer: 'FathSchool dirancang untuk digunakan oleh semua jenis sekolah, mulai dari SD, SMP, SMA, hingga lembaga pendidikan lainnya. Semua pihak seperti administrator, guru, siswa, dan orang tua dapat terhubung melalui platform ini.' },
  { question: 'Apakah FathSchool bisa diakses di smartphone?', answer: 'Jelas, FathSchool berbasis cloud dan dapat diakses melalui perangkat apapun, baik desktop maupun smartphone, selama terhubung dengan internet.' },
  { question: 'Apakah data sekolah aman?', answer: 'Keamanan adalah prioritas kami. Semua data di FathSchool disimpan di server yang terenkripsi dan hanya dapat diakses oleh pengguna yang memiliki otorisasi.' },
  { question: 'Bagaimana jika membutuhkan bantuan teknis?', answer: 'Tim dukungan kami siap membantu Anda kapan saja. Anda dapat menghubungi kami melalui email atau layanan chat langsung di aplikasi.' }
];

const defaultReasons = {
  title: 'Mengapa Fathschool?',
  subTitle: 'Berikut ini beberapa alasan mengapa pelanggan kami memilih Fathschool.',
  data: [
    { title: 'Aman & Berbasis Cloud', subTitle: 'Data sekolah tersimpan dengan aman dan mudah diakses.', image: "/assets/img/icons/solid/calendar.svg" },
    { title: 'Mudah Digunakan', subTitle: 'Antarmuka ramah pengguna untuk semua pihak.', image: "/assets/img/icons/solid/calendar.svg" },
    { title: 'Terintegrasi', subTitle: 'Semua kebutuhan sekolah dalam satu aplikasi.', image: "/assets/img/icons/solid/calendar.svg" },
    { title: 'Dukungan Teknis', subTitle: 'Tim profesional siap membantu Anda kapan saja.', image: "/assets/img/icons/solid/calendar.svg" }
  ]
};

const defaultTestimonials = {
  title: 'Pelanggan yang Puas',
  subTitle: 'Kata Mereka Tentang FathSchool.',
  data: [
    { name: 'Jafar Awalaan', job: '-', description: 'Sejak menggunakan FathSchool, pengelolaan data siswa menjadi jauh lebih terorganisir. Guru dan staf kami merasa sangat terbantu dengan fitur otomatisasinya. Terima kasih FathSchool!' },
    { name: 'Bulan Ramdani', job: '-', description: 'Sistem pembayaran digital di FathSchool sangat memudahkan kami dalam memantau administrasi keuangan sekolah. Orang tua siswa juga lebih mudah membayar dengan transparansi penuh.' },
    { name: 'Rendy Ardiansyah', job: '-', description: 'FathSchool adalah solusi terbaik untuk sekolah modern. Saya bisa mengakses laporan akademik siswa secara real-time, kapan saja dan di mana saja. Sangat praktis!' },
    { name: 'Eka Prasetya', job: '-', description: 'Dengan FathSchool, komunikasi antara guru, orang tua, dan siswa menjadi lebih lancar. Notifikasi otomatis untuk jadwal dan laporan sangat membantu kami dalam menjaga keteraturan.' }
  ]
};

// Komponen utama untuk halaman utama
export default function Home() {
  // Menggunakan data dummy langsung
  const heroData = defaultHero;
  const featureData = defaultFeature;
  const faqData = defaultFAQ;
  const reasonsData = defaultReasons;
  const testimonialsData = defaultTestimonials;

  return (
    <>
      <Hero props={heroData} />
      <Feature props={featureData} />
      <FAQSection props={{ faqs: faqData }} />
      <Reason props={reasonsData} testimonials={testimonialsData} />
    </>
  );
}
