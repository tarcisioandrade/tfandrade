const skill = {
  fields: [
    {
      description: "Title of skill",
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      description: "Slug of skill",
      name: "slug",
      title: "Slug",
      type: "string",
    },
    {
      name: "category",
      to: [{ type: "tagCategory" }],
      title: "Category",
      type: "reference",
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
  ],
  name: "skill",
  title: "Skill",
  type: "document",
};

export default skill;
