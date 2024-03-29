const project = {
  fields: [
    {
      description: "Title of the Project",
      name: "projectTitle",
      title: "ProjectTitle",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "projectTitle",
      },
    },
    {
      name: "published",
      title: "Published",
      type: "boolean",
      initialValue: true,
    },
    {
      name: "description",
      title: "Description",
      type: "localeText",
    },
    {
      description:
        "Resolution Preference 1155x932. A primeira imagem fica na home.",
      name: "images",
      options: {
        hotspot: true,
      },
      title: "Galery",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "projectLink",
      title: "ProjectLink",
      type: "url",
    },
    {
      name: "projectGithubLink",
      title: "GithubLink",
      type: "url",
    },
    {
      name: "category",
      to: [{ type: "projectCategory" }],
      title: "Category",
      type: "reference",
    },
    {
      name: "tags",
      of: [{ to: { type: "tag" }, type: "reference" }],
      title: "Tags",
      type: "array",
    },
  ],
  name: "projects",
  title: "Projects",
  type: "document",
};

export default project;
