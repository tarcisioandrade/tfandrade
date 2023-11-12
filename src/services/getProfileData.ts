import { PageInfo } from "../interfaces/sanity";
import { createQuery } from "@/lib/createQuery";

export const getProfileData = async (language: string = "pt") => {
  const locale = language.split("-")[0];

  const query = `*[_type == "pageInfo"][0] {
    ...,
    "intro": intro.${locale},
    "role": role.${locale},
    "heroTitle": heroTitle.${locale},
    "category": category.${locale},
    "slug": slug.current,
    skills[]->,
    socials[] ->,
    projects[] -> {
      ...,
      "slug": slug.current,
      category -> {
        "name": name,
        "title": title.${locale}
      }
    },
    "curriculum": curriculum.asset->url
  }`;

  const pageInfo = await createQuery<PageInfo>(query);

  return pageInfo;
};
