import React from "react";
import SkillsWrapper from "./skills-wrapper";
import Section from "@/components/Section";
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

const SkillPage = async ({ params }: { params: { lang: string } }) => {
  unstable_setRequestLocale(params.lang);

  const skills = await getSkills(params.lang);
  const categoriesFilters = await getCategoriesFilters(params.lang);
  const t = await getTranslations("sectionTitles");

  return (
    <Section className="min-h-[calc(100vh_-100px)]">
      <h1 className="text-4xl">{t("skills")}</h1>
      <SkillsFilter filtersOptions={categoriesFilters} />
      <SkillsWrapper skills={skills} />
    </Section>
  );
};

export default SkillPage;
