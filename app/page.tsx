"use client";
import {  MoveLeft,MoveRight} from 'lucide-react';
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from 'swiper/modules';



const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="flex justify-end mt-6 space-x-4">
      <button
        onClick={() => swiper.slidePrev()}
        className="p-2 rounded-full bg-[#DEB82D] text-white hover:bg-[#c7a227] transition-all"
      >
        <MoveLeft size={24} />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="p-2 rounded-full bg-[#DEB82D] text-white hover:bg-[#c7a227] transition-all"
      >
        <MoveRight size={24} />
      </button>
    </div>
  );
};



const tips = [
  {
    title: "Tips för Att Hålla Köket Rent",
    text: "Skötsel av Din Ugn Efter Flyttstädning. Att regelbundet underhålla och rengöra din ugn är inte bara viktigt för att hålla den i gott skick, utan även för din hälsa. Här är våra bästa tips och råd för att hjälpa dig med detta. Varför är det viktigt att hålla ugnen ren? Hälsa: En smutsig ugn kan avge skadliga ångor när matrester och fett bränns upp. Detta kan påverka luftkvaliteten i ditt hem och din allmänna hälsa.Matkvalitet: Gamla matrester kan påverka smaken på dina nya maträtter negativt. En ren ugn säkerställer att dina rätter smakar som de ska.Livslängd: Regelbundet underhåll kan förlänga ugnens livslängd genom att förebygga slitage och tekniska problem"},
  {
    title: "Steg för att hålla ugnen ren",
    text: `
    1. Rengör regelbundet  
    - Efter varje användning: Torka av spill när ugnen svalnat med en fuktig trasa eller svamp  
    - Veckovis: Ta ut galler och plåtar, rengör med varmt vatten och diskmedel  
    - Använd ugnsspray för insidan, följ instruktionerna på flaskan  
    
    2. Djuprengöring en gång i månaden  
    - Bikarbonat och ättika: Blanda bikarbonat med vatten till en pasta, smeta på ugnens insida  
    - Låt stå över natten  
    - Spreja ättika på pastan och torka rent med fuktig trasa  
    - Har ugnen självrengöringsfunktion, följ tillverkarens instruktioner  
    
    3. Förebyggande åtgärder  
    - Använd bakplåtspapper eller silikonmatta för att fånga spill och fett  
    - Täck maten med lock eller folie för att undvika stänk vid tillagning  
    `
    },
  {
    title: "Samarbeta med Flyttfirman",
    text: "Ge tydlig information: Berätta för flyttfirman om eventuella särskilda behov, som tunga möbler, känsliga föremål eller parkeringsrestriktioner. Var tillgänglig på flyttdagen: Se till att någon är på plats för att svara på frågor och ge vägledning under flytten. Kontrollera efter flytten: Gå igenom alla lådor och möbler för att säkerställa att allt har kommit med och att inget har skadats under transporten."
  }
];

