"use client";

import SkillBadge from "@/components/SkillBadge";
import { Skill } from "@/interfaces/sanity";
import { useSearchParams } from "next/navigation";

type Props = {
  skills: Skill[];
};

const SkillsWrapper = ({ skills }: Props) => {
  const category = useSearchParams().get("category");

  const skillsFilteredByQueryParamsCategory = skills.filter((skill) => {
    const isAllCategories = !category || category === "all";
    const isFullstackForBackendOrFrontend =
      (category === "backend" || category === "frontend") &&
      skill.category.name === "fullstack";
    const isMatchingCategory = skill.category.name === category;

    return (
      isAllCategories || isFullstackForBackendOrFrontend || isMatchingCategory
    );
  });

  return (
    <div className="mt-12 flex flex-col gap-6 sm:grid sm:grid-cols-2 xl:grid-cols-4">
      {skillsFilteredByQueryParamsCategory.map((skill) => (
        <SkillBadge key={skill._id} skill={skill} />
      ))}
    </div>
  );
};

export default SkillsWrapper;
