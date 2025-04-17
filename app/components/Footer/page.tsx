"use client";

import React from "react";
import { FaTiktok, FaFacebookF, FaInstagram } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0D3F53] text-white py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        
        {/* Column 1 */}
        <div className="flex flex-col sm:flex-row sm:items-start items-center text-center sm:text-left gap-4">
          <Image
            src="/logo.svg"
            alt="Vilöserdet Logo"
            width={80}
            height={80}
            className="h-16 lg:h-20 xl:h-24 opacity-90"
          />
          <div>
            <h2 className="text-2xl font-bold">VILÖSERDET</h2>
            <p className="text-sm text-gray-200 mt-2 max-w-xs">
              Vi är en full-service flytt&städfirma. Vårt uppdrag är att erbjuda dig de bästa tjänsterna till de bästa priserna.
            </p>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex justify-around gap-6 sm:justify-start">
          <div>
            <h3 className="text-base font-semibold">Våra tjänster</h3>
            <ul className="mt-2 space-y-1 text-sm text-gray-200">
              <li><a href="/flytthjalp" className="hover:text-[#deb82d]">Flytthjälp</a></li>
              <li><a href="/flyttstad" className="hover:text-[#deb82d]">Flyttstädning</a></li>
              <li><a href="/visningstadning" className="hover:text-[#deb82d]">Visningstädning</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold">Företag</h3>
            <ul className="mt-2 space-y-1 text-sm text-gray-200">
              <li><a href="/OmOss" className="hover:text-[#deb82d]">Om oss</a></li>
              <li><a href="/Kontakt" className="hover:text-[#deb82d]">Kontakt</a></li>
              <li><a href="/Integritetspolicy" className="hover:text-[#deb82d]">Integritetspolicy</a></li>
            </ul>
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col items-center lg:items-end text-center lg:text-right gap-3">
          <div className="flex space-x-4 text-xl">
            <a href="https://www.tiktok.com/@vilserdet" target="_blank" rel="noopener noreferrer" className="hover:text-[#deb82d]">
              <FaTiktok />
            </a>
            <a href="#" className="hover:text-[#deb82d]">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-[#deb82d]">
              <FaInstagram />
            </a>
          </div>
          <p className="text-sm text-gray-200">Org.nr: 880531-7958</p>
          <p className="text-sm text-gray-200">info@viloserdet.se</p>
          <p className="text-sm text-gray-200">0722677774</p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white mt-8 w-full max-w-7xl mx-auto"></div>

      {/* Bottom Text */}
      <div className="pt-4 text-center text-xs text-gray-200">
        ©{year} Vilöserdet | Powered by{" "}
        <a href="https://drifaab.se" target="_blank" rel="noopener noreferrer" className="hover:text-[#deb82d]">
          Drifa AB
        </a>
      </div>
    </footer>
  );
};

export default Footer;
