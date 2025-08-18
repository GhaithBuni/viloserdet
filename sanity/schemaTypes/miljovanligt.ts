import { title } from "process";

const miljovanligt = {
  title: "Miljövänligt",
  name: "miljovanligt",
  type: "document",
  fields: [
    {
      title: "Hållbarhet och Miljövänlig Title",
      name: "HallbarhetOchMiljovanlig",
      type: "text",
    },
    {
      title: "Hållbarhet och Miljövänlig Beskrivning ",
      name: "HallbarhetOchMiljovanligBeskrivning",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "Cyklar för en Grönare Framtid Title",
      name: "CyklarForEnGronareFramtid",
      type: "text",
    },
    {
      title: "Cyklar för en Grönare Framtid Beskrivning ",
      name: "CyklarForEnGronareFramtidBeskrivning",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "Naturliga Städmedel Title",
      name: "NaturligaStadmedel",
      type: "text",
    },
    {
      title: "Naturliga Städmedel Beskrivning",
      name: "NaturligaStadmedelBeskrivning",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "Miljövänlig Framtid Title",
      name: "MiljovanligFramtid",
      type: "text",
    },
    {
      title: "Miljövänlig Framtid Beskrivning",
      name: "MiljovanligFramtidBeskrivning",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "Miljövänlig Framtid Beskrivning 2",
      name: "MiljovanligFramtidBeskrivning2",
      type: "text",
    },
  ],
};

export default miljovanligt;
