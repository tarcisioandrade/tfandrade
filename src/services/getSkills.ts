import { Skill } from "../interfaces/sanity";
import { createQuery } from "@/lib/createQuery";

export const getSkills = async (language: string = "pt") => {
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
};
