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
