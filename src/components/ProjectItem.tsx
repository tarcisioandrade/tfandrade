import React from "react";
import LinkWithLocale from "./LinkWithLocale";
import { Project } from "@/interfaces/sanity";
import { urlForImage } from "@sanity-local/lib/image";
import Image from "next/image";

type Props = {
  project: Project;
};

const ProjectItem = ({ project }: Props) => {
  return (
    // @ts-expect-error
    // TODO: A Lib esta com o erro de typagem em rotas dinamicas ex: rota/[slug]
    <LinkWithLocale href={`/project/${project.slug}`} className="group block">
      <div className="overflow-hidden rounded-lg xl:max-h-[313px] xl:max-w-[448px]">
        <Image
          src={urlForImage(project.images[0]).format("webp").url()}
          alt={project.projectTitle}
          width={1155}
          height={932}
          className="transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <p className="mb-1 mt-6 text-xs font-semibold uppercase tracking-widest text-zinc-500">
        {project.category.title}
      </p>
      <p className="text-xl transition-colors group-hover:text-neonGreen">
        {project.projectTitle}
      </p>
    </LinkWithLocale>
  );
};

export default ProjectItem;
