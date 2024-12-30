import Script from "next/script";
import "@/assets/css/plugins.css";
import "@/assets/css/style.css";
import "@/assets/css/colors/grape.css";
import "@/assets/css/fonts/space.css";
import "@/app/globals.css";

export const metadata = {
  title: "Fath School",
  description: "Generated by create next app",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script src="/assets/js/plugins.js" strategy="afterInteractive" />
        <Script src="/assets/js/theme.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
