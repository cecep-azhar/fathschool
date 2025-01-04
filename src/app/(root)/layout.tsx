"use client";

import { useEffect } from "react";
import { Footer, Navbar } from "@/components/layouts";
import { ButtonFloat } from "@/components/elements/ButtonFloat";
import { usePostVisitorData } from "@/hooks/POST/usePostVisitor";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { mutate: postVisitorData } = usePostVisitorData();

  useEffect(() => {
    const trackVisitor = () => {
      const pageUrl = window.location.href;

      postVisitorData(pageUrl, {
        onSuccess: (data) => {
          console.log("Visitor data recorded:", data);
        },
        onError: (error) => {
          console.error("Failed to record visitor data:", error);
        },
      });
    };

    trackVisitor();
  }, [postVisitorData]);

  return (
    <section className="content-wrapper">
      <Navbar />
      {children}
      <Footer />
      <ButtonFloat />
    </section>
  );
}
