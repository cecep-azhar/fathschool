import { Footer, Navbar, Providers } from "@/components/layouts";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <section className="content-wrapper">
        <Navbar />
        {children}
        <Footer />
      </section>
    </Providers>
  );
}
