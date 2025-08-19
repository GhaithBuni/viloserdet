import React from "react";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import type { PortableTextComponents } from "@portabletext/react";

export const dynamic = "force-dynamic";

type PTValue = PortableTextBlock[] | string | null | undefined;

interface IncludedService {
  title?: string; // stays string
  body?: PortableTextBlock[]; // block content
}

interface IngariflyttstadingenDoc {
  title?: string;

  IncludedServices?: IncludedService[];

  Preparations?: {
    title?: string;
    body?: PortableTextBlock[];
  };

  cancellationAndRebooking?: string; // title
  cancellationAndRebookingText?: PTValue; // block

  keys?: string; // title
  keysText?: PTValue; // block

  notIncluded?: {
    title?: string; // title
    body?: PTValue; // block
  };

  cantOrder?: {
    title?: string; // title
    body?: PTValue; // block
  };

  RightToStopWork?: string; // title
  RightToStopWorkText?: PTValue; // block

  Payment?: string; // title
  PaymentDes?: PTValue; // block

  QualityGuarantee?: string; // title
  QualityGuaranteeText?: PTValue; // block
}

const ptComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-base md:text-lg leading-7 whitespace-pre-line">
        {children}
      </p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-5 space-y-1 text-base md:text-lg">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-5 space-y-1 text-base md:text-lg">
        {children}
      </ol>
    ),
  },
  listItem: ({ children }) => <li>{children}</li>, // ✅ not { bullet: ..., number: ... }
};

// Helper: renders PT arrays or falls back to plain <p> if some content is still a string
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
  const content = await client.fetch<IngariflyttstadingenDoc>(
    `*[_type == "Ingariflyttstadingen"][0]`
  );

  return (
    <div className="bg-white text-gray-800">
      <div className="px-4 py-10 md:px-8 lg:px-16 lg:py-20 max-w-screen-xl mx-auto space-y-12 mt-20">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0D3F53] mt-4">
          {content?.title}
        </h2>

        {/* Included Services */}
        <div className="bg-[#FEF4E8] p-4 md:p-6 rounded-md shadow-md space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
            Ingår i Flyttstädning
          </h2>

          {content?.IncludedServices?.map((section, index) => (
            <div key={index} className="space-y-2">
              <h4 className="text-lg md:text-xl font-medium mt-4">
                {section.title}
              </h4>
              <PT value={section.body} />
            </div>
          ))}
        </div>

        {/* Preparations */}
        <section className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
            {content?.Preparations?.title}
          </h3>
          <PT value={content?.Preparations?.body} />
        </section>

        {/* Cancellation & Rebooking */}
        <section className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
            {content?.cancellationAndRebooking}
          </h3>
          <PT value={content?.cancellationAndRebookingText} />
        </section>

        {/* Keys */}
        <section className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
            {content?.keys}
          </h3>
          <PT value={content?.keysText} />
        </section>

        {/* Not Included */}
        <section className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
            {content?.notIncluded?.title}
          </h3>
          <PT value={content?.notIncluded?.body} />
        </section>

        {/* Can't Order */}
        <section className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
            {content?.cantOrder?.title}
          </h3>
          <PT value={content?.cantOrder?.body} />
        </section>

        {/* Right to Stop Work */}
        <section className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
            {content?.RightToStopWork}
          </h3>
          <PT value={content?.RightToStopWorkText} />
        </section>

        {/* Payment */}
        <section className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
            {content?.Payment}
          </h3>
          <PT value={content?.PaymentDes} />
        </section>

        {/* Quality Guarantee + Terms */}
        <section className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
            {content?.QualityGuarantee}
          </h3>
          <PT value={content?.QualityGuaranteeText} />
        </section>
      </div>
    </div>
  );
};

export default Page;
