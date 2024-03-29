import React from "react";
import ProjectItem from "@/components/ProjectItem";
import Section from "@/components/Section";
import { getProjects } from "@/services/getProjects";
import { Metadata } from "next";
import {
  getLocale,
  getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const t = await getTranslations("linksNavigation");

  return {
    title: `Tarcisio | ${t("projects")}`,
  };
}

const ProjectsPage = async ({ params }: { params: { lang: string } }) => {
  unstable_setRequestLocale(params.lang);

  const locale = await getLocale();
  const projects = await getProjects(locale);
  const t = await getTranslations("sectionTitles");

  return (
    <Section>
      <h1 className="text-4xl">{t("projects")}</h1>
      <div className="mt-12 flex flex-col gap-12 sm:grid sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectItem key={project._id} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default ProjectsPage;
