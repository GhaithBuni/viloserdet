"use client";

import { Badge } from "../components/Badge";

const page = () => {
  return (
    <div className="mt-20">
      <div className="bg-white text-gray-800 px-4 py-10 md:px-8 lg:px-16 lg:py-20 space-y-12 max-w-screen-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0D3F53]">
          Nöjdhetsgaranti
        </h2>

        <section className="space-y-4 text-base md:text-lg">
          <p>
            Din tillfredsställelse är vår prioritet. Vi erbjuder en omfattande
            nöjdhetsgaranti för att du ska känna dig trygg med vår service –
            från första kontakt till sista städtillfälle.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
              Kundanpassad Service
            </h3>
            <p className="text-base md:text-lg">
              Vi anpassar våra tjänster efter dina behov. Ditt hem och dina
              önskemål styr hur vi jobbar. Vårt mål är att överträffa dina
              förväntningar – varje gång.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
              Kontinuerlig Kommunikation
            </h3>
            <p className="text-base md:text-lg">
              Vi håller dig uppdaterad hela vägen – innan, under och efter
              uppdraget. Du får tydlig information och snabb återkoppling från
              vårt team.
            </p>
          </div>
        </section>

        <section className="space-y-4 text-base md:text-lg">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
            Feedback och Förbättring
          </h3>
          <p>
            Vi tar emot all feedback – positiv som negativ – för att förbättra
            vårt arbete. Varje synpunkt används för att höja kvaliteten i våra
            tjänster.
          </p>
        </section>

        <section className="space-y-4 text-base md:text-lg">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
            Om något inte blir bra
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Inflyttande hyresgäst har tre dagar att lämna synpunkter</li>
            <li>Vi åtgärdar brister utan extra kostnad</li>
            <li>Garantin gäller så länge ingen flyttat in, oavsett datum</li>
            <li>Vi lämnar kontaktuppgifter till nästa hyresgäst</li>
            <li>Vi kan närvara vid slutbesiktning om du vill</li>
          </ul>
        </section>

        <section className="space-y-4 text-base md:text-lg">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
            Ditt Förtroende, Vår Prioritet
          </h3>
          <p>
            Vi jobbar för att förtjäna ditt förtroende genom ärligt, tydligt och
            noggrant arbete. Vår nöjdhetsgaranti är ett löfte – vi ger oss inte
            förrän du är nöjd.
          </p>
        </section>

        <section className="space-y-6">
          <Badge />
        </section>
      </div>
    </div>
  );
};

export default page;
