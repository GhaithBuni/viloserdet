import React from "react";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import type { PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

export const dynamic = "force-dynamic";

type PTValue = PortableTextBlock[] | string | null | undefined;

interface Miljovanligt {
  HallbarhetOchMiljovanlig?: string | null;
  HallbarhetOchMiljovanligBeskrivning?: PTValue;

  CyklarForEnGronareFramtid?: string | null;
  CyklarForEnGronareFramtidBeskrivning?: PTValue;

  NaturligaStadmedel?: string | null;
  NaturligaStadmedelBeskrivning?: PTValue;

  MiljovanligFramtid?: string | null;
  MiljovanligFramtidBeskrivning?: PTValue;
}

const ptComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-base md:text-lg leading-7 whitespace-pre-line">
        {children}
      </p>
    ),
  },
};

// Helper: render Portable Text when it's an array; otherwise render the string fallback.
const PT: React.FC<{ value: PTValue }> = ({ value }) => {
  if (!value) return null;
  if (Array.isArray(value)) {
    return <PortableText value={value} components={ptComponents} />;
  }
  return (
    <p className="text-base md:text-lg leading-7 whitespace-pre-line">
      {value}
    </p>
  );
};

const Page = async () => {
  const content = await client.fetch<Miljovanligt>(
    `*[_type == "miljovanligt"][0]`
  );

  return (
    <div className="mt-20">
      <div className="bg-white text-gray-800 px-4 py-10 md:px-8 lg:px-16 lg:py-20 space-y-12 max-w-screen-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0D3F53]">
          {content?.HallbarhetOchMiljovanlig}
        </h2>

        <section className="space-y-4">
          <PT value={content?.HallbarhetOchMiljovanligBeskrivning} />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
              {content?.CyklarForEnGronareFramtid}
            </h3>
            <PT value={content?.CyklarForEnGronareFramtidBeskrivning} />
          </div>

          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
              {content?.NaturligaStadmedel}
            </h3>
            <PT value={content?.NaturligaStadmedelBeskrivning} />
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
            {content?.MiljovanligFramtid}
          </h3>
          <PT value={content?.MiljovanligFramtidBeskrivning} />
        </section>
      </div>
    </div>
  );
};

export default Page;
