import React from "react";
import ProjectItem from "@/components/ProjectItem";
import Section from "@/components/Section";
import { RouteParams } from "@/interfaces/route";
import { getCurrentLocale, getScopedI18n } from "@/locales/server";
import { getProjects } from "@/services/getProjects";
import { Metadata } from "next";
import { setStaticParamsLocale } from "next-international/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getScopedI18n("linksNavigation");

  return {
    title: `Tarcisio | ${t("projects")}`,
  };
}

const ProjectsPage = async ({ params }: RouteParams) => {
  setStaticParamsLocale(params.locale);
  const locale = getCurrentLocale();
  const projects = await getProjects(locale);
  const t = await getScopedI18n("sectionTitles");

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
