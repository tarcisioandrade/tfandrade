import Section from "@/components/Section";
import SkillBadge from "@/components/SkillBadge";
import { RouteParams } from "@/interfaces/route";
import { getScopedI18n } from "@/locales/server";
import { getSkills } from "@/services/getSkills";
import { Metadata } from "next";
import { setStaticParamsLocale } from "next-international/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getScopedI18n("linksNavigation");

  return {
    title: `Tarcisio | ${t("knowledge")}`,
  };
}

const SkillPage = async ({ params }: RouteParams) => {
  setStaticParamsLocale(params.locale);

  const skills = await getSkills(params.locale);
  const t = await getScopedI18n("sectionTitles");

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
