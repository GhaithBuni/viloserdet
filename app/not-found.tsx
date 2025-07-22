import React from "react";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 text-center">
      <div className="max-w-md">
        <img
          src="/cleaning-illustration.svg"
          alt="Städning illustration"
          className="w-60 mx-auto mb-8"
        />

        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          404 - Sidan hittades inte
        </h1>

        <p className="text-gray-600 text-lg mb-6">
          Ojdå! Det verkar som att sidan du letar efter har städats bort 🧹
          <br />
        </p>

        <Link
          href="/"
          className="inline-block bg-[#0D3F53]  hover:bg-[#0A2E3D] text-white font-semibold py-3 px-6 rounded-lg transition"
        >
          Tillbaka till startsidan
        </Link>
      </div>
    </div>
  );
}
