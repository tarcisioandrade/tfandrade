import { Skill } from "../interfaces/sanity";
import { createQuery } from "@/lib/createQuery";
import { unstable_cache } from "next/cache";

export const getSkills = unstable_cache(
  async (language: string = "pt") => {
    const locale = language.split("-")[0];

    const query = ` *[_type == "skill"] {
    ...,
    category -> {
        "name": name,
        "title": title.${locale},
      }
  }`;

    const skills = await createQuery<Skill[]>(query);

    return skills;
  },
  ["skills-data"],
  { revalidate: 3600 },
);
