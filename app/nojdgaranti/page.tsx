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
  

const page = () => {
  return (
    <div className='mt-20'>
        <div className="bg-white text-gray-800 px-4 py-10 md:px-8 lg:px-16 lg:py-20 space-y-12 max-w-screen-xl mx-auto">
  <h2 className="text-3xl md:text-4xl font-bold text-[#0D3F53]">Nöjdhetsgaranti</h2>

  <section className="space-y-4 text-base md:text-lg">
    <p>
      Din tillfredsställelse är vår prioritet. Vi erbjuder en omfattande nöjdhetsgaranti för att du ska känna dig trygg med vår service – från första kontakt till sista städtillfälle.
    </p>
  </section>

  <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
    <div className="space-y-4">
      <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">Kundanpassad Service</h3>
      <p className="text-base md:text-lg">
        Vi anpassar våra tjänster efter dina behov. Ditt hem och dina önskemål styr hur vi jobbar. Vårt mål är att överträffa dina förväntningar – varje gång.
      </p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">Kontinuerlig Kommunikation</h3>
      <p className="text-base md:text-lg">
        Vi håller dig uppdaterad hela vägen – innan, under och efter uppdraget. Du får tydlig information och snabb återkoppling från vårt team.
      </p>
    </div>
  </section>

  <section className="space-y-4 text-base md:text-lg">
    <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">Feedback och Förbättring</h3>
    <p>
      Vi tar emot all feedback – positiv som negativ – för att förbättra vårt arbete. Varje synpunkt används för att höja kvaliteten i våra tjänster.
    </p>
  </section>

  <section className="space-y-4 text-base md:text-lg">
    <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">Om något inte blir bra</h3>
    <ul className="list-disc pl-5 space-y-2">
      <li>Inflyttande hyresgäst har tre dagar att lämna synpunkter</li>
      <li>Vi åtgärdar brister utan extra kostnad</li>
      <li>Garantin gäller så länge ingen flyttat in, oavsett datum</li>
      <li>Vi lämnar kontaktuppgifter till nästa hyresgäst</li>
      <li>Vi kan närvara vid slutbesiktning om du vill</li>
    </ul>
  </section>

  <section className="space-y-4 text-base md:text-lg">
    <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">Ditt Förtroende, Vår Prioritet</h3>
    <p>
      Vi jobbar för att förtjäna ditt förtroende genom ärligt, tydligt och noggrant arbete. Vår nöjdhetsgaranti är ett löfte – vi ger oss inte förrän du är nöjd.
    </p>
  </section>

  <section className="space-y-6">
    <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">Röster från Våra Kunder</h3>
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
                  'Bästa städfirman jag anlitat. Mycket nöjd med både bemötande samt arbete. Bra pris, snabb återkoppling, noggrann städning utöver det vanliga. Tusen tack och jag återkommer 👍',
                name: ' Johanny',
              },
              {
                content:
                  'Rekommenderar starkt ’Vi löser det’! Flyttstädningen gjordes så smärtfritt och städade så rent och fint. Tack för allt ’Vi löser det’!',
                name: 'Tina',
              },
              {
                content:
                  'Super bra gjort, lägenheten blev godkänd vid slut besiktningen.. Skulle rekommendera för flyttstädningen..',
                name: 'Taher',
              },
              {
                content:
                  'Otroligt proffsiga och serviceinriktade! Tog sig med superkort varsel an flyttstäd av min lägenhet, med ett skinande rent resultat. Mina allra bästa rekommendationer!',
                name: 'Ansipansan',
              },
              {
                content:
                  'Framförallt ett bra jobb men också ärliga, flexibla och var lätta att prata med. Kommer använda deras tjänst igen nästa gång det ska flyttas!'
              },
              
        
          ].map((review, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`p-8 rounded-xl shadow-lg transition-all duration-300 ${
                    index % 2 === 0 ? 'bg-[#0D3F53] text-white' : 'bg-[#0D3F53] text-white'
                  }`}
                >
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Image
                      src="/quoteWhite.svg" // Replace with your actual quote icon path
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

  
</div>


      
    </div>
  )
}

export default page
