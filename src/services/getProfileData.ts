import { PageInfo } from "../interfaces/sanity";
import { createQuery } from "@/lib/createQuery";

export const getProfileData = async (language: string = "pt") => {
  const locale = language.split("-")[0];

  const query = `*[_type == "pageInfo"][0] {
    ...,
    "intro": intro.${locale},
    "role": role.${locale},
    "heroTitle": heroTitle.${locale},
    skills[]->,
    socials[] ->,
    "curriculum": curriculum.asset->url
  }`;

  const pageInfo = await createQuery<PageInfo>(query);

  return pageInfo;
};
