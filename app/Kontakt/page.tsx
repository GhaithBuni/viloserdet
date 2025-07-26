

import { client } from "@/sanity/lib/client";
import KontaktClient from "../components/KontaktClient";

const page = async() => {
  const content = await client.fetch(`*[_type == "Kontakt"][0]`);
  return <KontaktClient content={content} />;
};

export default page;
