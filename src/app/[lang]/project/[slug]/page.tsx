import React from "react";
import BackButton from "@/components/BackButton";
import ButtonLink from "@/components/ButtonLink";
import Section from "@/components/Section";
import TechnologyTags from "@/components/TechnologyTags";
import { getProjectBySlug } from "@/services/getProjects";
import { urlForImage } from "@sanity-local/lib/image";
import Image from "next/image";
import { notFound } from "next/navigation";

const ProjectPage = async ({ params }: { params: { slug: string } }) => {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <Section>
      <BackButton />
      {/* GRID */}
      <div className="mt-6 grid grid-cols-1 grid-rows-[minmax(150px,_1fr)] gap-6 lg:mt-12 lg:gap-12 xl:grid-cols-2">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl">{project.projectTitle}</h1>
          <p className="text-lg font-medium uppercase tracking-wider text-zinc-500">
            {project.category.title}
          </p>
          <p className="text-lg leading-relaxed text-zinc-500">
            {project.description}
          </p>
          <div className="flex items-center gap-4">
            <ButtonLink
              className="text-white"
              target="_blank"
              href={project.projectLink}
            >
              Live Preview
            </ButtonLink>
            <ButtonLink
              className="text-white"
              target="_blank"
              href={project.projectGithubLink}
            >
              Repositório
            </ButtonLink>
          </div>
        </div>
        <div className="invisible hidden xl:block" />
        <div className="flex flex-col gap-4">
          {project.images.map((img) => (
            <div
              key={img.asset._ref}
              className="w-fit overflow-hidden rounded-lg"
            >
              <Image
                src={urlForImage(img.asset).format("webp").url()}
                alt={project.projectTitle}
                width={1029}
                height={625}
                className="transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
          ))}
        </div>
        <div>
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl">Tecnologias</h2>
            <TechnologyTags allTags={project.tags} category="language" />
            <TechnologyTags allTags={project.tags} category="frontend" />
            <TechnologyTags allTags={project.tags} category="mobile" />
            <TechnologyTags allTags={project.tags} category="backend" />
            <TechnologyTags allTags={project.tags} category="others" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ProjectPage;
