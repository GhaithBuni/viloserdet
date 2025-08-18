const Forsakring = {
  name: "Forsakring",
  title: " forsakring",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titel",
      type: "string",
    },
    {
      name: "underTitle",
      title: "Under Title 1",
      type: "string",
    },
    {
      name: "underTitle2",
      title: "Under Title 2",
      type: "string",
    },
    {
      name: "InsurancdEmployeesTitle",
      type: "string",
      title: "Title Försäkring  Personal",
    },
    {
      name: "InsurancdEmployeesDes",
      type: "array",
      of: [{ type: "block" }],
      title: "Text Försäkring  Personal",
    },
    {
      name: "InsuranceGoodsTitle",
      type: "string",
      title: "Title Försäkring Gods",
    },
    {
      name: "InsuranceGoodsDes",
      type: "array",
      of: [{ type: "block" }],
      title: "Text Försäkring Gods",
    },
    {
      name: "CollaborationSvedeaTitle",
      type: "string",
      title: "Title Samarbete Svedea",
    },
    {
      name: "CollaborationSvedeaDes",
      type: "array",
      of: [{ type: "block" }],
      title: "Text Samarbete Svedea",
    },
    {
      name: "CollaborationSvedeaDes2",
      type: "text",
      title: "Text 2 Samarbete Svedea",
    },
  ],
};

export default Forsakring;
