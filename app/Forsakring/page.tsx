import React from "react";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import type { PortableTextComponents } from "@portabletext/react";

export const dynamic = "force-dynamic";

type PTValue = PortableTextBlock[] | string | null | undefined;

interface Forsakring {
  title?: string;
  underTitle?: string;
  underTitle2?: string;

  InsurancdEmployeesTitle?: string;
  InsurancdEmployeesDes?: PTValue;

  InsuranceGoodsTitle?: string;
  InsuranceGoodsDes?: PTValue;

  CollaborationSvedeaTitle?: string;
  CollaborationSvedeaDes?: PTValue;
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

// Reusable helper
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
  const content = await client.fetch<Forsakring>(`*[_type == "Forsakring"][0]`);

  return (
    <div className="mt-20">
      <div className="bg-white text-gray-800 px-4 py-10 md:px-8 lg:px-16 lg:py-20 space-y-12 max-w-screen-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0D3F53]">
          {content?.title}
        </h2>

        <section className="space-y-4 text-base md:text-lg">
          <p>{content?.underTitle}</p>
          <p>{content?.underTitle2}</p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
              {content?.InsurancdEmployeesTitle}
            </h3>
            <PT value={content?.InsurancdEmployeesDes} />
          </div>

          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
              {content?.InsuranceGoodsTitle}
            </h3>
            <PT value={content?.InsuranceGoodsDes} />
          </div>
        </section>

        <section className="space-y-4 text-base md:text-lg">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
            {content?.CollaborationSvedeaTitle}
          </h3>
          <PT value={content?.CollaborationSvedeaDes} />
        </section>
      </div>
    </div>
  );
};

export default Page;
