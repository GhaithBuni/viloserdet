import { defineType, defineField } from "sanity";

export default defineType({
  name: "faqPage",
  title: "FAQ Page",
  type: "document",
  fields: [
    defineField({
      name: "heroHeading",
      title: "Hero heading",
      type: "string",
      initialValue: "Frågor och Svar",
    }),
    defineField({
      name: "sections",
      title: "Sections",
      type: "array",
      of: [{ type: "faqSection" }],
      validation: (Rule) => Rule.min(1),
    }),
  ],
});
