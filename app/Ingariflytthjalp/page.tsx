import React from "react";

const Page = () => {
  return (
    <div>
      <div className="bg-white text-gray-800">
        <div className="px-4 py-10 md:px-8 lg:px-16 lg:py-20 max-w-screen-xl mx-auto space-y-10 mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D3F53]">
            Flytthjälp
          </h2>

          <p className="text-base md:text-lg">
            Välkommen till <strong>Vilöserdet Flytthjälp</strong>. Vi är ett
            erfaret flytt- och städföretag som erbjuder omfattande hjälp med
            säkerhet, miljöfokus och trygghet. Du får prisgaranti, nöjdgaranti
            och möjlighet att flytta först och betala sen.
          </p>

          <div className="bg-[#FEF4E8] p-4 md:p-6 rounded-md shadow-md space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
              Ingår i vårt fasta pris
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-base md:text-lg">
              <li>Pålastning och avlastning av alla ägodelar</li>
              <li>Säker transport upp till hela Sverige </li>
              <li>Förrådsflytt utan extra kostnad</li>
              <li>Inga extra bilavgifter</li>
              <li>Lån av flyttlådor och kylväska</li>
              <li>Skydd med plast och filtar för känsliga föremål</li>
              <li>50% RUT-avdrag (vi sköter ansökan)</li>
              <li>Försäkring för både ägodelar och personal</li>
              <li>Prisgaranti med 5% extra rabatt vid billigare alternativ</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
              Extra tjänster
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-base md:text-lg">
              <li>Packning och uppackning för ett fast pris </li>
              <li>Montering och demontering av möbler</li>
              <li>Bortforsling av gamla möbler</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
              Inför flytten
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-base md:text-lg">
              <li>Packa allt själv om du inte bokat packningstjänst</li>
              <li>Skydda ömtåliga föremål och textilier</li>
              <li>Rensa, sortera och planera packningen i god tid</li>
              <li>Maxvikt per flyttlåda: 20 kg</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg md:text-xl font-medium text-[#0D3F53]">
              Under packningen
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-base md:text-lg">
              <li>Behåll viktiga föremål som mediciner och nycklar själv</li>
              <li>Kyl och frys måste vara tömda</li>
              <li>Packa inte öppnade vätskeförpackningar</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg md:text-xl font-medium text-[#0D3F53]">
              Specifika riktlinjer
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-base md:text-lg">
              <li>Kök: Packa tallrikar stående och glas i papper</li>
              <li>Skafferi: Försegla alla förpackningar</li>
              <li>Byråer: Töm lådor, montera ner stora möbler</li>
              <li>Böcker: Max halv kartong, fyll resten med lättare saker</li>
              <li>
                Tavlor och växter: Packa i bubbelplast/wellpapp. Vi ersätter
                inte växter
              </li>
              <li>Vitvaror: Koppla ur och emballera</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
              Av- och ombokning
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-base md:text-lg">
              <li>Kostnadsfri ändring senast 3 dagar före flytt</li>
              <li>50% avgift vid ändring 1–2 dagar innan</li>
              <li>100% avgift vid ändring samma dag</li>
              <li>
                Extra fakturering kan ske vid orimlig bohagsmängd eller
                felaktiga uppgifter
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
              Betalning
            </h3>
            <p className="text-base md:text-lg">
              Faktura skickas efter flytten. Priset inkluderar moms och
              RUT-avdrag. Betalning ska ske inom 10 dagar. Vi hanterar
              RUT-ansökan till Skatteverket.
            </p>
          </div>
        </div>

        <div className="flex justify-end p-4 container mx-auto">
          <a href="/flytthjalp" className="w-full md:w-[400px]">
            <button className="w-full text-lg font-semibold py-4 rounded-lg shadow-md flex items-center justify-center transition bg-[#0D3F53] text-white hover:bg-[#0A2E3D]">
              Boka flytthjälp
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page;
