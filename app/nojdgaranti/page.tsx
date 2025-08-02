import { client } from "@/sanity/lib/client";
export const dynamic = "force-dynamic";
import { Badge } from "../components/Badge";

const page = async () => {
  const content = await client.fetch(`*[_type == "nojdgaranti"][0]`);

  return (
    <div className="mt-20">
      <div className="bg-white text-gray-800 px-4 py-10 md:px-8 lg:px-16 lg:py-20 space-y-12 max-w-screen-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0D3F53]">
          {content?.title}
        </h2>

        <section className="space-y-4 text-base md:text-lg">
          <p>{content?.subtitle}</p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
              {content?.CustomizedService}
            </h3>
            <p className="text-base md:text-lg">
              {content?.CustomizedServiceDescription}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
              {content?.Communication}
            </h3>
            <p className="text-base md:text-lg">
              {content?.CommunicationDescription}
            </p>
          </div>
        </section>

        <section className="space-y-4 text-base md:text-lg">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
            {content?.Feedback}
          </h3>
          <p>{content?.FeedbackDescription}</p>
        </section>

        <section className="space-y-4 text-base md:text-lg">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
            {content?.anythingWrong}
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            {(content?.descriptionAnythingWrong as string[] | undefined)?.map(
              (item: string, index: number) => <li key={index}>{item}</li>
            )}
          </ul>
        </section>

        <section className="space-y-4 text-base md:text-lg">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
            {content?.Confidence}
          </h3>
          <p>{content?.ConfidenceDescription}</p>
        </section>

        <section className="space-y-6">
          <Badge />
        </section>
      </div>
    </div>
  );
};

export default page;
