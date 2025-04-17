import React from 'react'

const page = () => {
  return (
    <div className='mt-20'>
        <div className="bg-white text-gray-800 px-4 py-10 md:px-8 lg:px-16 lg:py-20 space-y-12 max-w-screen-xl mx-auto">
  <h2 className="text-3xl md:text-4xl font-bold text-[#0D3F53]">Trygg och Säker Försäkring</h2>

  <section className="space-y-4 text-base md:text-lg">
    <p>
      Vi erbjuder en trygg och pålitlig tjänst där både dina tillhörigheter och vår personal är fullt försäkrade under hela uppdraget.
    </p>
    <p>
      Vårt mål är att du som kund alltid ska känna dig säker när du anlitar oss.
    </p>
  </section>

  <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
    <div className="space-y-4">
      <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">Försäkring för Personal</h3>
      <p className="text-base md:text-lg">
        Vår personal är grunden i vår verksamhet. Alla våra medarbetare är försäkrade under arbetstid, vilket ger både dem och dig som kund extra trygghet.
      </p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">Försäkring för Gods</h3>
      <p className="text-base md:text-lg">
        Ditt bohag hanteras med största omsorg. Vår försäkring täcker alla ägodelar vi hanterar under flytt och transport. Skulle något hända, är du skyddad.
      </p>
    </div>
  </section>

  <section className="space-y-4 text-base md:text-lg">
    <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">Samarbete med Svedea</h3>
    <p>
      Vi samarbetar med <strong>Svedea Försäkring</strong> – en ledande aktör med stark branschkunskap. Genom detta partnerskap säkerställer vi att våra försäkringar håller högsta möjliga standard.
    </p>
    <p>
      Du får en komplett försäkringslösning med tydlig täckning, inga dolda villkor och snabb hantering vid eventuell skada.
    </p>
  </section>


</div>

      
    </div>
  )
}

export default page
