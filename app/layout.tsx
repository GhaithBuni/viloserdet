import type { Metadata } from "next";
import { PT_Sans } from "next/font/google";
import Script from "next/script"; // ✅ Import GA Script
import "./globals.css";
import ClientLayout from "./components/ClientLayout";
import Analytics from "./components/Analytics"; // ✅ This is the client component you'll add
import Footer from "./components/Footer/page";

const ptSans = PT_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "VIlöserdet",
  description:
    "Professional and reliable cleaning and moving services tailored to your needs. Serving homes and businesses with care, speed, and efficiency.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/logo.svg",
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
};

const isProd = process.env.NODE_ENV === "production";
const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${ptSans.className} antialiased min-h-screen flex flex-col`}
      >
        {isProd && GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_ID}', {
          page_path: window.location.pathname,
        });
      `}
            </Script>
            <Analytics />
          </>
        )}
        <ClientLayout>{children}</ClientLayout>
        <Footer />
      </body>
    </html>
  );
}
