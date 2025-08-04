// app/page.tsx
import { client } from "@/sanity/lib/client";
import HomeClient from "./components/HomeClient";

export default async function Page() {
  const data = await client.fetch(`*[_type == "landingPage"][0]{
    title,
    subtitle,
    ourServices[] {
      title,
      subtitle,
      link,
      image {
        asset->{
          url
        }
      }
    },
    whyUs {
      title,
      subtitle,
      Insurance { image { asset->{ url } }, description },
      environmentallyFriendly { image { asset->{ url } }, description },
      priceGuarantee { image { asset->{ url } }, description },
      satisfactionGuarantee { image { asset->{ url } }, description }
    },
    tipsSection {
      title,
      tipsList[] {
        title,
        description
      }
    },
    reviewsTitle,
    InfoPanelTitle,
    InfoPanelContent,
  }`);

  return <HomeClient content={data} />;
}
