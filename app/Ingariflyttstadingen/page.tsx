import React from "react";

const Page = () => {
  return (
    <div className="bg-white text-gray-800">
      <div className="px-4 py-10 md:px-8 lg:px-16 lg:py-20 max-w-screen-xl mx-auto space-y-12 mt-20">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0D3F53] mt-4">
          Flyttstädning
        </h2>
        <div className="bg-[#FEF4E8] p-4 md:p-6 rounded-md shadow-md space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
            {" "}
            Ingår i Flyttstädning
          </h2>

          <div>
            <h4 className="text-lg md:text-xl font-medium mt-4">Alla rum</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Alla fria ytor ska dammsugas och torkas rent.</li>
              <li>Damning av väggar och tak.</li>
              <li>Golv och golvlister.</li>
              <li>Dörrar och trösklar.</li>
              <li>Fönsterkarmar.</li>
              <li>Fönsterputsning.</li>
              <li>Utrymmen mellan elementen.</li>
              <li>Garderober rengörs på utsidan och insidan.</li>
              <li>Strömbrytare, fasta lampor och andra fasta prylar.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg md:text-xl font-medium mt-4">Köket</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Spisen rengörs ut- och invändigt.</li>
              <li>Köksfläkt rengörs in- och utvändigt.</li>
              <li>Golv- och väggytor bakom spisen rengörs.</li>
              <li>Skåp över kyl och frys rengörs ut- och invändigt.</li>
              <li>Utrymmen under kyl och frys rengörs.</li>
              <li>Kyl, sval och frys rengörs in- och utvändigt.</li>
              <li>Målade väggar avfläckas.</li>
              <li>Kaklade ytor rengörs.</li>
              <li>Utrymmen mellan vägg och element rengörs.</li>
              <li>Snickerier våttorkas.</li>
              <li>Bänkskivor.</li>
              <li>Skärbrädor på över- och undersida.</li>
              <li>Skafferi våttorkas på ut- och insida.</li>
              <li>Alla köksskåp våttorkas på ut- och insida.</li>
              <li>Ytan ovanpå väggskåpen i köket våttorkas.</li>
              <li>Lampskärmar och kåpor till armaturer rengörs.</li>
              <li>Diskhoar och avloppsventiler i diskho rengörs.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg md:text-xl font-medium mt-4">
              Badrum/Toalett
            </h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Kakel, fogar och klinkers putsas.</li>
              <li>Badrumsskåp rengörs in- och utvändigt.</li>
              <li>Alla speglar putsas.</li>
              <li>Toalettstol och lock rengörs på in- och utsida.</li>
              <li>Handfat rengörs på in- och utsida.</li>
              <li>
                Badkar/duschväggar rengörs och avkalkas (ej glas duschhörna).
              </li>
              <li>Golvet under badkar.</li>
              <li>Kaklade ytor rengörs.</li>
              <li>Målade väggar våttorkas eller dammtorkas.</li>
              <li>
                Tvättmaskin, torktumlare och torkskåp rengörs (utvändigt).
              </li>
              <li>Rensning av golvbrunn.</li>
              <li>Luftventiler och galler rengörs.</li>
            </ul>
          </div>
        </div>

        <section className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
            Förberedelser inför Städningen
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Bostaden bör vara fri från möbler så att vi får tillgång till alla
              ytor.
            </li>
            <li>Frosta och stäng av frys/kyl.</li>
            <li>
              Om du önskar städning bakom frys/kyl, vänligen dra dem från
              väggen.
            </li>
            <li>Rengöra vattenlåsen under handfat och diskho.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
            Av- och Ombokning
          </h3>
          <p className="text-base md:text-lg">
            Du kan av- eller omboka din tid utan att bli debiterad senast 3
            dagar innan städningen. Gör du det en eller två dagar innan,
            debiteras du för 50% av fakturan. Gör du av-/ombokning samma dag,
            debiteras du för hela summan.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
            Nycklar
          </h3>
          <p className="text-base md:text-lg">
            Om ni inte har möjlighet att vara hemma vid städningen, ring oss
            några dagar innan den bokade tiden så kommer vi förbi och hämtar en
            nyckel. Efter städning lämnar vi nycklarna i din brevlåda. Önskar du
            att vi lämnar nycklarna till din hyresvärd, kan du kontakta oss så
            löser vi det mot en kostnad på 200 kr efter RUT-avdrag.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
            Ingår Ej i Flyttstädning
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Persienner: 100 kr st</li>
            <li>Extra badrum: 300 kr</li>
            <li>Extra toalett: 200 kr</li>
            <li>Inglasad duschhörna: 200 kr</li>
            <li>Insidan av vitvaror: 100 kr</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
            Ingår Ej i Flyttstädning och Kan Ej Beställas
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Rengöring av ugnsplåtar</li>
            <li>Fläckar på väggarna</li>
            <li>
              Fläckar på badrumsgolv på grund av ej avkalkning under längre tid
              och som behöver speciell sanering
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
            Rätt att Avbryta Arbetet
          </h3>
          <p className="text-base md:text-lg">
            Vi förbehåller oss rätten att avbryta arbetet om kunden inte har
            flyttat helt eller delvis. I sådana fall debiteras kunden för hela
            beloppet för flyttstädningen. Om bostaden är misskött och kräver mer
            än vanlig flyttstädning, kontaktar vi kunden direkt innan vi
            påbörjar arbetet för att ge ett förslag på extra tid och kostnad.
            Kunden behöver vara tillgänglig på telefon under dagen.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
            Betalning
          </h3>
          <p className="text-base md:text-lg">
            Efter avslutad städning är det dags för betalning. Våra priser är
            beräknade med RUT-avdraget och moms. Ni kommer att erhålla en
            faktura via e-post, och vi ansöker om RUT-avdraget hos Skatteverket.
            Ni har 10 dagar på er att betala fakturan.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
            Kvalitetsgaranti
          </h3>
          <p className="text-base md:text-lg">
            Vi är stolta över vårt arbete och erbjuder kvalitetsgaranti på vår
            flyttstädning. Vi lämnar en checklista på diskbänken med information
            om vår garanti till kommande hyresgäst. Om det skulle uppstå några
            klagomål angående städningen, kan de kontakta oss direkt.
          </p>
          <h4 className="text-lg font-medium">Villkor för städgaranti:</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>Du har upp till 30 dagars garanti från dagen vi städar.</li>
            <li>Lägenheten ska inte användas efter städning.</li>
            <li>
              Från dagen kommande hyresgäst flyttar in, har de 3 dagar på sig
              att komma med klagomål.
            </li>
            <li>
              Bor du utanför Uppsala är det ditt ansvar att kontrollera vår
              städning innan vi lämnar bostaden. Vid anmärkningar efteråt
              tillkommer en bilavgift på 500 kr för återstädning.
            </li>
            <li>
              Det är ditt ansvar att informera hyresvärden om vår garanti på
              städning och att vi återstädar om det behövs.
            </li>
            <li>
              Det är ditt ansvar att kontakta oss i god tid ifall hyresvärden
              inte godkänner städningen.
            </li>
            <li>
              Om du har bokat flyttstädning några dagar innan kontraktets slut
              och hyresvärden inte hinner besikta städningen, är det ditt ansvar
              att säkerställa att hyresvärden godkänner att den kommande
              hyresgästen kontaktar oss.
            </li>
            <li>
              Om vi inte får klagomål från hyresvärd eller dig, och hyresvärden
              anlitar egen städfirma och debiterar dig, står vi inte för
              kostnaden.
            </li>
          </ul>
          <p className="text-base md:text-lg">
            Med andra ord, vi behöver bli kontaktade för att åtgärda
            anmärkningar.
          </p>
        </section>
      </div>
      <div className="flex justify-end p-4 container mx-auto">
        <a href="/visningstadning" className="w-full md:w-[400px]">
          <button className="w-full text-lg font-semibold py-4 rounded-lg shadow-md flex items-center justify-center transition bg-[#0D3F53] text-white hover:bg-[#0A2E3D]">
            Boka flyttstädning
          </button>
        </a>
      </div>
    </div>
  );
};

export default Page;
