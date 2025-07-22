const Ingarivisningsstadning = {
  name: "Ingarivisningsstadning",
  title: "Ingarivisningsstadning",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titel",
      type: "string",
    },
    { name: "description", type: "text", title: "Beskrivning" },
    { name: "description2", type: "text", title: "Beskrivning 2" },
    {
      name: "IncludedServices",
      title: "Inkluderade Tjänster",
      type: "object",
      fields: [
        { name: "title", type: "string", title: "Sektionsrubrik" },
        {
          name: "IncludedServicesList",
          title: "Inkluderade Tjänster Lista",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "description", type: "text", title: "Beskrivning" },
              ],
            },
          ],
        },
      ],
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
      name: "KeysManagement",
      title: "Nyckelhantering",
      type: "object",
      fields: [
        { name: "title", type: "string", title: "Sektionsrubrik" },
        {
          name: "keysManagementList",
          title: "Nyckelhantering Lista",
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
      name: "homeNotReady",
      title: "Om bostaden inte är redo",
      type: "object",
      fields: [
        { name: "title", type: "string", title: "Sektionsrubrik" },
        {
          name: "homeNotReadyList",
          title: "Om bostaden inte är redo Lista",
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
      title: "Av- och ombokning",
      type: "object",
      fields: [
        { name: "title", type: "string", title: "Sektionsrubrik" },
        {
          name: "CancellationAndRebookingList",
          title: "Av- och ombokning Lista",
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
      name: "payment",
      title: "Betalning",
      type: "object",
      fields: [
        { name: "title", type: "string", title: "Sektionsrubrik" },
        {
          name: "PaymentList",
          title: "Betalning Lista",
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
      name: "QualityGuarantee",
      title: "Kvalitetsgaranti",
      type: "object",
      fields: [
        { name: "title", type: "string", title: "Sektionsrubrik" },
        {
          name: "QualityGuaranteeList",
          title: "Kvalitetsgaranti Lista",
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
    { name: "lastRow", type: "text", title: "Sista raden" },
  ],
};
export default Ingarivisningsstadning;
