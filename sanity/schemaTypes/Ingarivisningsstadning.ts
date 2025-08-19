// schemas/Ingarivisningsstadning.ts

const blockField = {
  type: "array",
  of: [
    {
      type: "block",
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

const Ingarivisningsstadning = {
  name: "Ingarivisningsstadning",
  title: "Ingarivisningsstadning",
  type: "document",
  fields: [
    { name: "title", title: "Titel", type: "string" },

    // Descriptions as blocks
    { name: "description", title: "Beskrivning", ...blockField },

    // Included Services
    {
      name: "IncludedServices",
      title: "Inkluderade Tjänster",
      type: "object",
      fields: [
        { name: "title", type: "string", title: "Sektionsrubrik" },
        // was array of objects -> now blocks (use bullets in Studio)
        {
          name: "IncludedServicesList",
          title: "Inkluderade Tjänster Lista",
          ...blockField,
        },
      ],
    },

    // Not Included
    {
      name: "notIncluded",
      title: "Ej inkluderat",
      type: "object",
      fields: [
        { name: "title", type: "string", title: "Sektionsrubrik" },
        {
          name: "notIncludedList",
          title: "Ej inkluderat Lista",
          ...blockField,
        },
      ],
    },

    // Preparations
    {
      name: "Preparations",
      title: "Förberedelser inför städning",
      type: "object",
      fields: [
        { name: "title", type: "string", title: "Sektionsrubrik" },
        {
          name: "PreparationsList",
          title: "Förberedelser Lista",
          ...blockField,
        },
      ],
    },

    // Keys Management
    {
      name: "KeysManagement",
      title: "Nyckelhantering",
      type: "object",
      fields: [
        { name: "title", type: "string", title: "Sektionsrubrik" },
        {
          name: "keysManagementList",
          title: "Nyckelhantering Lista",
          ...blockField,
        },
      ],
    },

    // Home Not Ready
    {
      name: "homeNotReady",
      title: "Om bostaden inte är redo",
      type: "object",
      fields: [
        { name: "title", type: "string", title: "Sektionsrubrik" },
        {
          name: "homeNotReadyList",
          title: "Om bostaden inte är redo Lista",
          ...blockField,
        },
      ],
    },

    // Cancellation & Rebooking
    {
      name: "cancellationAndRebooking",
      title: "Av- och ombokning",
      type: "object",
      fields: [
        { name: "title", type: "string", title: "Sektionsrubrik" },
        {
          name: "CancellationAndRebookingList",
          title: "Av- och ombokning Lista",
          ...blockField,
        },
      ],
    },

    // Payment
    {
      name: "payment",
      title: "Betalning",
      type: "object",
      fields: [
        { name: "title", type: "string", title: "Sektionsrubrik" },
        { name: "PaymentList", title: "Betalning Lista", ...blockField },
      ],
    },

    // Quality Guarantee
    {
      name: "QualityGuarantee",
      title: "Kvalitetsgaranti",
      type: "object",
      fields: [
        { name: "title", type: "string", title: "Sektionsrubrik" },
        {
          name: "QualityGuaranteeList",
          title: "Kvalitetsgaranti Lista",
          ...blockField,
        },
      ],
    },
  ],
};

export default Ingarivisningsstadning;
