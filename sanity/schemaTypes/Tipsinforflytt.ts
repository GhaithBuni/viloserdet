const tips = {
  name: "Tipsinforflytt",
  title: "Tips inför flytt",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titel",
      type: "string",
    },
    {
      name: "packiingInAdvance",
      title: "Packa i förväg",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Rubrik",
          type: "text",
        },
        {
          name: "description",
          title: "Beskrivning",
          type: "text",
        },
      ],
    },
    {
      name: "packingMaterials",
      title: "Packningsmaterial",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Rubrik",
          type: "text",
        },
        {
          name: "description",
          title: "Beskrivning",
          type: "text",
        },
      ],
    },
    {
      name: "chicklist",
      title: "Checklista",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Rubrik",
          type: "text",
        },
        {
          name: "description",
          title: "Beskrivning",
          type: "text",
        },
      ],
    },
    {
      name: "changeOfAddress",
      title: "Adressändring",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Rubrik",
          type: "text",
        },
        {
          name: "description",
          title: "Beskrivning",
          type: "text",
        },
      ],
    },
    {
      name: "MovingHelp",
      title: "Flytthjälp",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Rubrik",
          type: "text",
        },
        {
          name: "description",
          title: "Beskrivning",
          type: "text",
        },
      ],
    },
  ],
};
export default tips;
