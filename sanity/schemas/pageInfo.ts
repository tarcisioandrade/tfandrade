const pageInfo = {
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "role",
      title: "Role",
      type: "localeString",
    },
    { name: "heroTitle", title: "Hero Title", type: "localeString" },
    {
      name: "intro",
      title: "Intro",
      type: "localeText",
    },
    {
      description: "Resolution Preference 600x600",
      name: "avatarImage",
      options: {
        hotspot: true,
      },
      title: "Image",
      type: "image",
    },
    {
      name: "curriculum",
      title: "Curriculum",
      type: "file",
    },
    {
      name: "socials",
      of: [{ to: { type: "social" }, type: "reference" }],
      title: "Socials",
      type: "array",
    },
    {
      name: "skills",
      of: [{ to: { type: "skill" }, type: "reference" }],
      title: "Skills",
      type: "array",
    },
  ],
  name: "pageInfo",
  title: "PageInfo",
  type: "document",
};

export default pageInfo;
