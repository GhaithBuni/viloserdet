"use client";

import React, { useState } from "react";
import { FaInstagram, FaTiktok, FaFacebookF } from "react-icons/fa";
import Image from "next/image";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTjansterOpen, setIsTjansterOpen] = useState(false);
  const [isIngarOpen, setIsIngarOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-[#0D3F53] text-white transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center p-4 lg:p-5">
        {/* Logo */}
        <div className="flex items-center space-x-2 lg:space-x-4">
          <a href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="VILÖSERDET Logo"
              width={48}
              height={48}
              className="transition-all duration-300 w-10 h-10 lg:w-14 lg:h-14"
            />
            <span className="text-xl lg:text-2xl font-bold transition-all duration-300">
              VILÖSERDET
            </span>
          </a>
        </div>

        {/* Desktop Menu - Show from lg (1024px) */}
        <div className="hidden lg:flex space-x-4 xl:space-x-8 items-center text-base xl:text-lg">
          {/* Tjänster Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setIsTjansterOpen(!isTjansterOpen);
                setIsIngarOpen(false);
              }}
              className="px-3 py-2 xl:px-4 xl:py-3 rounded-md font-semibold transition-all duration-300 text-white hover:bg-[#2D231B]"
            >
              Tjänster ▾
            </button>
            {isTjansterOpen && (
              <div className="absolute bg-white text-black mt-3 rounded-md shadow-lg w-48 text-base xl:text-lg">
                <a href="/flytthjalp" className="block px-4 py-3 hover:bg-gray-200">
                  Flytthjälp
                </a>
                <a href="/flyttstad" className="block px-4 py-3 hover:bg-gray-200">
                  Flyttstäd
                </a>
               
                <a href="/visningstadning" className="block px-4 py-3 hover:bg-gray-200">
                  Visningstädning
                </a>
              </div>
            )}
          </div>

          {/* Other Links */}
          {[
            { name: "Tips inför flytt", url: "/Tipsinforflytt" },
            { name: "Kontakt", url: "/Kontakt" },
            { name: "Om oss", url: "/OmOss" },
          ].map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="px-3 py-2 xl:px-4 xl:py-3 rounded-md font-semibold transition-all duration-300 text-white hover:bg-[#2D231B]"
            >
              {link.name}
            </a>
          ))}
          
          {/* Ingår i vårt fasta pris Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setIsIngarOpen(!isIngarOpen);
                setIsTjansterOpen(false);
              }}
              className="px-3 py-2 xl:px-4 xl:py-3 rounded-md font-semibold transition-all duration-300 text-white hover:bg-[#2D231B]"
            >
              Ingår i vårt fasta pris ▾
            </button>
            {isIngarOpen && (
              <div className="absolute bg-white text-black mt-3 rounded-md shadow-lg w-56 text-base xl:text-lg right-0">
                <a href="/Ingariflytthjalp" className="block px-4 py-3 hover:bg-gray-200">
                  Flytthjälp
                </a>
                <a href="/Ingariflyttstadingen" className="block px-4 py-3 hover:bg-gray-200">
                  Flyttstädning
                </a>
               
                <a href="/Ingarivisningsstadning" className="block px-4 py-3 hover:bg-gray-200">
                  Visningstädning
                </a>
              </div>
            )}
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 xl:space-x-6 text-xl xl:text-2xl">
            {[FaInstagram, FaTiktok, FaFacebookF].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="transition-all duration-300 text-white hover:text-gray-300"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Tablet Menu - Show between md (768px) and lg (1024px) */}
        <div className="hidden md:flex lg:hidden items-center space-x-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl transition-all duration-300 text-white"
          >
            ☰
          </button>
          <div className="flex space-x-4 text-xl">
            {[FaInstagram, FaTiktok, FaFacebookF].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="transition-all duration-300 text-white hover:text-gray-300"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Button - Show below md (768px) */}
        <button
          className="md:hidden text-2xl transition-all duration-300 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile/Tablet Menu */}
      {isOpen && (
        <div className="lg:hidden flex flex-col items-center p-4 space-y-4 text-base bg-[#0D3F53] text-white">
          {/* Tjänster Dropdown */}
          <div className="relative w-full text-center">
            <button
              onClick={() => {
                setIsTjansterOpen(!isTjansterOpen);
                setIsIngarOpen(false);
              }}
              className="w-full px-4 py-3 rounded-md font-semibold transition-all duration-300 text-white hover:bg-[#2D231B]"
            >
              Tjänster ▾
            </button>
            {isTjansterOpen && (
              <div className="bg-white text-black mt-2 rounded-md shadow-lg w-full">
                <a href="/flytthjalp" className="block px-4 py-3 hover:bg-gray-200">
                  Flytthjälp
                </a>
                <a href="/flyttstad" className="block px-4 py-3 hover:bg-gray-200">
                  Flyttstäd
                </a>
                
                <a href="/visningstadning" className="block px-4 py-3 hover:bg-gray-200">
                  Visningstädning
                </a>
              </div>
            )}
          </div>

          {/* Other Links */}
          {[
            { name: "Tips inför flytt", url: "/Tipsinforflytt" },
            { name: "Kontakt", url: "/Kontakt" },
            { name: "Om oss", url: "/OmOss" },
          ].map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="w-full px-4 py-3 rounded-md font-semibold transition-all duration-300 text-white hover:bg-[#2D231B] text-center"
            >
              {link.name}
            </a>
          ))}
          
          {/* Ingår i vårt fasta pris Dropdown */}
          <div className="relative w-full text-center">
            <button
              onClick={() => {
                setIsIngarOpen(!isIngarOpen);
                setIsTjansterOpen(false);
              }}
              className="w-full px-4 py-3 rounded-md font-semibold transition-all duration-300 text-white hover:bg-[#2D231B]"
            >
              Ingår i vårt fasta pris ▾
            </button>
            {isIngarOpen && (
              <div className="bg-white text-black mt-2 rounded-md shadow-lg w-full">
                <a href="/Ingariflytthjalp" className="block px-4 py-3 hover:bg-gray-200">
                  Flytthjälp
                </a>
                <a href="/Ingariflyttstadingen" className="block px-4 py-3 hover:bg-gray-200">
                  Flyttstädning
                </a>
            
                <a href="/Ingarivisningsstadning" className="block px-4 py-3 hover:bg-gray-200">
                  Visningstädning
                </a>
              </div>
            )}
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6 text-2xl pt-2">
            {[FaInstagram, FaTiktok, FaFacebookF].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="transition-all duration-300 text-white hover:text-gray-300"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;