// app/faq/page.tsx  (adjust the route/file to your project)
import { client } from "@/sanity/lib/client";
import { faqPageQuery } from "@/sanity/lib/faq.query";
import { PortableText } from "@portabletext/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Tailwind renderers for Portable Text
const portableTextComponents = {
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc pl-6 space-y-1">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal pl-6 space-y-1">{children}</ol>
    ),
  },
  block: {
    normal: ({ children }: any) => <p className="mb-3">{children}</p>,
  },
  marks: {
    link: ({ children, value }: any) => (
      <a
        href={value?.href}
        rel="noopener noreferrer"
        target="_blank"
        className="underline"
      >
        {children}
      </a>
    ),
  },
};

type FaqItem = {
  question: string;
  answer: any[];
  defaultOpen?: boolean;
};

type FaqSection = {
  title: string;
  items: FaqItem[];
};

type FaqPageData = {
  heroHeading?: string;
  sections: FaqSection[];
};

export default async function Page() {
  const data = await client.fetch<FaqPageData>(faqPageQuery);

  return (
    <div>
      {/* Header Section */}
      <div className="relative bg-white px-6 md:px-12 pt-24 md:pt-32 pb-32 h-[55vh] flex items-center">
        <h1 className="container mx-auto px-6 md:px-12 text-4xl md:text-6xl font-bold text-[#0D3F53] text-center relative after:block after:w-full after:h-1 after:bg-[#DEB82D] after:mt-2">
          {data?.heroHeading || "Frågor och Svar"}
        </h1>
      </div>

      {/* Body */}
      <div className="bg-[#F5F5F5] text-black min-h-screen py-20">
        {data?.sections?.map((section, sIdx) => (
          <div key={`sec-${sIdx}`} className="px-4 md:px-8 lg:px-16">
            <div className="max-w-screen-xl mx-auto">
              {/* Title with divider matching text width */}
              <div className="inline-block">
                <h2
                  className={`font-bold text-[#0D3F53] ${
                    sIdx === 0 ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl"
                  }`}
                >
                  {section.title}
                </h2>
                {/* gold bar exactly as wide as the title */}
                <div className="h-1 bg-[#DEB82D] mt-3 w-full" />
              </div>

              {/* Section content */}
              <div className="mt-6">
                <Accordion
                  type="single"
                  collapsible
                  className="w-full"
                  defaultValue={
                    section.items?.find((i) => i.defaultOpen)
                      ? `item-${sIdx}-` +
                        section.items.findIndex((i) => i.defaultOpen)
                      : `item-${sIdx}-0`
                  }
                >
                  {section.items?.map((item, iIdx) => {
                    const value = `item-${sIdx}-${iIdx}`;
                    return (
                      <AccordionItem key={value} value={value}>
                        <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-base md:text-lg">
                          <PortableText
                            value={item.answer}
                            components={portableTextComponents}
                          />
                        </AccordionContent>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              </div>
            </div>

            {/* optional spacing between sections */}
            {sIdx < data.sections.length - 1 && (
              <div className="max-w-screen-xl mx-auto my-10" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
