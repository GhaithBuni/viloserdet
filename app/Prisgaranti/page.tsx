import React from "react";
import { client } from "@/sanity/lib/client";
export const dynamic = "force-dynamic";

interface PrisgarantiContent {
  title: string;
  subtitle: string;
  description: string[]; // array of strings from Sanity
}

const page = async () => {
  const content: PrisgarantiContent = await client.fetch(
    `*[_type == "Prisgaranti"][0]`
  );

  return (
    <div className="mt-20">
      <div className="bg-white text-gray-800 px-4 py-10 md:px-8 lg:px-16 lg:py-20 space-y-10 max-w-screen-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0D3F53]">
          {content?.title}
        </h2>

        <section className="space-y-4 text-base md:text-lg">
          <p className="font-semibold text-[#0D3F53] text-lg md:text-xl">
            {content?.subtitle}
          </p>
          {content?.description?.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </section>

        <div className="flex justify-start md:justify-end">
          <a
            href="/Kontakt"
            className="inline-block bg-[#0D3F53] text-white px-5 py-3 rounded-lg shadow-md flex items-center justify-center transition  hover:bg-[#0A2E3D]"
          >
            Kontakta oss
          </a>
        </div>
      </div>
    </div>
  );
};

export default page;
