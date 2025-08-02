const Ingariflyttstadingen = {
  name: "Ingariflyttstadingen",
  title: "Ingariflyttstadingen",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titel",
      type: "string",
    },
    {
      name: "IncludedServices",
      type: "array",
      title: "Inkluderade Tjänster",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string", title: "Tjänstens Namn" },
            {
              name: "items",
              type: "array",
              title: "Punkter",
              of: [{ type: "string" }],
            },
          ],
        },
      ],
    },
    {
      name: "Preparations",
      title: "Förberedelser infor stadning",
      type: "object",
      fields: [
        { name: "title", type: "string", title: "Sektionsrubrik" },
        {
          name: "PreparationsList",
          title: "Förberedelser Lista",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "Description", type: "text", title: "Beskrivning" },
              ],
            },
          ],
        },
      ],
    },

    {
      name: "cancellationAndRebooking",
      type: "string",
      title: "Av- och ombokning",
    },
    {
      name: "cancellationAndRebookingText",
      type: "text",
      title: "Av- och ombokning text",
    },

    {
      name: "keys",
      type: "string",
      title: "Nycklar",
    },
    {
      name: "keysText",
      type: "text",
      title: " Nycklar text",
    },

    {
      name: "notIncluded",
      title: "Ej inkluderat",
      type: "object",
      fields: [
        { name: "title", type: "string", title: "Sektionsrubrik" },
        {
          name: "notIncludedList",
          title: "Ej inkluderat Lista",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "Description", type: "text", title: "Beskrivning" },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "cantOrder",
      title: "Kan inte beställa",
      type: "object",
      fields: [
        { name: "title", type: "string", title: "Sektionsrubrik" },
        {
          name: "cantOrderList",
          title: "Kan inte beställa Lista",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "Description", type: "text", title: "Beskrivning" },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "RightToStopWork",
      type: "string",
      title: "Rätt att stoppa arbetet",
    },
    {
      name: "RightToStopWorkText",
      type: "text",
      title: "Rätt att stoppa arbetet text",
    },
    { name: "Payment", type: "string", title: "Betalning" },
    { name: "PaymentDes", type: "text", title: "Betalningsbeskrivning" },
    {
      name: "QualityGuarantee",
      type: "string",
      title: "Kvalitetsgaranti",
    },
    {
      name: "QualityGuaranteeText",
      type: "text",
      title: "Kvalitetsgaranti text",
    },
    {
      name: "terms",
      title: "Villkor",
      type: "object",
      fields: [
        { name: "title", type: "string", title: "Sektionsrubrik" },
        {
          name: "termsList",
          title: "Villkor Lista",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "Description", type: "text", title: "Beskrivning" },
              ],
            },
          ],
        },
        { name: "LastRow", type: "string", title: "Sista raden" },
      ],
    },
  ],
};
export default Ingariflyttstadingen;
