import type { Metadata } from "next";
import { PT_Sans } from "next/font/google";
import "./globals.css";
import ClientLayout from "./components/ClientLayout";

const ptSans = PT_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "VIlöserdet",
  description:
    "Professional and reliable cleaning and moving services tailored to your needs. Serving homes and businesses with care, speed, and efficiency.",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ptSans.className} antialiased min-h-screen flex flex-col`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
