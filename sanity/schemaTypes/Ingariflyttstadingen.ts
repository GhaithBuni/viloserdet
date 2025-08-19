// schemas/Ingariflyttstadingen.ts
const blockField = {
  type: "array",
  of: [
    {
      type: "block",
      // Optional: keep the toolbar tidy but useful
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Numbered", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Bold", value: "strong" },
          { title: "Italic", value: "em" },
          { title: "Underline", value: "underline" },
        ],
        annotations: [
          {
            name: "link",
            type: "object",
            title: "Link",
            fields: [{ name: "href", type: "url", title: "URL" }],
          },
        ],
      },
    },
  ],
};

const Ingariflyttstadingen = {
  name: "Ingariflyttstadingen",
  title: "Ingariflyttstadingen",
  type: "document",
  fields: [
    // Document title (kept string)
    { name: "title", title: "Titel", type: "string" },

    // Included services: keep each service as an object with a TITLE + BODY (block)
    {
      name: "IncludedServices",
      title: "Inkluderade Tjänster",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string", title: "Tjänstens Namn" }, // (title stays string)
            {
              name: "body",
              type: "array",
              title: "Innehåll",
              of: blockField.of,
            }, // (block)
          ],
        },
      ],
    },

    // Preparations section: TITLE + BODY (block)
    {
      name: "Preparations",
      title: "Förberedelser inför städning",
      type: "object",
      fields: [
        { name: "title", type: "string", title: "Sektionsrubrik" }, // (title)
        { name: "body", title: "Innehåll", type: "array", of: blockField.of }, // (block)
      ],
    },

    // Cancellation: TITLE + TEXT (block)
    {
      name: "cancellationAndRebooking",
      type: "string",
      title: "Av- och ombokning",
    }, // (title)
    {
      name: "cancellationAndRebookingText",
      type: "array",
      title: "Av- och ombokning text",
      of: blockField.of,
    }, // (block)

    // Keys: TITLE + TEXT (block)
    { name: "keys", type: "string", title: "Nycklar" }, // (title)
    {
      name: "keysText",
      type: "array",
      title: "Nycklar text",
      of: blockField.of,
    }, // (block)

    // Not Included: TITLE + BODY (block)
    {
      name: "notIncluded",
      title: "Ej inkluderat",
      type: "object",
      fields: [
        { name: "title", type: "string", title: "Sektionsrubrik" }, // (title)
        { name: "body", title: "Innehåll", type: "array", of: blockField.of }, // (block)
      ],
    },

    // Can't Order: TITLE + BODY (block)
    {
      name: "cantOrder",
      title: "Kan inte beställa",
      type: "object",
      fields: [
        { name: "title", type: "string", title: "Sektionsrubrik" }, // (title)
        { name: "body", title: "Innehåll", type: "array", of: blockField.of }, // (block)
      ],
    },

    // Right to stop work: TITLE + TEXT (block)
    {
      name: "RightToStopWork",
      type: "string",
      title: "Rätt att stoppa arbetet",
    }, // (title)
    {
      name: "RightToStopWorkText",
      type: "array",
      title: "Rätt att stoppa arbetet text",
      of: blockField.of,
    }, // (block)

    // Payment: TITLE + TEXT (block)
    { name: "Payment", type: "string", title: "Betalning" }, // (title)
    {
      name: "PaymentDes",
      type: "array",
      title: "Betalningsbeskrivning",
      of: blockField.of,
    }, // (block)

    // Quality Guarantee: TITLE + TEXT (block)
    { name: "QualityGuarantee", type: "string", title: "Kvalitetsgaranti" }, // (title)
    {
      name: "QualityGuaranteeText",
      type: "array",
      title: "Kvalitetsgaranti text",
      of: blockField.of,
    }, // (block)
  ],
};

export default Ingariflyttstadingen;
