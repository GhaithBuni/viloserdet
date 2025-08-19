const ingariflytthjalp = {
  name: "ingariflytthjalp",
  title: "Ingariflytthjalp",
  type: "document",
  fields: [
    { name: "title", type: "string", title: "Titel" },
    {
      name: "subtitle",
      type: "array",
      of: [{ type: "block" }],
      title: "Beskrivning",
    },
    { name: "SectionTitle", type: "string", title: "Sektionsrubrik" },
    {
      name: "PriceList",
      type: "array",
      title: "Prislista",
      of: [{ type: "block" }],
    },
    {
      name: "servicesSection",
      title: "Extra Tjänster Sektion",
      type: "object",
      fields: [
        { name: "title", type: "string", title: "Sektionsrubrik" },
        {
          name: "ExtraServicesList",
          title: "Extra Tjanster Lista",
          type: "array",
          of: [
            {
              type: "block",
            },
          ],
        },
      ],
    },
    {
      name: "beforetheMoving",
      title: "infor flyttning",
      type: "object",
      fields: [
        { name: "title", type: "string", title: "Sektionsrubrik" },
        {
          name: "beforetheMovingList",
          title: "infor flyttning Lista",
          type: "array",
          of: [
            {
              type: "block",
            },
          ],
        },
      ],
    },
    {
      name: "duringPacking",
      title: "under packning",
      type: "object",
      fields: [
        { name: "title", type: "string", title: "Sektionsrubrik" },
        {
          name: "duringPackingList",
          title: "under packning Lista",
          type: "array",
          of: [
            {
              type: "block",
            },
          ],
        },
      ],
    },
    {
      name: "SpecificGuidelines",
      title: "Specifika Riktlinjer",
      type: "object",
      fields: [
        { name: "title", type: "string", title: "Sektionsrubrik" },
        {
          name: "SpecificGuidelinesList",
          title: "Specifika Riktlinjer Lista",
          type: "array",
          of: [
            {
              type: "block",
            },
          ],
        },
      ],
    },
    {
      name: "cancellationAndRebooking",
      title: "Avbokning och Ombokning",
      type: "object",
      fields: [
        { name: "title", type: "string", title: "Sektionsrubrik" },
        {
          name: "CancellationAndRebookingList",
          title: "Avbokning och Ombokning Lista",
          type: "array",
          of: [
            {
              type: "block",
            },
          ],
        },
      ],
    },
    { name: "Payment", type: "string", title: "Betalning" },
    {
      name: "PaymentDes",
      type: "array",
      title: "Betalningsbeskrivning",
      of: [{ type: "block" }],
    },
  ],
};

export default ingariflytthjalp;
