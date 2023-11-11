import { Project } from "../interfaces/sanity";
import { createQuery } from "@/lib/createQuery";

export const getProjects = async (language: string = "pt") => {
  const locale = language.split("-")[0];

  const query = `
  *[_type == "projects"] {
    ...,
    "slug": slug.current,
    tags[] ->
  } | order(_updatedAt desc)
`;

  const projects = await createQuery<Project[]>(query);

  return projects;
};

export const getProjectBySlug = async (slug: string, language = "pt") => {
  const locale = language.split("-")[0];

  const query = `
  *[_type == "projects" && slug.current == "${slug}"] {
    ...,
    "slug": slug.current,
    "description": description.${locale},
    tags[] -> {
      ...,
      category -> {
        "name": name,
        "title": title.${locale}
      }
    }
  }
`;

  const project = await createQuery<Project[]>(query);

  return project.length ? project[0] : null;
};
