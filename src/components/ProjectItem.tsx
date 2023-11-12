import React from "react";
import { Project } from "@/interfaces/sanity";
import { urlForImage } from "@sanity-local/lib/image";
import Image from "next/image";
import Link from "next/link";

type Props = {
  project: Project;
};

const ProjectItem = ({ project }: Props) => {
  return (
    <div>
      <Link href={`project/${project.slug}`} className="group block">
        <div className="overflow-hidden rounded-lg">
          <Image
            src={urlForImage(project.images[0])
              .width(1029)
              .height(625)
              .format("webp")
              .url()}
            alt={project.projectTitle}
            width={1029}
            height={625}
            className="transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>
        <p className="mb-1 mt-6 text-xs font-semibold uppercase tracking-widest text-zinc-500">
          {project.category.title}
        </p>
        <p className="text-xl transition-colors group-hover:text-green-500">
          {project.projectTitle}
        </p>
      </Link>
    </div>
  );
};

export default ProjectItem;
