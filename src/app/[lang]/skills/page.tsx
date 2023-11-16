import React from "react";
import Section from "@/components/Section";
import SkillBadge from "@/components/SkillBadge";
import { getSkills } from "@/services/getSkills";
import { Metadata } from "next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

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
  const t = await getTranslations("sectionTitles");

  return (
    <Section className="min-h-[calc(100vh_-100px)]">
      <h1 className="text-4xl">{t("skills")}</h1>
      <div className="mt-12 flex flex-col gap-6 sm:grid sm:grid-cols-2 xl:grid-cols-4">
        {skills.map((skill) => (
          <SkillBadge key={skill._id} skill={skill} />
        ))}
      </div>
    </Section>
  );
};

export default SkillPage;
