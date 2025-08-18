export const faqPageQuery = `
*[_type == "faqPage"][0]{
  heroHeading,
  sections[]{
    title,
    items[]{
      question,
      answer,
      defaultOpen
    }
  }
}
`;