export default function Home() {
  return (
<main className="bg-[#F5F5F5] min-h-screen">
      
      {/* Hero Section */}
      <section className="relative bg-[#0D3F53] px-6 md:px-12 pt-24 md:pt-32 pb-32 h-[73vh] flex items-center">

        <div className="container mx-auto flex flex-col md:flex-row items-center space-y-12 md:space-y-0 md:space-x-12">
          
          {/* Text Content */}
          <div className="text-white text-center  relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Vi tar hand om flytt och städning tryggt och professionellt
            </h1>
            <p className="mt-4 text-base md:text-lg font-bold">
            Vi på VLÖSERDET är dedikerade till att leverera högkvalitativa flytt- och städtjänster för både
            privatpersoner och företag
            </p>
            <a href="#services" className="mt-6 inline-block bg-[#DEB82D] text-black font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-[#FFFFFF] transition ">
              Våra tjänster →
            </a>
          </div>

         {/* Right Side - Image (Hidden on Mobile, Above WaveLine on Desktop) */}

         {/*<div className="relative w-full max-w-[1039px] md:flex md:justify-center hidden md:block z-10">
            <Image 
              src="/mainImage.svg" 
              alt="Professional Cleaning" 
              width={1039} 
              height={612} 
              className="rounded-lg shadow-lg w-full max-w-[90%] md:max-w-[1039px]"
            />
          </div> */}

        </div>
      

        {/* Wave Line - ALWAYS Centered */}
        <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 w-full">
          <Image 
            src="/WaveLine.svg" 
            alt="Wave Line Decoration" 
            layout="responsive"
            width={1440} 
            height={200} 
            className="w-full opacity-80"
          />
        </div>
      </section>

      {/* Våra Tjänster Section */}
      <section id="services" className="container mx-auto px-6 py-24">
      <h2 className="text-4xl md:text-6xl font-bold text-black mb-16 text-left relative after:block after:w-full  after:h-1 after:bg-[#DEB82D] after:mt-2">
      VÅRA TJÄNSTER 
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
      /*{ 
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


          
          {/* Tips  */}
          
          <div className="container mx-auto px-6 py-16">
    
      <h2 className="text-4xl md:text-6xl font-bold text-black mb-12 text-left relative after:block after:w-[13vh]  after:h-1 after:bg-[#DEB82D] after:mt-2">Tips</h2>
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tips.map((tip, index) => (
          <div
            key={index}
            className=" p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold mb-3">{tip.title}</h3>
            <p className="text-lg">{tip.text}</p>
          </div>
        ))}
      </div>
    </div>
         


  {/* Vad sa de om oss (Google Reviews) */}
  <section className="container mx-auto px-6 py-24">
      <h2 className="text-4xl md:text-6xl font-bold text-black mb-12 text-left after:block after:w-full after:h-1 after:bg-[#DEB82D] after:mt-2">
        Vad sa de om oss
      </h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {[
          {
            content:
              'Otroligt bra service. Har bokat både flytthjälp och flyttstädning. Är supernöjd och rekommenderar varmt att man bokar med vilöserdet!',
            name: 'Naz Omar',
          },
          {
            content:
              'Jättetrevliga ”flyttkarlar”! Vänliga och väldigt snabba, men oxå noggranna! De slår in alla viktiga, ömtåliga saker och skyddar dem under flytt. Väldigt bra pris oxå!!👍👍 / Nöjd kund Camilla i Uppsala! …',
            name: 'Camilla Karlberg',
          },
          {
            content:
              'Väldigt effektiv ch bra service. Flyttkillarna var jättetrevliga och snabba. De säkerställde att alla möblerna kom hem utan skador. Rekommenderas!',
            name: 'Jacaranda Perez',
          },
          {
            content:
              'Jättetrevliga, bra pris och det blev inga anmärkningar. Rekommenderas starkt',
            name: 'isak islamovic',
          },
          {
            content:
              'Imponerande städning. Det var några få besiktningsanmärkningar som behövde åtgärdas och av dessa så var det en som missades vid återstädningen också. Men det kan vara pga bristfällig kommunikation.Generellt sett väldigt gärna prisvärt och jag är nöjd. Firman har varit väldigt serviceinriktade och ger en gedigen information om vad som gäller.',
            name: 'Tom Järn',
          },
          {
            content:
              'Super! Första städningen vart inte godkänd men dom kom omedelbart och löste det. Super bra service och riktigt bra pris. Kommer definitivt anlita dom igen i framtiden 🙂 …',
            name: 'Alfred Englund',
          },
          {
            content:
              'Framförallt ett bra jobb men också ärliga, flexibla och var lätta att prata med. Kommer använda deras tjänst igen nästa gång det ska flyttas!',
            name: 'Tomas Zerufael',
          },
        ].map((review, index) => (
          <SwiperSlide key={index}>
            <div
              className={`p-8 rounded-xl shadow-lg transition-all duration-300 ${
                index % 2 === 0 ? 'bg-white text-black' : 'bg-white text-black'
              }`}
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Image
                  src="/quoteIcon.svg" // Replace with your actual quote icon path
                  alt="Quote Icon"
                  width={40}
                  height={40}
                />
              </div>

              {/* Review Content */}
              <p className="text-lg leading-relaxed">"{review.content}"</p>

              {/* Reviewer Info */}
              <div className="flex items-center mt-4">
                <div className="ml-4">
                  <h3 className="text-lg font-bold">{review.name}</h3>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Add Navigation Buttons */}
        <SwiperNavButtons />
      </Swiper>
    </section>

    </main>
  );
}
