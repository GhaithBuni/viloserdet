import { client } from "@/sanity/lib/client";
import TipsClient from "../components/TipsClient";
export const dynamic = "force-dynamic";

const page = async () => {
  const data = await client.fetch(`*[_type == "Tipsinforflytt"][0]{
    title,
    packiingInAdvance,
    packingMaterials,
    chicklist,
    changeOfAddress,
    MovingHelp
  }`);

  const tipsArray = [
    data.packiingInAdvance,
    data.packingMaterials,
    data.chicklist,
    data.changeOfAddress,
    data.MovingHelp,
  ];

  return <TipsClient title={data.title} tips={tipsArray} />;
};

export default page;
