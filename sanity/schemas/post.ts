const post = {
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      options: {
        maxLength: 200,
        // will be ignored if slugify is set
        slugify: (input: string) =>
          input.toLowerCase().replaceAll(/\s+/g, "-").slice(0, 200),
        source: "title",
      },
      title: "Slug",
      type: "slug",
    },
    {
      name: "body",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
        },
      ],
      title: "Body",
      type: "array",
    },
  ],
  name: "portableText",
  title: "Blog Post",
  type: "document",
};

export default post;
