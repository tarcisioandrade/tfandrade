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
      name: "description",
      title: "Description",
      type: "localeText",
    },
    {
      description: "Resolution Preference 1029x625",
      name: "projectImage",
      options: {
        hotspot: true,
      },
      title: "ProjectImage",

      type: "image",
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
