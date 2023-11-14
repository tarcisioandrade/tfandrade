import ButtonLink from "@/components/ButtonLink";
import ProjectItem from "@/components/ProjectItem";
import Section from "@/components/Section";
import SkillBadge from "@/components/SkillBadge";
import SocialButtons from "@/components/SocialButtons";
import { RouteParams } from "@/interfaces/route";
import { getDictionary } from "@/lib/getDictionary";
import { getProfileData } from "@/services/getProfileData";
import { urlForImage } from "@sanity-local/lib/image";
import Image from "next/image";
import Link from "next/link";

export default async function Home({ params }: RouteParams) {
  const profileData = await getProfileData(params.lang);
  const t = await getDictionary(params.lang);

  return (
    <>
      <Section>
        <div className="flex flex-col gap-12">
          <div className="w-fit overflow-hidden rounded">
            <Image
              src={urlForImage(profileData.avatarImage)
                .width(100)
                .height(100)
                .format("webp")
                .url()}
              alt={profileData.name}
              width={100}
              height={100}
            />
          </div>
          <div className="max-w-[800px]">
            <h1 className="text-4xl">{profileData.heroTitle}</h1>
            <p className="mt-4 text-lg leading-relaxed text-zinc-500">
              {profileData.intro}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <SocialButtons socials={profileData.socials} />
            <ButtonLink className="w-64" href={`${profileData.curriculum}?dl=`}>
              {t.buttonCV}
            </ButtonLink>
          </div>
        </div>
        {!profileData.employee ? (
          <Link
            href="/contact"
            className="absolute right-4 top-8 flex items-center gap-3 self-start whitespace-nowrap rounded bg-green-700/10 px-4 py-2 text-green-500 transition-colors hover:bg-green-700/20 sm:right-12 lg:top-12"
          >
            <div className="h-2 w-2 rounded-full bg-current" />
            Open to work
          </Link>
        ) : null}
      </Section>
      <Section>
        <h2 className="text-3xl">Projetos</h2>
        <div className="mt-12 flex flex-col gap-12 sm:grid sm:grid-cols-2 xl:grid-cols-3">
          {profileData.projects.map((project) => (
            <ProjectItem key={project._id} project={project} />
          ))}
        </div>
        <ButtonLink href="/project" className="mt-12 text-white">
          Ver Todos
        </ButtonLink>
      </Section>

      <Section>
        <h2 className="text-3xl">Tecnologias e Conhecimentos</h2>
        <div className="mt-12 flex flex-col gap-6 sm:grid sm:grid-cols-2 xl:grid-cols-4">
          {profileData.skills.map((skill) => (
            <SkillBadge key={skill._id} skill={skill} />
          ))}
        </div>
        <ButtonLink href="/skills" className="mt-12 text-white">
          Ver Todos
        </ButtonLink>
      </Section>
    </>
  );
}
