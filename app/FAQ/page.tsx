import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const page = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="relative bg-white px-6 md:px-12 pt-24 md:pt-32 pb-32 h-[55vh] flex items-center">
        <h1 className="container mx-auto px-6 md:px-12 text-4xl md:text-6xl font-bold text-[#0D3F53] text-center relative after:block after:w-full after:h-1 after:bg-[#DEB82D] after:mt-2">
          Frågor och Svar
        </h1>
      </div>
      <div className="bg-[#F5F5F5] text-black min-h-screen py-20 ">
        <div className="px-4  md:px-8 lg:px-16 lg: space-y-12 max-w-screen-xl mx-auto ">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0D3F53]">
            {" "}
            Flytthjälp
          </h2>

          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                Vad ingår i er flytthjälp?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>
                  Allt från pålastning och avlastning till transport och
                  grundskydd för dina ägodelar – heltäckande service.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                {" "}
                Vad gör Vilöserdet unikt jämfört med andra flyttfirmor?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>
                  Vi erbjuder prisgaranti, nöjdgaranti, RUT-avdrag, miljöfokus
                  och möjlighet att flytta först och betala sen.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                {" "}
                Kan jag flytta med er till en annan stad i Sverige?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>
                  Ja, vi erbjuder säker transport i hela Sverige – inte bara
                  lokalt.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                {" "}
                Är er personal utbildad och försäkrad?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>
                  Ja, både personal och dina ägodelar är försäkrade under hela
                  uppdraget.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                {" "}
                Hur miljövänlig är er flyttjänst?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>
                  Vi använder moderna, bränslesnåla bilar och erbjuder
                  återvinning och bortforsling som tillval.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="px-4 md:px-8 lg:px-16 max-w-screen-xl mx-auto">
          <div className="h-1 bg-[#DEB82D]  w-full my-8 "></div>
        </div>

        <div className="px-4  md:px-8 lg:px-16 lg: space-y-12 max-w-screen-xl mx-auto ">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0D3F53]">
            {" "}
            📦Vad som ingår i priset
          </h2>

          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                Är pålastning och avlastning inkluderat?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>Ja, det ingår alltid i vårt fasta pris.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                {" "}
                Tar ni extra betalt för förrådsflytt?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>Nej, det är inkluderat i priset – ingen extra avgift.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                {" "}
                Tillkommer bilkostnader?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>
                  Nej, alla bilkostnader ingår. Vi använder egna moderna fordon.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                {" "}
                Ingår skyddsmaterial för känsliga föremål?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>
                  Ja, vi använder plast, filtar och annat skydd för att skydda
                  dina ägodelar.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                {" "}
                Kan jag låna flyttlådor av er?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>
                  Ja! Du kan låna flyttlådor och kylväska kostnadsfritt i
                  Uppsala. Vi levererar och hämtar dem – beställ minst 2 veckor
                  före flytt.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                {" "}
                Hur länge får jag behålla flyttlådorna?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>Upp till 2 veckor efter flytten.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                {" "}
                Ingår RUT-avdrag i ert pris?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>
                  Ja, vi drar av 50% direkt på fakturan och hanterar ansökan
                  till Skatteverket.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="px-4 md:px-8 lg:px-16 max-w-screen-xl mx-auto">
          <div className="h-1 bg-[#DEB82D]  w-full my-8 "></div>
        </div>

        <div className="px-4  md:px-8 lg:px-16 lg: space-y-12 max-w-screen-xl mx-auto ">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0D3F53]">
            {" "}
            🛠️Extra tjänster
          </h2>

          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                Kan ni hjälpa till med packning?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>
                  Ja, vi erbjuder både packning och uppackning till fast pris.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                {" "}
                Hjälper ni till med montering och demontering av möbler?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>Ja, det är en tillvalstjänst du kan boka vid behov.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                {" "}
                Kan ni ta hand om gamla möbler som ska slängas?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>
                  Absolut, vi erbjuder bortforsling. Priser anges inklusive RUT
                  och moms direkt på hemsidan.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="px-4 md:px-8 lg:px-16 max-w-screen-xl mx-auto">
          <div className="h-1 bg-[#DEB82D]  w-full my-8 "></div>
        </div>

        <div className="px-4  md:px-8 lg:px-16 lg: space-y-12 max-w-screen-xl mx-auto ">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0D3F53]">
            {" "}
            📅Inför flytten
          </h2>

          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                Vad måste jag göra innan flyttdagen?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>
                  Packa dina saker (om du inte bokat packhjälp), skydda
                  ömtåligt, och planera i god tid.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                {" "}
                Vad är maxvikt per flyttlåda?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>Max 20 kg per låda för att säkerställa säker hantering.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="px-4 md:px-8 lg:px-16 max-w-screen-xl mx-auto">
          <div className="h-1 bg-[#DEB82D]  w-full my-8 "></div>
        </div>
        <div className="px-4  md:px-8 lg:px-16 lg: space-y-12 max-w-screen-xl mx-auto ">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0D3F53]">
            {" "}
            📥Under packningen
          </h2>

          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                Vad ska jag inte packa ner?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>
                  Mediciner, nycklar, värdehandlingar – de bör du behålla själv.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                {" "}
                Får jag packa vätskor?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>
                  Nej, packa inte öppnade vätskeförpackningar – de riskerar att
                  läcka.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="px-4 md:px-8 lg:px-16 max-w-screen-xl mx-auto">
          <div className="h-1 bg-[#DEB82D]  w-full my-8 "></div>
        </div>
        <div className="px-4  md:px-8 lg:px-16 lg: space-y-12 max-w-screen-xl mx-auto ">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0D3F53]">
            📄Specifika packtips
          </h2>

          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                Hur packar jag köksartiklar säkrast?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>
                  Tallrikar ska stå upp i kartongen, och glas skyddas med papper
                  eller bubbelplast.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                Hur packar jag skafferivaror?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>Förslut och förpacka alla matvaror noggrant.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                Måste jag tömma byrålådor?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>Ja, töm alla lådor och demontera stora möbler om möjligt.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                Hur packar jag böcker?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>
                  Fyll bara halva kartongen med böcker – komplettera med lättare
                  föremål.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                Hur transporteras tavlor och växter?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>
                  Tavlor skyddar du med bubbelplast eller wellpapp. Vi ersätter
                  inte växter, då de är känsliga.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                Vad gäller för vitvaror?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>
                  Du ansvarar för att koppla ur, tömma och emballera dessa i
                  förväg.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="px-4 md:px-8 lg:px-16 max-w-screen-xl mx-auto">
          <div className="h-1 bg-[#DEB82D]  w-full my-8 "></div>
        </div>
        <div className="px-4  md:px-8 lg:px-16 lg: space-y-12 max-w-screen-xl mx-auto ">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0D3F53]">
            🔁Avbokning och ombokning
          </h2>

          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                Hur gör jag för att boka om min flytt?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>
                  Du kan boka om helt kostnadsfritt upp till 3 dagar före flytt.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                Vad kostar det att boka om nära inpå?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>1–2 dagar innan: 50% avgift. Samma dag: 100% avgift.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                Vad händer om jag angett fel uppgifter om bohaget?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>
                  Vid orimlig mängd eller felaktig information kan extra
                  fakturering förekomma.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="px-4 md:px-8 lg:px-16 max-w-screen-xl mx-auto">
          <div className="h-1 bg-[#DEB82D]  w-full my-8 "></div>
        </div>
        <div className="px-4  md:px-8 lg:px-16 lg: space-y-12 max-w-screen-xl mx-auto ">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0D3F53]">
            💳Betalning och villkor
          </h2>

          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                När får jag fakturan?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>Efter flytten skickas fakturan till dig.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                Hur lång är betalningstiden?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>10 dagar från fakturadatum.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                Ingår moms i priset?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>Ja, alla våra priser är inklusive moms.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="px-4  md:px-8 lg:px-16 lg: space-y-12 max-w-screen-xl mx-auto mt-20 ">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0D3F53]">
            Flyttstädning
          </h2>

          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                Vad ingår i flyttstädningen?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>
                  Vi rengör alla rum grundligt, inklusive golv, lister, fönster,
                  garderober och fasta ytor. Köket städas noggrant med rengöring
                  av spis, kyl, frys, skåp och bänkskivor. Badrummet rengörs
                  inklusive toalett, handfat, badkar och kakel. Fönsterputs
                  ingår också.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                Städar ni bakom vitvaror?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>Ja, om du drar ut kyl och frys kan vi städa bakom dem.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                Ingår rengöring av ugnsplåtar?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>
                  Nej, rengöring av ugnsplåtar ingår inte och kan inte
                  beställas.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                Kan jag köpa till extra tjänster?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>
                  Ja, du kan köpa till t.ex. rengöring av persienner, extra
                  badrum, extra toalett eller inglasad duschhörna mot tillägg.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                Måste jag tömma bostaden helt innan städning?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>
                  Ja, bostaden ska vara helt tömd på möbler så att vi kan komma
                  åt alla ytor.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                Vad gör jag om jag inte kan vara hemma under städningen?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>
                  Ring oss några dagar innan så kan vi ordna med nyckelhämtning
                  och lämning.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                Vilka tider kan jag boka flyttstädning?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>
                  Vi erbjuder flexibla tider, kontakta oss gärna för att hitta
                  en tid som passar dig.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                Hur lång tid tar en flyttstädning?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>Tiden varierar beroende på bostadens storlek och skick.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                Ingår fönsterputsning i alla rum?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>
                  Ja, vi putsar alla fönster in- och utvändigt som en del av
                  flyttstädningen.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-10">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                Vad händer om jag behöver boka om?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>
                  Ombokning är kostnadsfri om det görs minst 3 dagar innan.
                  Senare ändringar debiteras delvis eller fullt pris.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-11">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                Finns det garanti på städningen?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>
                  Ja, vi erbjuder 30 dagars garanti. Om du eller nästa hyresgäst
                  är missnöjd kan du kontakta oss för att vi ska åtgärda
                  eventuella brister.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-12">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                Vad händer om lägenheten inte är flyttad i tid?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>
                  Vi kan behöva avbryta städningen och debitera för utfört
                  arbete. Kontakta oss om du behöver hjälp eller rådgivning.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-13">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                Tar ni bort kalkavlagringar?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>
                  Vi tar bort kalk som kan tas bort vid vanlig städning, men
                  inte svåra kalkavlagringar som kräver specialsanering.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-14">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                Vad ska jag göra med ömtåliga föremål under flyttstädningen?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>
                  Packa eller flytta dem själv innan städningen så att vi kan
                  komma åt ytorna ordentligt.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-15">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                Kan jag få offert innan jag bokar?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>
                  Ja, du kan få prisuppgift direkt på vår hemsida eller kontakta
                  oss för offert.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-16">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                Vilka områden täcker ni?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>
                  Vi erbjuder flyttstädning i Uppsala, Enköping, Stockholm och
                  Västerås.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-17">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                Kan jag betala med kort eller Swish?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>
                  Vi fakturerar vanligtvis via e-post, men kontakta oss om du
                  önskar andra betalningsalternativ.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-18">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                Hur snabbt kan ni komma och städa?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>
                  Vi försöker alltid vara flexibla och boka in så snabbt som
                  möjligt, men det är bäst att boka i god tid.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="px-4 md:px-8 lg:px-16 max-w-screen-xl mx-auto">
          <div className="h-1 bg-[#DEB82D]  w-full my-8 "></div>
        </div>

        <div className="px-4  md:px-8 lg:px-16 lg: space-y-12 max-w-screen-xl mx-auto ">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0D3F53]">
            🧹Kvalitetsgaranti och villkor för flyttstädning
          </h2>

          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                Vad innebär er kvalitetsgaranti på flyttstädningen?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>
                  Vi erbjuder en 30 dagars garanti där vi åtgärdar eventuella
                  brister om du eller nästa hyresgäst upptäcker något fel.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                Hur får jag information om garantin?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>
                  Vi lämnar en checklista på diskbänken med detaljer om vår
                  garanti till den kommande hyresgästen.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                Hur länge gäller garantin?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>
                  Garantin gäller i upp till 30 dagar från den dag vi utför
                  städningen.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                Kan jag använda lägenheten under garantitiden?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>
                  Nej, garantin gäller endast om lägenheten inte används efter
                  städningen.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                Hur lång tid har nästa hyresgäst på sig att rapportera klagomål?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>
                  Den nya hyresgästen har tre dagar efter inflyttning på sig att
                  kontakta oss om det finns några brister eller problem i
                  bostaden.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                Vad händer om jag bor utanför Uppsala?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>
                  Det är ditt ansvar att kontrollera städningen innan vi lämnar
                  bostaden. Om klagomål uppstår efteråt tillkommer en avgift på
                  500 kr för återstädning.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                Vem ansvarar för att informera hyresvärden om garantin?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>
                  Det är ditt ansvar att informera hyresvärden om vår
                  städgaranti.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                Vad gör jag om hyresvärden inte godkänner städningen?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>
                  Du måste kontakta oss i god tid så att vi kan åtgärda
                  eventuella brister.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                Vad händer om hyresvärden inte hinner besikta städningen innan
                kontraktets slut?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>
                  Du ansvarar för att hyresvärden godkänner att nästa hyresgäst
                  kan kontakta oss vid eventuella problem.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-10">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                Betalar ni ersättning om städningen inte är fullständig?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>
                  Nej, vi betalar inte ersättning. Om det finns brister
                  kontaktar du oss så kommer vi tillbaka och åtgärdar
                  städningen.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-11">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                Kan ni avbryta städningen?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>
                  Ja, om kunden inte har flyttat helt eller delvis kan vi
                  avbryta arbetet och debitera för hela flyttstädningen.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-12">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                Vad händer om bostaden är misskött eller kräver mer än vanlig
                flyttstädning?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>
                  Vi kontaktar dig för ett förslag på extra tid och kostnad
                  innan vi fortsätter arbetet.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-13">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                Måste jag vara tillgänglig under städdagen?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>
                  Ja, du behöver vara tillgänglig på telefon under dagen för att
                  kunna hantera eventuella frågor eller problem.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="px-4 md:px-8 lg:px-16 lg:space-y-12 max-w-screen-xl mx-auto mt-20">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0D3F53]">
            Visningstäd
          </h2>

          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                Vad ingår i visningsstädningen?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <div>
                  Vi gör en noggrann rengöring av hela bostaden med fokus på
                  synliga ytor. Det inkluderar:
                  <ul className="list-disc pl-6">
                    <li>Dammtorkning av lister, dörrar och fria ytor</li>
                    <li>Dammsugning och våttorkning av golv</li>
                    <li>Putsning av speglar och glasytor</li>
                    <li>
                      Rengöring av kök (ytor, spis, kakel, diskbänk, vitvaror
                      utvändigt)
                    </li>
                    <li>
                      Rengöring av badrum (handfat, toalett, dusch/badkar,
                      kakel)
                    </li>
                    <li>Enkel fönsterputsning (insida)</li>
                    <li>Borttagning av damm från lampor och ventiler</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                Ingår fönsterputsning?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>
                  Ja, enkelputsning av insidan ingår. Vill du ha putsning även
                  utvändigt eller mellan glas, kontakta oss för offert.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                Vad ingår inte i visningsstädningen?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>Följande ingår inte:</p>
                <ul className="list-disc pl-6">
                  <li>Våttorkning av väggar och tak</li>
                  <li>Rengöring av braskamin</li>
                  <li>Rensning av vattenlås</li>
                  <li>Flytt av tunga möbler (vi städar runt dem)</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                Vad behöver jag förbereda innan städningen?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>För att vi ska kunna göra ett bra jobb:</p>
                <ul className="list-disc pl-6">
                  <li>Plocka undan lösa föremål</li>
                  <li>Ta bort blommor/föremål från fönsterbrädor</li>
                  <li>Montera av badkarsfront om det ska städas bakom</li>
                  <li>Flytta tunga möbler om du vill ha rent bakom</li>
                  <li>Se till att el och belysning fungerar</li>
                  <li>Husdjur ska inte vistas i bostaden under städningen</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                Hur fungerar det med nyckelhantering?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>
                  Om du inte kan vara hemma, kan vi hämta eller lämna nyckel
                  enligt överenskommelse.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                Kan ni lämna nyckeln till min mäklare eller hyresvärd efter
                städningen?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>
                  Ja, vi kan lämna nyckeln till din mäklare eller hyresvärd mot
                  en avgift på 200 kr (efter RUT-avdrag). Meddela oss gärna i
                  förväg så ordnar vi det smidigt!
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                Vad händer om bostaden inte är redo?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>
                  Vi förbehåller oss rätten att avbryta arbetet om bostaden är
                  för rörig eller i mycket dåligt skick. I så fall kontaktar vi
                  dig innan vi påbörjar städningen.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                Hur gör jag om jag behöver omboka eller avboka?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>
                  • Senast 3 dagar innan: kostnadsfritt <br />
                  • 1–2 dagar innan: 50 % av fakturabeloppet debiteras <br />•
                  Samma dag: hela fakturabeloppet debiteras
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger className="text-xl md:text-1xl font-semibold text-left">
                Hur betalar jag?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                <p>
                  Du får en faktura via e-post efter städningen.
                  Betalningsvillkor är 10 dagar. Vid sen betalning tillkommer en
                  avgift.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};
export default page;
