import React from "react";
import Section from "@/components/Section";
import SkillBadge from "@/components/SkillBadge";
import SkillsFilter from "@/components/SkillsFilter";
import { getCategoriesFilters } from "@/services/getCategoriesFilters";
import { getSkills } from "@/services/getSkills";
import { Metadata } from "next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const t = await getTranslations("linksNavigation");

  return {
    title: `Tarcisio | ${t("knowledge")}`,
  };
}

const SkillPage = async ({
  params,
  searchParams,
}: {
  params: { lang: string };
  searchParams?: { category: string | undefined };
}) => {
  unstable_setRequestLocale(params.lang);

  const skills = await getSkills(params.lang);
  const categoriesFilters = await getCategoriesFilters(params.lang);
  const t = await getTranslations("sectionTitles");

  const skillsFilteredByQueryParamsCategory = skills.filter((skill) => {
    const isAllCategories =
      !searchParams?.category || searchParams.category === "all";
    const isFullstackForBackendOrFrontend =
      (searchParams?.category === "backend" ||
        searchParams?.category === "frontend") &&
      skill.category.name === "fullstack";
    const isMatchingCategory = skill.category.name === searchParams?.category;

    return (
      isAllCategories || isFullstackForBackendOrFrontend || isMatchingCategory
    );
  });

  return (
    <Section className="min-h-[calc(100vh_-100px)]">
      <h1 className="text-4xl">{t("skills")}</h1>
      <SkillsFilter filtersOptions={categoriesFilters} />
      <div className="mt-12 flex flex-col gap-6 sm:grid sm:grid-cols-2 xl:grid-cols-4">
        {skillsFilteredByQueryParamsCategory.map((skill) => (
          <SkillBadge key={skill._id} skill={skill} />
        ))}
      </div>
    </Section>
  );
};

export default SkillPage;
