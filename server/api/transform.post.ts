import markdownParser from "@nuxt/content/transformers/markdown";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const blogContent = await markdownParser.parse(
    "blog-content",
    body.content,
    {}
  );

  return blogContent;
});
