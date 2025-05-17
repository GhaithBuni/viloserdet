"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type TeamMember = {
  name: string;
  role: string;
  image: string;
};

type TeamSectionProps = {
  title: string;
  teamMembers: TeamMember[];
};

export default function TeamSection({ title, teamMembers }: TeamSectionProps) {
  return (
    <div className="container mx-auto px-6 md:px-12 mt-16 text-center">
      <h3 className="text-4xl md:text-6xl font-bold text-center text-[#0D3F53] relative after:block after:w-[34vw] after:h-1 after:bg-[#DEB82D] after:mt-2 after:mx-auto">
        {title}
      </h3>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex flex-col items-center text-black p-6 rounded-lg shadow-lg bg-white"
          >
            <Image
              src={member.image}
              alt={member.name}
              width={150}
              height={150}
              className="w-32 h-32 rounded-full shadow-lg ring-4 ring-[#0D3F53]"
            />
            <h4 className="mt-4 text-xl font-semibold text-black">
              {member.name}
            </h4>
            <p className="text-black">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
