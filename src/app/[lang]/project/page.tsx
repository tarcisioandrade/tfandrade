import React from "react";
import ProjectItem from "@/components/ProjectItem";
import Section from "@/components/Section";
import { getProjects } from "@/services/getProjects";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  return {
    title: "Tarcisio | Projetos",
  };
}

const ProjectsPage = async () => {
  const projects = await getProjects();

  return (
    <Section>
      <h1 className="text-4xl">Projetos</h1>
      <div className="mt-12 flex flex-col gap-12 sm:grid sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectItem key={project._id} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default ProjectsPage;
