const landingPage = {
  name: "landingPage",
  type: "document",
  title: "Landing Page",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Titel",
    },
    { name: "subtitle", type: "text", title: "Undertitel" },
    {
      name: "ourServices",
      type: "array",
      title: "Våra Tjänster",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string", title: "Tjänstens Namn" },
            {
              name: "subtitle",
              type: "string",
              title: "Tjänstens Undertitel",
            },
            { name: "image", type: "image", title: "Bild" }, // ✅ Add this!
            { name: "link", type: "string", title: "Länk (URL)" }, // ✅ Add this too!
          ],
        },
      ],
    },
    {
      name: "whyUs",
      type: "object",
      title: "Varför Vi",
      fields: [
        { name: "title", type: "string", title: "Rubrik" },
        {
          name: "subtitle",
          type: "text",
          title: "Undertitel",
        },
        {
          name: "Insurance",
          type: "object",
          title: "Försäkring",
          fields: [
            { name: "image", type: "image", title: "Bild" },
            { name: "description", type: "text", title: "Beskrivning" },
          ],
        },
        {
          name: "environmentallyFriendly",
          type: "object",
          title: "Miljövänligt",
          fields: [
            { name: "image", type: "image", title: "Bild" },
            { name: "description", type: "text", title: "Beskrivning" },
          ],
        },
        {
          name: "priceGuarantee",
          type: "object",
          title: "Prisgaranti",
          fields: [
            { name: "image", type: "image", title: "Bild" },
            { name: "description", type: "text", title: "Beskrivning" },
          ],
        },
        {
          name: "satisfactionGuarantee",
          type: "object",
          title: "Nöjdhetsgaranti",
          fields: [
            { name: "image", type: "image", title: "Bild" },
            { name: "description", type: "text", title: "Beskrivning" },
          ],
        },
      ],
    },
    {
      name: "tipsSection",
      type: "object",
      title: "Tips Sektion",
      fields: [
        { name: "title", type: "string", title: "Rubrik" },
        {
          name: "tipsList",
          type: "array",
          title: "Tips Lista",
          of: [
            {
              type: "object",
              fields: [
                { name: "title", type: "string", title: "Tips Titel" },
                { name: "description", type: "text", title: "Beskrivning" },
              ],
            },
          ],
        },
      ],
    },
    { name: "reviewsTitle", type: "string", title: "Recensioner Rubrik" },
    { name: "InfoPanelTitle", type: "string", title: "Info Panel Rubrik" },
    { name: "InfoPanelContent", type: "text", title: "Info Panel Innehåll" },
  ],
};
export default landingPage;
