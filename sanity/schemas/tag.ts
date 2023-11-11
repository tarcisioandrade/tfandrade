const tag = {
  fields: [
    {
      description: "Title of tag",
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "link",
      title: "Link",
      type: "url",
    },
    {
      name: "image",
      options: {
        hotspot: true,
      },
      title: "Image",
      type: "image",
    },

    {
      name: "category",
      to: [{ type: "tagCategory" }],
      title: "Category",
      type: "reference",
    },
  ],
  name: "tag",
  title: "Tag",
  type: "document",
};

export default tag;
