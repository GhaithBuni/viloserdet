import Image from "next/image";

import { client } from "@/sanity/lib/client";
import TeamSection from "../components/TeamSection";
export const dynamic = "force-dynamic"; // disables static caching

type ServiceItem = {
  serviceName: string;
  description: string;
};

type PrincipleItem = {
  name: string;
  description: string;
};

type SanityServiceItem = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const page = async () => {
  const content = await client.fetch(`*[_type == "omOss"][0]`);

  return (
    <div className="bg-[#F5F5F5] text-black min-h-screen py-24">
      {/* Header Section */}
      <div className="relative bg-white px-6 md:px-12 pt-24 md:pt-32 pb-32 h-[55vh] flex items-center">
        <h1 className="container mx-auto px-6 md:px-12 text-4xl md:text-6xl font-bold text-[#0D3F53] text-center relative after:block after:w-full after:h-1 after:bg-[#DEB82D] after:mt-2">
          {content.heroTitle}
        </h1>
      </div>

      {/* Main Section (Two Column Layout) */}
      <div className="container mx-auto px-6 md:px-12 mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Content Section */}
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold text-[#0D3F53]">Om oss</h2>
          <p className="mt-4 text-lg text-gray-700">{content.omOssText}</p>

          <h2 className="text-3xl font-bold text-[#0D3F53] mt-8">
            {content.servicesSection?.title}
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            {content.servicesSection?.description}
          </p>

          <div className="mt-6 text-gray-700">
            <h3 className="text-xl font-semibold">
              {content.servicesSection?.subtitle}
            </h3>
            <ul className="list-disc list-inside mt-4 space-y-2">
              {(
                content.servicesSection?.servicesList as
                  | ServiceItem[]
                  | undefined
              )?.map((service: ServiceItem, index: number) => (
                <li key={index}>
                  <strong>{service.serviceName}</strong> – {service.description}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-6 text-lg text-gray-700">
            {content.servicesSection?.sistaRad}
          </p>

          <h2 className="text-3xl font-bold text-[#0D3F53] mt-8">
            {content.History?.title}
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            {content.History?.description1}
          </p>
          <p className="mt-2">{content.History?.description2}</p>
          <p className="mt-2">{content.History?.description3}</p>
          <p className="mt-2">
            {content.History?.description4Pre}{" "}
            <strong>{content.History?.stadgaranti}</strong> och{" "}
            <strong>{content.History?.flyttgranti}</strong>
            {content.History?.description4After}
          </p>

          <p className="mt-2">{content.History?.description5}</p>

          <h2 className="text-3xl font-bold text-[#0D3F53] mt-8">
            {content.Vision?.title}{" "}
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            {content.Vision?.description1}
          </p>
          <p className="mt-2">{content.Vision?.description2}</p>
        </div>

        {/* Right Highlighted Box Section */}
        <div className="bg-[#FEF4E8] p-8 rounded-lg shadow-md  ">
          <h3 className="text-2xl font-bold text-[#0D3F53] flex items-center">
            {content.principles?.title}
          </h3>
          <p className="mt-2 text-lg text-gray-700">
            {content.principles?.undertitle}
          </p>

          {content.principles?.principlesList?.map(
            (principle: PrincipleItem, index: number) => (
              <div key={index}>
                <h3 className="text-2xl font-bold text-[#0D3F53] flex items-center mt-10 md:mt-20">
                  {principle.name}
                </h3>
                <p className="mt-2 text-lg text-gray-700">
                  {principle.description}
                </p>
              </div>
            )
          )}
        </div>
      </div>

      {/* Våra Tjänster Section */}
      <section id="services" className="container mx-auto px-6 py-24">
        <h2 className="text-4xl md:text-6xl font-bold text-black mb-16 text-left relative after:block after:w-full after:h-1 after:bg-[#DEB82D] after:mt-2">
          {content.services?.sectionTitle}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.services?.servicesList?.map(
            (service: SanityServiceItem, index: number) => (
              <div
                key={index}
                className="bg-[#FFFF] rounded-2xl overflow-hidden shadow-lg flex flex-col items-center p-6 md:p-8 text-center"
              >
                {/* Image */}
                <div className="w-full h-48 mb-6 overflow-hidden rounded-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#0D3F53]">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-lg mb-6 text-[#0D3F53] font-bold">
                  {service.description}
                </p>

                {/* Button */}
                <a
                  href={service.link}
                  className="inline-block bg-[#DEB82D] text-[#0D3F53] font-semibold text-lg py-2 px-6 rounded-lg shadow-md hover:bg-[#0D3F53] hover:text-[#DEB82D] transition"
                >
                  Boka
                </a>
              </div>
            )
          )}
        </div>
      </section>

      {/* Section Varför vi? */}

      <div className="w-[80%] bg-[#0D3D53] text-white py-20 flex justify-center items-center mx-auto shadow-lg">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold  text-center ">
            {content.WhyUs?.title}
          </h1>
          <p className="mt-3 text-lg text-gray-200  text-center font-bold">
            {content.WhyUs?.underTitle}
          </p>

          {/* Icons Section */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-12 justify-center items-center">
            {/* Försäkring */}
            <a href="/Forsakring" className="flex flex-col items-center">
              <Image
                src="/insurance.svg"
                alt="Försäkring"
                width={100}
                height={100}
              />
              <p className="mt-4 text-lg font-semibold">Försäkring</p>
            </a>

            {/* Miljövänligt */}
            <a href="/miljovanligt" className="flex flex-col items-center">
              <Image
                src="/recycle.svg"
                alt="Miljövänligt"
                width={100}
                height={100}
              />
              <p className="mt-4 text-lg font-semibold">Miljövänligt</p>
            </a>

            {/* Prisgaranti */}
            <a href="/Prisgaranti" className="flex flex-col items-center">
              <Image
                src="/wallet.svg"
                alt="Prisgaranti"
                width={100}
                height={100}
              />
              <p className="mt-4 text-lg font-semibold">Prisgaranti</p>
            </a>

            {/* Nöjdgaranti */}
            <a href="/nojdgaranti" className="flex flex-col items-center">
              <Image
                src="/guarantee.svg"
                alt="Nöjdgaranti"
                width={100}
                height={100}
              />
              <p className="mt-4 text-lg font-semibold">Nöjdgaranti</p>
            </a>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <TeamSection
        title={content.teamSection?.title}
        teamMembers={content.teamSection?.teamMembers}
      />

      {/* Footer Section */}
    </div>
  );
};

export default page;
