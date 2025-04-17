import React from 'react'

const Page = () => {
  return (
    <div className="bg-white text-gray-800">
      <div className="px-4 py-10 md:px-8 lg:px-16 lg:py-20 max-w-screen-xl mx-auto space-y-12 mt-20">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0D3F53]">Flyttstädning</h2>

        <section className="space-y-4">
          <p className="text-base md:text-lg">
            Välkommen till <strong>VILÖSERDET</strong>. Vi är en fullservice städfirma med fokus på flyttstädning. Vårt mål är att ge dig bästa möjliga service till bästa möjliga pris.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base md:text-lg">
            <ul className="space-y-2">
              <li>✔️ Städgaranti</li>
              <li>✔️ Prisgaranti</li>
              <li>✔️ Bästa pris</li>
            </ul>
            <ul className="space-y-2">
              <li>✔️ Allt material ingår</li>
              <li>✔️ Miljövänliga material</li>
              <li>✔️ Utbildad personal</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">Varför välja oss?</h3>
          <ul className="list-disc pl-5 text-base md:text-lg space-y-2">
            <li>Städgaranti – städningen godkänns av både hyresvärd och ny hyresgäst</li>
            <li>Prisgaranti – hittar du billigare, får du 100 kr rabatt</li>
            <li>Fast pris – inga dolda avgifter</li>
            <li>Miljövänliga material i hela processen</li>
            <li>Utbildad och erfaren personal</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">Vad händer om något inte blir godkänt?</h3>
          <p className="text-base md:text-lg">
            Du har nöjdhetsgaranti. Inflyttande hyresgäst har tre dagar att lämna synpunkter. Vi åtgärdar kostnadsfritt. Vi kan även medverka vid slutbesiktning om du meddelar oss i förväg.
          </p>
        </section>

        <section className="bg-[#FEF4E8] p-4 md:p-6 rounded-md shadow-md space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">Detta ingår i flyttstädningen</h3>

          <div>
            <h4 className="text-lg md:text-xl font-medium mt-4">Alla rum</h4>
            <ul className="list-disc pl-5 text-base md:text-lg space-y-1">
              <li>Alla ytor dammsugs och torkas</li>
              <li>Väggar, tak, golv, dörrar och lister</li>
              <li>Fönsterputsning och karmar</li>
              <li>Element, garderober, strömbrytare, lampor</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg md:text-xl font-medium mt-4">Kök</h4>
            <ul className="list-disc pl-5 text-base md:text-lg space-y-1">
              <li>Spis, ugn, kyl, frys, fläkt – in och utvändigt</li>
              <li>Bakom och under vitvaror</li>
              <li>Alla skåp och lådor – in och ut</li>
              <li>Diskhoar, bänkskivor, kakel, snickerier</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg md:text-xl font-medium mt-4">Badrum och toalett</h4>
            <ul className="list-disc pl-5 text-base md:text-lg space-y-1">
              <li>Toalett, handfat, speglar, dusch och badkar</li>
              <li>Fog, kakel, klinker, golvbrunn</li>
              <li>Tvättmaskin och torktumlare – utvändigt</li>
              <li>Luftventiler, väggar, armaturer</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg md:text-xl font-medium mt-4">Balkong eller uteplats</h4>
            <ul className="list-disc pl-5 text-base md:text-lg space-y-1">
              <li>Dammsugning och torkning av golv, räcken och väggar</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">Detta gör du själv</h3>
          <ul className="list-disc pl-5 text-base md:text-lg space-y-2">
            <li>Töm hela bostaden – inga möbler kvar</li>
            <li>Frosta av kyl och frys</li>
            <li>Dra fram vitvaror vid behov</li>
            <li>Rensa vattenlås</li>
            <li>Rengör persienner och insidan av vitvaror</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">Besiktning vid behov</h3>
          <p className="text-base md:text-lg">
            Har du inte underhållit bostaden regelbundet? Kontakta oss för kostnadsfri förbesiktning. Då kan vi avgöra om extra städinsats krävs.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">RUT-avdrag</h3>
          <p className="text-base md:text-lg">
            Du får 50% avdrag på arbetskostnaden. Alla våra priser visas efter RUT. Vi ansöker åt dig – du får bekräftelse från Skatteverket.
          </p>
          <ul className="list-disc pl-5 text-base md:text-lg space-y-1">
            <li>Du måste ha fyllt 18 år</li>
            <li>Betalat inkomstskatt på minst 90% av inkomsten</li>
            <li>Bo eller ha bott i bostaden</li>
            <li>Förälder kan ge avdrag till barn, inte tvärtom</li>
            <li>Dödsbo kan nyttja avdrag före dödsfallet</li>
          </ul>
        </section>
      </div>
      <div className="flex justify-end p-4 container mx-auto">
  <a href="/visningstadning" className="w-full md:w-[400px]">
    <button className='w-full text-lg font-semibold py-4 rounded-lg shadow-md flex items-center justify-center transition bg-[#0D3F53] text-white hover:bg-[#0A2E3D]'>
      Boka flyttstädning
    </button>
  </a>
</div>
    </div>
  )
}

export default Page
