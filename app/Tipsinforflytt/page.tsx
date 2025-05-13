"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const tips = [
  {
    title: "📦 Börja packa i god tid",
    description:
      "Packa rum för rum och märk alla lådor tydligt. Börja med saker du inte använder dagligen.",
  },
  {
    title: "🛠 Använd rätt packmaterial",
    description:
      "Använd bubbelplast, flyttlådor och tejp av god kvalitet för att skydda dina ägodelar.",
  },
  {
    title: "✅ Gör en checklista",
    description:
      "En detaljerad checklista hjälper dig att hålla koll på allt som måste göras inför flytten.",
  },
  {
    title: "📩 Meddela adressändring",
    description:
      "Glöm inte att meddela myndigheter, banken och försäkringsbolag om din nya adress.",
  },
  {
    title: "🚚 Boka flytthjälp i tid",
    description:
      "Se till att boka flyttfirma i god tid för att säkerställa tillgänglighet på ditt flyttdatum.",
  },
];

const page = () => {
  const [expandedTip, setExpandedTip] = useState<number | null>(null);

  return (
    <div className="bg-[#F5F5F5] text-black min-h-screen py-24">
      {/* Header Section */}
      <div className="relative bg-white px-6 md:px-12 pt-24 md:pt-32 pb-32 h-[55vh] flex items-center">
        <h1 className="container mx-auto px-6 md:px-12 text-4xl md:text-6xl font-bold text-[#0D3F53] text-center relative after:block after:w-full after:h-1 after:bg-[#DEB82D] after:mt-2">
          Förbered dig inför flytten med dessa smarta tips!
        </h1>
      </div>
      <div className="container mx-auto ">
        {/* Grid Layout */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg text-black border border-gray-200 cursor-pointer hover:shadow-xl transition-all"
              onClick={() =>
                setExpandedTip(expandedTip === index ? null : index)
              }
            >
              <h3 className="text-xl font-semibold flex items-center gap-2">
                {tip.title}
              </h3>
              {expandedTip === index && (
                <p className="mt-2 text-gray-600">{tip.description}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
