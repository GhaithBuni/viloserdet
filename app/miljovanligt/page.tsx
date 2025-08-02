import React from "react";
import { client } from "@/sanity/lib/client";
export const dynamic = "force-dynamic";

const page = async () => {
  const content = await client.fetch(`*[_type == "miljovanligt"][0]`);

  return (
    <div className="mt-20">
      <div className="bg-white text-gray-800 px-4 py-10 md:px-8 lg:px-16 lg:py-20 space-y-12 max-w-screen-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0D3F53]">
          {content?.HallbarhetOchMiljovanlig}
        </h2>

        <section className="space-y-4 text-base md:text-lg">
          <p>{content?.HallbarhetOchMiljovanligBeskrivning}</p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
              {content?.CyklarForEnGronareFramtid}
            </h3>
            <p className="text-base md:text-lg">
              {content?.CyklarForEnGronareFramtidBeskrivning}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
              {content?.NaturligaStadmedel}
            </h3>
            <p className="text-base md:text-lg">
              {content?.NaturligaStadmedelBeskrivning}
            </p>
          </div>
        </section>

        <section className="space-y-4 text-base md:text-lg">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
            {content?.MiljovanligFramtid}
          </h3>
          <p>{content?.MiljovanligFramtidBeskrivning}</p>
          <p>{content?.MiljovanligFramtidBeskrivning2}</p>
        </section>
      </div>
    </div>
  );
};

export default page;
