"use client";

import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

import { Reviews } from "./Reviews";
import InfoPanel from "./InfoPanel";

type Tip = { title: string; description: string };
type Service = { title: string; subtitle: string; image: any; link?: string };
type WhyUsFeature = { image: any; description: string };
export default function HomeClient({
  content,
}: {
  content: {
    title: string;
    ourServices: Service[];

    subtitle: string;
    whyUs: {
      title: string;
      subtitle: string;
      Insurance: WhyUsFeature;
      environmentallyFriendly: WhyUsFeature;
      priceGuarantee: WhyUsFeature;
      satisfactionGuarantee: WhyUsFeature;
    };
    tipsSection: {
      title: string;
      tipsList: Tip[];
    };
    reviewsTitle: string;
    InfoPanelTitle: string;
    InfoPanelContent: string;
  };
}) {
  return (
    <main className="bg-[#F5F5F5] min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#0D3F53] px-6 md:px-12 pt-24 md:pt-32 pb-32 h-[73vh] flex items-center">
        <div className="container mx-auto flex flex-col md:flex-row items-center space-y-12 md:space-y-0 md:space-x-12">
          {/* Text Content */}
          <div className="text-white text-center  relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              {content?.title}
            </h1>
            <p className="mt-4 text-base md:text-lg font-bold">
              {content?.subtitle}
            </p>
            <a
              href="#services"
              className="mt-6 inline-block bg-[#DEB82D] text-black font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-[#FFFFFF] transition "
            >
              Våra tjänster →
            </a>
          </div>

          <InfoPanel
            title={content.InfoPanelTitle}
            content={content.InfoPanelContent}
          />
        </div>

        {/* Wave Line - ALWAYS Centered */}
        <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 w-full">
          <Image
            src="/WaveLine.svg"
            alt="Wave Line Decoration"
            width={1440}
            height={200}
            sizes="100vw" // tells the browser this image will take full viewport width
            className="w-full h-auto opacity-80" // ensure correct scaling
            priority // optional: if it's critical for above-the-fold
          />
        </div>
      </section>

      {/* Våra Tjänster Section */}
      <section id="services" className="container mx-auto px-6 py-24">
        <h2 className="text-4xl md:text-6xl font-bold text-black mb-16 text-left relative after:block after:w-full  after:h-1 after:bg-[#DEB82D] after:mt-2">
          Våra tjänster
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.ourServices?.map((service, index) => (
            <div
              key={index}
              className="bg-[#FFFF] rounded-2xl overflow-hidden shadow-lg flex flex-col items-center p-6 md:p-8 text-center"
            >
              {/* Image */}
              <div className="w-full h-48 mb-6 overflow-hidden rounded-lg">
                {service.image?.asset?.url && (
                  <img
                    src={service.image.asset.url}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#0D3F53]">
                {service.title}
              </h3>

              {/* Subtitle/Description */}
              <p className="text-lg mb-6 text-[#0D3F53] font-bold">
                {service.subtitle}
              </p>

              {/* Button */}
              {service.link && (
                <a
                  href={service.link}
                  className="inline-block bg-[#DEB82D] text-[#0D3F53] font-semibold text-lg py-2 px-6 rounded-lg shadow-md hover:bg-[#0D3F53] hover:text-[#DEB82D] transition"
                >
                  Boka
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Section Varför vi? */}

      <div className="w-[80%] bg-[#0D3D53] text-white py-20 flex justify-center items-center mx-auto shadow-lg">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold  text-center ">
            {content?.whyUs?.title}
          </h1>
          <p className="mt-3 text-lg text-gray-200  text-center font-bold">
            {content?.whyUs?.subtitle}
          </p>

          {/* Icons Section */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-12 justify-center items-center">
            {/* Försäkring */}
            <a href="/Forsakring" className="flex flex-col items-center">
              <Image
                src={content?.whyUs?.Insurance?.image?.asset?.url}
                alt="Försäkring"
                width={100}
                height={100}
              />
              <p className="mt-4 text-lg font-semibold">
                {content?.whyUs?.Insurance?.description}
              </p>
            </a>

            {/* Miljövänligt */}
            <a href="/miljovanligt" className="flex flex-col items-center">
              <Image
                src={content?.whyUs?.environmentallyFriendly?.image?.asset?.url}
                alt="Miljövänligt"
                width={100}
                height={100}
              />
              <p className="mt-4 text-lg font-semibold">
                {content?.whyUs?.environmentallyFriendly?.description}
              </p>
            </a>

            {/* Prisgaranti */}
            <a href="/Prisgaranti" className="flex flex-col items-center">
              <Image
                src={content?.whyUs?.priceGuarantee?.image?.asset?.url}
                alt="Prisgaranti"
                width={100}
                height={100}
              />
              <p className="mt-4 text-lg font-semibold">
                {content?.whyUs?.priceGuarantee?.description}
              </p>
            </a>

            {/* Nöjdgaranti */}
            <a href="/nojdgaranti" className="flex flex-col items-center">
              <Image
                src={content?.whyUs?.satisfactionGuarantee?.image?.asset?.url}
                alt="Nöjdgaranti"
                width={100}
                height={100}
              />
              <p className="mt-4 text-lg font-semibold">
                {content?.whyUs?.satisfactionGuarantee?.description}
              </p>
            </a>
          </div>
        </div>
      </div>

      {/* Tips  */}

      <div className="container mx-auto px-6 py-16">
        <h2 className="text-4xl md:text-6xl font-bold text-black mb-12 text-left relative after:block after:w-[13vh]  after:h-1 after:bg-[#DEB82D] after:mt-2">
          {content?.tipsSection?.title}
        </h2>
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content?.tipsSection?.tipsList.map((tip, index) => (
            <div key={index} className=" p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">{tip.title}</h3>
              <p className="text-lg">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Vad sa de om oss (Google Reviews) */}

      <section className="container mx-auto px-6 py-24">
        <h2 className="text-4xl md:text-6xl font-bold text-black mb-12 text-left after:block after:w-full after:h-1 after:bg-[#DEB82D] after:mt-2">
          {content?.reviewsTitle}
        </h2>

        <Reviews />
      </section>
    </main>
  );
}
