import { Footer } from "@/components/layouts/Footer";
import { Navbar } from "@/components/layouts/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="content-wrapper">
      <Navbar />
      {children}
      <Footer />
    </section>
  );
}
