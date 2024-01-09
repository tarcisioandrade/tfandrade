import React from "react";
import { Skill } from "@/interfaces/sanity";
import { cn } from "@/lib/utils";
import { urlForImage } from "@sanity-local/lib/image";
import Image from "next/image";
import Link from "next/link";

type Props = {
  skill: Skill;
};

const SkillBadge = ({ skill }: Props) => {
  return (
    <Link
      href={skill.link ?? "#"}
      target={skill.link ? "_blank" : undefined}
      rel="noopener noreferrer"
      className={cn(
        "flex items-center gap-3 rounded-lg border border-zinc-800 p-4 transition-all duration-300 hover:bg-zinc-800/20",
        !skill.link && "pointer-events-none",
      )}
    >
      <Image
        src={urlForImage(skill.image.asset).format("webp").url()}
        alt={skill.title}
        width={36}
        height={36}
      />
      <div className="flex flex-col">
        <span className="text-xl">{skill.slug}</span>
        <span className="text-zinc-500">{skill.category.title}</span>
      </div>
    </Link>
  );
};

export default SkillBadge;
