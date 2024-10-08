import { Project } from "../interfaces/sanity";
import { createQuery } from "@/lib/createQuery";

export const getProjects = async (locale: string = "pt") => {
  const query = `
  *[_type == "projects" && published == true] {
    ...,
    "slug": slug.current,
    category -> {
      "name": name,
      "title": title.${locale}
    },
    tags[] ->
  } | order(_updatedAt desc)
`;

  const projects = await createQuery<Project[]>(query);

  return projects;
};

export const getProjectBySlug = async (slug: string, locale = "pt") => {
  const query = `
  *[_type == "projects" && slug.current == "${slug}" && published == true] {
    ...,
    "slug": slug.current,
    "description": description.${locale},
    category -> {
      "name": name,
      "title": title.${locale}
    },
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
