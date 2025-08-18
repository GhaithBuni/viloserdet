import { title } from "process";

const nojdgaranti = {
  name: "nojdgaranti",
  title: "Nöjd Garanti",
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
      name: "CustomizedService",
      title: "Kundanpassad Service Title",
      type: "string",
    },
    {
      name: "CustomizedServiceDescription",
      title: "Kundanpassad Service Beskrivning",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "Communication",
      title: "Kommunikation Title",
      type: "string",
    },
    {
      name: "CommunicationDescription",
      title: "Kommunikation Beskrivning",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "Feedback",
      title: "Feedback Title",
      type: "string",
    },
    {
      name: "FeedbackDescription",
      title: "Feedback Beskrivning",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "anythingWrong",
      title: "Om något är Inte Bra Title",
      type: "string",
    },
    {
      name: "descriptionAnythingWrong",
      title: "Beskrivning Om något är Inte Bra",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "Confidence",
      title: "Confidence Title",
      type: "string",
    },
    {
      name: "ConfidenceDescription",
      title: "Confidence Beskrivning",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
export default nojdgaranti;
