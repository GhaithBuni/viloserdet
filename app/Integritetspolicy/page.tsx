import React from 'react';

const Page = () => {
  return (
    <div className="bg-white text-gray-800">
      <div className="px-4 py-10 md:px-8 lg:px-16 lg:py-20 max-w-screen-xl mx-auto space-y-8 mt-20">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0D3F53]">Integritetspolicy</h2>

        <section className="space-y-4 text-base md:text-lg">
          <p>
            VILÖSERDET samlar in och behandlar personuppgifter för att kunna leverera våra tjänster på ett säkert och korrekt sätt.
          </p>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-[#0D3F53]">1. Personuppgiftsansvarig</h3>
            <p>
              <strong>VILÖSERDET</strong><br />
              Org.nr: 880531-7958<br />
              0722677774<br />
              info@viloserdet.se
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-[#0D3F53]">2. Vilka uppgifter vi samlar in</h3>
            <ul className="list-disc pl-5">
              <li>Namn</li>
              <li>Personnummer</li>
              <li>Telefonnummer</li>
              <li>E-postadress</li>
              <li>Adresser för uppdrag</li>
              <li>Faktureringsuppgifter</li>
              <li>Kommunikationshistorik</li>
            </ul>
            <p>Uppgifter samlas in via kontaktformulär, e-post, telefon och avtalsformulär.</p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-[#0D3F53]">3. Varför vi samlar in personuppgifter</h3>
            <ul className="list-disc pl-5">
              <li>Hantera bokningar</li>
              <li>Genomföra uppdrag</li>
              <li>Skicka offerter och fakturor</li>
              <li>Identifiera dig som kund</li>
              <li>Uppfylla lagkrav (t.ex. RUT-avdrag, bokföringslagen)</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-[#0D3F53]">4. Personnummer</h3>
            <p>
              Behandlas endast när det är nödvändigt, t.ex. för RUT-avdrag och fakturering. All behandling sker med hög säkerhet och begränsad åtkomst.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-[#0D3F53]">5. Rättslig grund</h3>
            <ul className="list-disc pl-5">
              <li>Fullfölja avtal</li>
              <li>Följa rättsliga skyldigheter</li>
              <li>Efter samtycke där det krävs</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-[#0D3F53]">6. Lagringstid</h3>
            <ul className="list-disc pl-5">
              <li>RUT: minst 7 år</li>
              <li>Fakturering: enligt bokföringslagen</li>
              <li>Övrigt: max 12 månader</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-[#0D3F53]">7. Delning av uppgifter</h3>
            <ul className="list-disc pl-5">
              <li>Skatteverket</li>
              <li>Bokföringsbyrå</li>
              <li>IT-leverantörer</li>
              <li>Aldrig för marknadsföring eller försäljning</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-[#0D3F53]">8. Dina rättigheter</h3>
            <ul className="list-disc pl-5">
              <li>Begära tillgång, rättelse eller radering</li>
              <li>Invända mot eller begränsa behandling</li>
              <li>Återkalla samtycke</li>
              <li>Lämna klagomål till Integritetsskyddsmyndigheten</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-[#0D3F53]">9. Säkerhet</h3>
            <ul className="list-disc pl-5">
              <li>Kryptering</li>
              <li>Begränsad åtkomst</li>
              <li>Löpande systemgranskning</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-[#0D3F53]">10. Cookies</h3>
            <p>
              Vi använder cookies för statistik och funktion. Du kan själv stänga av cookies i din webbläsare.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-[#0D3F53]">11. Ändringar i policyn</h3>
            <p>
              Uppdateringar publiceras på hemsidan. Datum för senaste ändring anges här: <strong>1 april 2025</strong>.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
