import React from 'react'

const page = () => {
  return (
    <div>
        <div className="bg-white text-gray-800 px-4 py-10 md:px-8 lg:px-16 lg:py-20 space-y-12 max-w-screen-xl mx-auto mt-20">
  <h2 className="text-3xl md:text-4xl font-bold text-[#0D3F53]">Visningsstädning</h2>

  <section className="space-y-4">
    <p className="text-base md:text-lg">
      När du ska sälja din bostad är första intrycket avgörande. En noggrann visningsstädning kan bidra till snabbare försäljning och högre slutpris. Vi ser till att ditt hem känns rent och inbjudande inför visningen.
    </p>
    <p className="text-base md:text-lg">
      Vår visningsstädning fokuserar på detaljer. Du ska känna dig trygg med att allt är i ordning när köpare kliver in genom dörren.
    </p>
  </section>

  <section className="bg-[#FEF4E8] p-4 md:p-6 rounded-md shadow-md space-y-4">
    <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">Detta ingår</h3>
    <ul className="list-disc pl-5 text-base md:text-lg space-y-1">
      <li>Avtorkning av alla fria ytor</li>
      <li>Dammtorkning av synliga ytor, lister, dörrar</li>
      <li>Dammsugning och våttorkning av golv</li>
      <li>Putsning av speglar och glasytor</li>
      <li>Kök: ytor, spis, kakel, diskbänk, vitvaror (utvändigt)</li>
      <li>Badrum: handfat, toalett, dusch/badkar, kakel</li>
      <li>Borttagning av damm från lampor och ventiler</li>
      <li>Fönsterputsning på insidan (enkelputs)</li>
    </ul>
  </section>

  <section className="space-y-4">
    <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">Detta ingår inte</h3>
    <ul className="list-disc pl-5 text-base md:text-lg space-y-1">
      <li>Våttorkning av väggar och tak</li>
      <li>Rengöring av braskamin</li>
      <li>Rensning av vattenlås</li>
    </ul>
  </section>

  <section className="space-y-4">
    <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">Inför städningen</h3>
    <ul className="list-disc pl-5 text-base md:text-lg space-y-2">
      <li>Plocka undan så mycket som möjligt</li>
      <li>Ta bort blommor och föremål från fönsterbrädor</li>
      <li>Front till badkar monteras av dig</li>
      <li>Flytta tunga möbler själv om du vill ha rent bakom</li>
      <li>El och belysning måste vara påslagna</li>
      <li>Vi flyttar inte möbler – städning sker runt dem</li>
      <li>Har du husdjur? Låt dem vara på annan plats</li>
    </ul>
  </section>

  <section className="space-y-4">
    <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">Nyckelhantering</h3>
    <ul className="list-disc pl-5 text-base md:text-lg space-y-1">
      <li>Kontakta oss i förväg om du inte kan vara hemma</li>
      <li>Vi kan lämna nyckeln i brevlåda, men tar inget ansvar efteråt</li>
      <li>Vill du att vi lämnar nyckeln till mäklare? Vi gör det mot 200 kr (efter RUT)</li>
    </ul>
  </section>

  <section className="space-y-4">
    <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">Om bostaden inte är redo</h3>
    <ul className="list-disc pl-5 text-base md:text-lg space-y-1">
      <li>Vi förbehåller oss rätten att avbryta om bostaden är för rörig</li>
      <li>Är bostaden ovanligt smutsig kontaktar vi dig innan start</li>
    </ul>
  </section>

  <section className="space-y-4">
    <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">Ombokning och avbokning</h3>
    <ul className="list-disc pl-5 text-base md:text-lg space-y-1">
      <li>Senast 3 dagar före – ingen avgift</li>
      <li>1–2 dagar före – 50% av fakturan</li>
      <li>Samma dag – hela beloppet debiteras</li>
    </ul>
  </section>

  <section className="space-y-4">
    <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">Betalning</h3>
    <ul className="list-disc pl-5 text-base md:text-lg space-y-1">
      <li>Faktura skickas via e-post efter städning</li>
      <li>10 dagars betalningsvillkor</li>
      <li>Påminnelseavgift: 60 kr</li>
      <li>Dröjsmålsränta: 24% per år</li>
      <li>Vid utebliven betalning skickas ärendet till inkasso</li>
    </ul>
  </section>

  <section className="space-y-4">
    <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">Kvalitetsgaranti</h3>
    <ul className="list-disc pl-5 text-base md:text-lg space-y-1">
      <li>7 dagars garanti efter städtillfället</li>
      <li>Lägenheten får inte användas innan visning</li>
      <li>Endast ägaren kan lämna klagomål</li>
      <li>Utanför Uppsala? Du ansvarar för kontroll innan vi lämnar</li>
      <li>Efter garantin utgår inga åtgärder</li>
    </ul>
    <p className="text-base md:text-lg">Har du synpunkter? Kontakta oss så löser vi det snabbt.</p>
  </section>
</div>
<div className="flex justify-end p-4 container mx-auto">
  <a href="/visningstadning" className="w-full md:w-[400px]">
    <button className='w-full text-lg font-semibold py-4 rounded-lg shadow-md flex items-center justify-center transition bg-[#0D3F53] text-white hover:bg-[#0A2E3D]'>
      Boka visningsstädning
    </button>
  </a>
</div>

      
    </div>
  )
}

export default page
