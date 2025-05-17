const omOss = {
  name: "omOss",
  title: "Om Oss Sida",
  type: "document",
  fields: [
    { name: "heroTitle", type: "string", title: "Rubrik (Hero)" },

    { name: "omOssText", type: "text", title: "Om Oss Text" },
    {
      name: "mainText",
      type: "array",
      of: [{ type: "block" }],
      title: "Om Oss Textblock",
    },
    {
      name: "servicesSection",
      title: "Tjänster Sektion",
      type: "object",
      fields: [
        { name: "title", type: "string", title: "Huvudrubrik" },
        { name: "description", type: "text", title: "Beskrivning" },
        { name: "subtitle", type: "string", title: "Underrubrik" },
        {
          name: "servicesList",
          title: "Tjänster Lista",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "serviceName",
                  type: "string",
                  title: "Tjänstens Namn",
                },
                {
                  name: "description",
                  type: "text",
                  title: "Tjänstens Beskrivning",
                },
              ],
            },
          ],
        },
        { name: "sistaRad", type: "text", title: "Sista Rad" },
      ],
    },
    {
      name: "History",
      title: "Historia",
      type: "object",
      fields: [
        { name: "title", type: "string", title: "Huvudrubrik" },
        { name: "description1", type: "text", title: "Beskrivning1" },
        { name: "description2", type: "text", title: "Beskrivning2" },
        { name: "description3", type: "text", title: "Beskrivning3" },
        { name: "description4Pre", type: "text", title: "Beskrivning 4 Före" },
        {
          name: "description4After",
          type: "text",
          title: "Beskrivning 4 Efter",
        },
        { name: "description5", type: "text", title: "Beskrivning5" },
        { name: "stadgaranti", type: "string", title: "Stadgaranti" },
        { name: "flyttgranti", type: "string", title: "Flyttgaranti" },
      ],
    },
    {
      name: "Vision",
      title: "Vision",
      type: "object",
      fields: [
        { name: "title", type: "string", title: "Huvudrubrik" },
        { name: "description1", type: "text", title: "Beskrivning 1" },
        { name: "description2", type: "text", title: "Beskrivning 2" },
      ],
    },

    {
      name: "principles",
      title: "Grundprinciper",
      type: "object",
      fields: [
        { name: "title", type: "string", title: "Huvudrubrik" },
        { name: "undertitle", type: "text", title: "Under Title" },
        {
          name: "principlesList",
          title: "Principer",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "name", type: "string", title: "Principens Namn" },
                {
                  name: "description",
                  type: "text",
                  title: "Principens Beskrivning",
                },
              ],
            },
          ],
        },
      ],
    },

    {
      name: "services",
      title: "Tjänster Sektion",
      type: "object",
      fields: [
        { name: "sectionTitle", type: "string", title: "Sektionsrubrik" },
        {
          name: "servicesList",
          title: "Tjänster Lista",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "title", type: "string", title: "Tjänstens Namn" },
                { name: "description", type: "text", title: "Beskrivning" },
                { name: "image", type: "string", title: "Bild URL" },
                { name: "link", type: "string", title: "Länk" },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "WhyUs",
      title: "Varför Oss",
      type: "object",
      fields: [
        { name: "title", type: "string", title: "Huvudrubrik" },
        { name: "underTitle", type: "text", title: "Under title" },
      ],
    },
    {
      name: "teamSection",
      title: "Team Sektion",
      type: "object",
      fields: [
        { name: "title", type: "string", title: "Sektionsrubrik" },
        {
          name: "teamMembers",
          title: "Teammedlemmar",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "name", type: "string", title: "Namn" },
                { name: "role", type: "string", title: "Roll" },
                { name: "image", type: "string", title: "Bild URL" },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default omOss;
