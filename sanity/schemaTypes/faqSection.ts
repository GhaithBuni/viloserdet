import { defineType, defineField } from "sanity";

export default defineType({
  name: "faqSection",
  title: "FAQ Section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Section title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "items",
      title: "Questions",
      type: "array",
      of: [{ type: "faqItem" }], // just references faqItem
      validation: (Rule) => Rule.min(1),
    }),
  ],
});
