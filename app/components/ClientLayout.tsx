"use client";

import { usePathname } from "next/navigation";
import NavBar from "./Nav/NavBar";
import Footer from "./Footer/page";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isStudioRoute = pathname?.startsWith("/studio");

  return (
    <>
      {!isStudioRoute && <NavBar />}
      <main className="flex-grow">{children}</main>
      {!isStudioRoute && <Footer />}
    </>
  );
}
