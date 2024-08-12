import ButtonLink from "@/components/ButtonLink";
import LinkWithLocale from "@/components/LinkWithLocale";
import ProjectItem from "@/components/ProjectItem";
import Section from "@/components/Section";
import SkillBadge from "@/components/SkillBadge";
import SocialButtons from "@/components/SocialButtons";
import SwitchLanguage from "@/components/SwitchLanguage";
import { RouteParams } from "@/interfaces/route";
import { getCurrentLocale, getI18n } from "@/locales/server";
import { getProfileData } from "@/services/getProfileData";
import { urlForImage } from "@sanity-local/lib/image";
import { setStaticParamsLocale } from "next-international/server";
import Image from "next/image";

export default async function Home({ params }: RouteParams) {
  setStaticParamsLocale(params.locale);

  const profileData = await getProfileData(params.locale);
  const t = await getI18n();
  const locale = getCurrentLocale();

  return (
    <>
      <Section>
        <div className="flex flex-col gap-8">
          <div className="w-fit overflow-hidden rounded">
            <Image
              className="h-24 w-24 object-cover"
              src={urlForImage(profileData.avatarImage).format("webp").url()}
              alt={profileData.name}
              width={1000}
              height={1000}
            />
          </div>
          <div className="max-w-[800px]">
            <h1 className="text-4xl">{profileData.heroTitle}</h1>
            <p className="mt-4 text-lg leading-relaxed text-zinc-500">
              {profileData.intro}
            </p>
          </div>
          <div className="flex flex-col-reverse gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-4">
              <SocialButtons socials={profileData.socials} />
            </div>
            <ButtonLink
              className="sm:w-64"
              href={`${profileData.curriculum}?dl=`}
            >
              Download CV
            </ButtonLink>
          </div>
        </div>
        <div className="absolute right-4 top-8 flex flex-col items-end gap-2 sm:right-12 sm:flex-row sm:items-center lg:right-0 lg:top-12">
          {!profileData.employee ? (
            <LinkWithLocale
              href="/contact"
              className="flex items-center gap-3 self-start whitespace-nowrap rounded bg-green-700/10 px-4 py-2 text-green-500 transition-colors hover:bg-green-700/20"
            >
              <div className="h-2 w-2 rounded-full bg-current" />
              Open to work
            </LinkWithLocale>
          ) : null}
          <SwitchLanguage defaultLocale={locale} />
        </div>
      </Section>
      <Section>
        <h2 className="text-3xl">{t("sectionTitles.projects")}</h2>
        <div className="mt-12 flex flex-col gap-12 sm:grid sm:grid-cols-2 xl:grid-cols-3">
          {profileData.projects.map((project) => (
            <ProjectItem key={project._id} project={project} />
          ))}
        </div>
        <LinkWithLocale
          href="/project"
          className="button-primary mt-12 text-white"
        >
          {t("buttons.seeAll")}
        </LinkWithLocale>
      </Section>

      <Section>
        <h2 className="text-3xl">{t("sectionTitles.skills")}</h2>
        <div className="mt-12 flex flex-col gap-6 sm:grid sm:grid-cols-2 xl:grid-cols-4">
          {profileData.skills.map((skill) => (
            <SkillBadge key={skill._id} skill={skill} />
          ))}
        </div>
        <LinkWithLocale
          href="/skills"
          className="button-primary mt-12 text-white"
        >
          {t("buttons.seeAll")}
        </LinkWithLocale>
      </Section>
    </>
  );
}
