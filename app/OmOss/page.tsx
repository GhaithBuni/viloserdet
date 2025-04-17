"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const teamMembers = [
  { name: "Abdallah ", role: "VD & Grundare", img: "/team.jpg" },
  { name: "Maria ", role: "Kundtjänst", img: "/maria.jpeg" },
  { name: "Julia", role: "Logistikchef", img: "/julia.jpeg" },
];

const page = () => {
  return (
    <div className="bg-[#F5F5F5] text-black min-h-screen py-24">
      {/* Header Section */}
      <div className="relative bg-white px-6 md:px-12 pt-24 md:pt-32 pb-32 h-[55vh] flex items-center">
        <h1 className="container mx-auto px-6 md:px-12 text-4xl md:text-6xl font-bold text-[#0D3F53] text-center relative after:block after:w-full after:h-1 after:bg-[#DEB82D] after:mt-2">
          Lär känna oss
        </h1>
      </div>

      {/* Main Section (Two Column Layout) */}
      <div className="container mx-auto px-6 md:px-12 mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Content Section */}
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold text-[#0D3F53]">Om oss</h2>
          <p className="mt-4 text-lg text-gray-700">
          Vi på VLÖSERDET är dedikerade till att leverera högkvalitativa flytt- och städtjänster för både
privatpersoner och företag.
Med vår erfarenhet, engagemang och passion för service har vi byggt ett starkt rykte som en pålitlig
partner för en smidig flytt och skinande rena hem. Vi vet att både flytt och städning kan vara
stressande, och vi är här för att göra processen så enkel och bekymmersfri som möjligt.
          </p>

          <h2 className="text-3xl font-bold text-[#0D3F53] mt-8">Våra Tjänster</h2>
<p className="mt-4 text-lg text-gray-700">
  Hos oss får du trygghet, kvalitet och enkelhet i varje tjänst. Vi strävar efter att göra varje upplevelse minnesvärd och skräddarsydd efter dina behov.
</p>

<div className="mt-6 text-gray-700">
  <h3 className="text-xl font-semibold">Vi erbjuder ett brett utbud av flytt- och städtjänster för att passa dina behov:</h3>
  <ul className="list-disc list-inside mt-4 space-y-2">
    <li><strong>Flytthjälp</strong> – Oavsett om du flyttar lokalt eller långväga, ser vi till att din flytt går smidigt och effektivt. Vi hanterar allt från packning och transport till uppackning och möblering.</li>
    <li><strong>Flyttstädning</strong> – Vi tar hand om hela flyttstädningen så att du slipper stressen och kan fokusera på din nya bostad eller lokal.</li>
    <li><strong>Hemstädning</strong> – Regelbunden eller enstaka städtjänster som håller ditt hem skinande rent.</li>
    <li><strong>Visningsstädning</strong> – Professionell städning inför bostadsvisningar för att skapa det bästa första intrycket.</li>
    <li><strong>Kontorsflytt och städ</strong> – Vi hjälper företag med en smidig kontorsflytt och ser till att arbetsplatsen är ren och trivsam.</li>
  </ul>
</div>

<p className="mt-6 text-lg text-gray-700">
  Oavsett vilken tjänst du väljer kan du lita på att vårt team av erfarna flytt- och städproffs utför arbetet noggrant och effektivt.
</p>


          <h2 className="text-3xl font-bold text-[#0D3F53] mt-8">Historien om Flytt, Renhet och Trygghet! </h2>
          <p className="mt-4 text-lg text-gray-700">
          Allt började med en enkel observation. Som besiktningsansvarig hos ett fastighetsbolag lade vår
          grundare, Abdallah, märke till den frustrerande cykeln som många hyresgäster hamnade i.
          </p>
          <p className="mt-2">Vi insåg hur fysiskt och mentalt påfrestande en flytt är – det handlar inte bara om att transportera
saker, utan också om att organisera, planera, packa och se till att allt går rätt till. Samtidigt är flytten
en tidspressad process där mycket måste klaffa, och många känner sig överväldigade av ansvaret. Att
kombinera flytt med städning gör det ännu mer krävande, och vi såg hur många lägger ner tid och
energi på att göra sitt bästa – bara för att ändå bli debiterade av hyresvärden för omstädning. Detta
skapade onödig stress och ekonomiska kostnader.</p>
<p className="mt-2">Denna insikt inspirerade till skapandet av VLÖSERDET. Vi ville vara lösningen på detta problem och
göra flytten till en smidig och bekymmersfri upplevelse.</p>
<p className="mt-2">För att säkerställa kvaliteten införde vi en <strong>30 dagars städgaranti </strong> och <strong>nöjdgaranti för flytten</strong> , vilket ger
våra kunder trygghet i hela processen. Med våra tjänster kan du fokusera på ditt nya kapitel i livet
medan vi tar hand om det praktiska</p>

<p className="mt-2">Vår grundtanke är att erbjuda en service som inte bara handlar om att flytta och städa, utan om att
skapa en positiv upplevelse för våra kunder. VLÖSERDET är resultatet av en personlig erfarenhet som
utvecklades till en passion för att göra skillnad. Vi är här för att bryta cykeln av onödig stress och
osäkerhet.</p>

<h2 className="text-3xl font-bold text-[#0D3F53] mt-8">Framtidsvision - Flytt och Renhet med Innovation och Hållbarhet! </h2>
          <p className="mt-4 text-lg text-gray-700">
          På VLÖSERDET ser vi en framtid där både flytt och renhet inte bara är en tjänst, utan en livsstil. Vår
vision sträcker sig bortom dagens flytt- och städtjänster och omfamnar en hållbar, innovativ framtid.
          </p>
          <p className="mt-2">Välkommen till VLÖSERDET – där din flytt och renhet blir en del av vår historia!</p>
        </div>

        {/* Right Highlighted Box Section */}
        <div className="bg-[#FEF4E8] p-8 rounded-lg shadow-md  ">
        <h3 className="text-2xl font-bold text-[#0D3F53] flex items-center">
        Våra Grundprinciper - Kundnöjdhet, Miljömedvetenhet och Engagerad Personal!
          </h3>
          <p className="mt-2 text-lg text-gray-700">
          På VLÖSERDET står vi för tre viktiga värden:
          </p>
          <h3 className="text-2xl font-bold text-[#0D3F53] flex items-center mt-10 md:mt-20">
            ✅Kundnöjdhet i Fokus
          </h3>
          <p className="mt-2 text-lg text-gray-700">
          Ditt leende är vår framgång. Vi strävar efter att överträffa dina förväntningar och göra varje
          flytt- och städupplevelse så smidig som möjligt.
          </p>

          <h3 className="text-2xl font-bold text-[#0D3F53] mt-6 flex items-center md:mt-20">
            ✅Miljövänliga Val
          </h3>
          <p className="mt-2 text-lg text-gray-700">
          Vi bryr oss om vår planet. Genom att använda miljövänliga material och metoder vill vi inte
          bara lämna ditt hem rent utan också bidra till en hållbar framtid.          </p>

          <h3 className="text-2xl font-bold text-[#0D3F53] mt-6 flex items-center md:mt-20">
            ✅Omsorg om Personal

          </h3>
          <p className="mt-2 text-lg text-gray-700">
          Vår personal är vår styrka. Genom att skapa en positiv och stöttande arbetsmiljö ser vi till att
vårt team trivs och kan leverera bästa möjliga service till dig.
          </p>
        </div>
      </div>

      
      {/* Våra Tjänster Section */}
      <section id="services" className="container mx-auto px-6 py-24">
      <h2 className="text-4xl md:text-6xl font-bold text-black mb-16 text-left relative after:block after:w-full  after:h-1 after:bg-[#DEB82D] after:mt-2">
    </h2>



  

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      { 
        title: "Flytthjälp", 
        description: "Vi hjälper dig med att flytta smidigt och stressfritt. Vårt team ser till att allt går enligt plan!", 
        image: "/moving.svg", 
        link: "/flytthjalp" 
      },
      { 
        title: "Flyttstädning", 
        description: "Noggrann flyttstädning som säkerställer att ditt gamla hem är skinande rent efter flytten.", 
        image: "/cleaning.svg", 
        link: "/flyttstad" 
      },
     /* { 
        title: "Hemstädning", 
        description: "Ge ditt hem nytt liv med en grundlig storstädning. Vi tar hand om allt från topp till tå.", 
        image: "/storstadning.svg", 
        link: "/hemstadning" 
      },*/
      { 
        title: "Visningstädning", 
        description: "Förbered ditt hem för visning med vår professionella visningstädning. Perfekt för att imponera. ", 
        image: "/visningstadning.svg", 
        link: "/visningstadning" 
      }
    ].map((service, index) => (
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
        <p className="text-lg mb-6  text-[#0D3F53] font-bold ">{service.description}</p>

        {/* Button */}
        <a 
  href={service.link} 
  className="inline-block bg-[#DEB82D] text-[#0D3F53] font-semibold text-lg py-2 px-6 rounded-lg shadow-md hover:bg-[#0D3F53] hover:text-[#DEB82D] transition"
>
  Boka
</a>

      </div>
    ))}
  </div>
</section>

       {/* Section Varför vi? */}
      
       <div className="w-[80%] bg-[#0D3D53] text-white py-20 flex justify-center items-center mx-auto shadow-lg">
       <div className="container mx-auto px-6 text-center">
              
              
              <h1 className="text-4xl md:text-6xl font-bold  text-center ">Varför vi?</h1>
              <p className="mt-3 text-lg text-gray-200  text-center font-bold">
              Vi erbjuder professionella tjänster med hög kvalitet, miljövänliga lösningar och kundgaranti.
              </p>
      
              {/* Icons Section */}
<div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-12 justify-center items-center">
  
  {/* Försäkring */}
  <a href="/Forsakring" className="flex flex-col items-center">
    <Image src="/insurance.svg" alt="Försäkring" width={100} height={100} />
    <p className="mt-4 text-lg font-semibold">Försäkring</p>
  </a>

  {/* Miljövänligt */}
  <a href="/miljovanligt" className="flex flex-col items-center">
    <Image src="/recycle.svg" alt="Miljövänligt" width={100} height={100} />
    <p className="mt-4 text-lg font-semibold">Miljövänligt</p>
  </a>

  {/* Prisgaranti */}
  <a href="/Prisgaranti" className="flex flex-col items-center">
    <Image src="/wallet.svg" alt="Prisgaranti" width={100} height={100} />
    <p className="mt-4 text-lg font-semibold">Prisgaranti</p>
  </a>

  {/* Nöjdgaranti */}
  <a href="/nojdgaranti" className="flex flex-col items-center">
    <Image src="/guarantee.svg" alt="Nöjdgaranti" width={100} height={100} />
    <p className="mt-4 text-lg font-semibold">Nöjdgaranti</p>
  </a>

</div>
            </div>
          </div>

      {/* Team Section */}
      <div className="container mx-auto px-6 md:px-12 mt-16 text-center">
      <h3 className="text-4xl md:text-6xl font-bold text-center text-[#0D3F53] relative after:block after:w-[34vw] after:h-1 after:bg-[#DEB82D] after:mt-2  after:mx-auto ">
  Möt vårt fantastiska team
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
                src={member.img}
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

    
    </div>
  );
};

export default page;
