// "use client";

// import Image from "next/image";
// import { PortableText } from "@portabletext/react";
// import { motion } from "framer-motion";

// export default function OmOssContent({ content }: { content: any }) {
//   return (
//     <div className="bg-[#F5F5F5] text-black min-h-screen py-24">
//       {/* Hero Section */}
//       <div className="relative bg-white px-6 md:px-12 pt-24 md:pt-32 pb-32 h-[55vh] flex items-center">
//         <h1 className="container mx-auto px-6 md:px-12 text-4xl md:text-6xl font-bold text-[#0D3F53] text-center relative after:block after:w-full after:h-1 after:bg-[#DEB82D] after:mt-2">
//           {content.heroTitle}
//         </h1>
//       </div>

//       {/* Main Text */}
//       <div className="container mx-auto px-6 md:px-12 mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
//         <div className="md:col-span-2">
//           <PortableText value={content.mainText} />
//         </div>
//         <div className="bg-[#FEF4E8] p-8 rounded-lg shadow-md">
//           <h3 className="text-2xl font-bold text-[#0D3F53]">
//             Våra Grundprinciper
//           </h3>
//           <p className="mt-2 text-lg text-gray-700">
//             På VLÖSERDET står vi för tre viktiga värden:
//           </p>
//           {content.principles.map((item: any, index: number) => (
//             <div key={index} className="mt-10">
//               <h3 className="text-2xl font-bold text-[#0D3F53]">
//                 {item.title}
//               </h3>
//               <p className="mt-2 text-lg text-gray-700">{item.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Services Section */}
//       <section id="services" className="container mx-auto px-6 py-24">
//         <h2 className="text-4xl md:text-6xl font-bold text-black mb-16 text-left relative after:block after:w-full after:h-1 after:bg-[#DEB82D] after:mt-2">
//           Våra Tjänster
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {content.services.map((service: any, index: number) => (
//             <div
//               key={index}
//               className="bg-[#FFFF] rounded-2xl overflow-hidden shadow-lg flex flex-col items-center p-6 md:p-8 text-center"
//             >
//               <div className="w-full h-48 mb-6 overflow-hidden rounded-lg">
//                 <img
//                   src={service.image}
//                   alt={service.title}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#0D3F53]">
//                 {service.title}
//               </h3>
//               <p className="text-lg mb-6 text-[#0D3F53] font-bold">
//                 {service.description}
//               </p>
//               <a
//                 href={service.link}
//                 className="inline-block bg-[#DEB82D] text-[#0D3F53] font-semibold text-lg py-2 px-6 rounded-lg shadow-md hover:bg-[#0D3F53] hover:text-[#DEB82D] transition"
//               >
//                 Boka
//               </a>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Why Us Section */}
//       <div className="w-[80%] bg-[#0D3D53] text-white py-20 flex justify-center items-center mx-auto shadow-lg">
//         <div className="container mx-auto px-6 text-center">
//           <h1 className="text-4xl md:text-6xl font-bold">Varför vi?</h1>
//           <p className="mt-3 text-lg text-gray-200 font-bold">
//             Vi erbjuder professionella tjänster med hög kvalitet, miljövänliga
//             lösningar och kundgaranti.
//           </p>

//           <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-12 justify-center items-center">
//             {content.principles.map((p: any, i: number) => (
//               <div key={i} className="flex flex-col items-center">
//                 <Image
//                   src={p.icon || "/guarantee.svg"}
//                   alt={p.title}
//                   width={100}
//                   height={100}
//                 />
//                 <p className="mt-4 text-lg font-semibold">{p.title}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Team Section */}
//       <div className="container mx-auto px-6 md:px-12 mt-16 text-center">
//         <h3 className="text-4xl md:text-6xl font-bold text-center text-[#0D3F53] relative after:block after:w-[34vw] after:h-1 after:bg-[#DEB82D] after:mt-2 after:mx-auto">
//           Möt vårt fantastiska team
//         </h3>

//         <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
//           {content.team.map((member: any, index: number) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               className="flex flex-col items-center text-black p-6 rounded-lg shadow-lg bg-white"
//             >
//               <Image
//                 src={member.img}
//                 alt={member.name}
//                 width={150}
//                 height={150}
//                 className="w-32 h-32 rounded-full shadow-lg ring-4 ring-[#0D3F53]"
//               />
//               <h4 className="mt-4 text-xl font-semibold">{member.name}</h4>
//               <p>{member.role}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
