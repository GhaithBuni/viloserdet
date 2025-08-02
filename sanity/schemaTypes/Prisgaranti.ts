const Prisgaranti = {
  name: "Prisgaranti",
  title: "Prisgaranti",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titel",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Undertitel",
      type: "string",
    },
    {
      name: "description",
      title: "Beskrivning",
      type: "array",
      of: [{ type: "text" }],
    },
  ],
};
export default Prisgaranti;
