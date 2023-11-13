import { PageInfo } from "../interfaces/sanity";
import { createQuery } from "@/lib/createQuery";
import { unstable_cache } from "next/cache";

export const getProfileData = unstable_cache(
  async (language: string = "pt") => {
    const locale = language.split("-")[0];

    const query = `*[_type == "pageInfo"][0] {
    ...,
    "intro": intro.${locale},
    "role": role.${locale},
    "heroTitle": heroTitle.${locale},
    "category": category.${locale},
    "slug": slug.current,
    skills[]-> {
      ...,
      category -> {
        "name": name,
        "title": title.${locale},
      }
    },
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
  },
  ["pageinfo-data"],
  { revalidate: 3600 },
);
