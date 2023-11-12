import React from "react";
import ButtonLink from "./ButtonLink";
import { Category, Tag } from "@/interfaces/sanity";
import { urlForImage } from "@sanity-local/lib/image";
import Image from "next/image";

type Props = {
  allTags: Tag[];
  category: Category;
};

const TechnologyTags = ({ category, allTags }: Props) => {
  const tags = allTags.filter((categ) => categ.category?.name === category);

  if (!tags.length) return null;
  return (
    <>
      <p className="uppercase tracking-wide text-zinc-400">
        {tags[0].category.title}
      </p>
      <div className="grid grid-cols-2 gap-4 sm:w-fit sm:grid-cols-3 xl:flex xl:flex-wrap">
        {tags.map((tag) => (
          <ButtonLink
            href={tag.link ?? "#"}
            key={tag._id}
            target={tag.link ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="flex w-full items-center justify-stretch gap-2 text-sm text-white sm:w-[190px]"
          >
            {tag.image && (
              <Image
                src={urlForImage(tag.image).format("webp").url()}
                alt={tag.title}
                width={20}
                height={20}
              />
            )}

            {tag.title}
          </ButtonLink>
        ))}
      </div>
    </>
  );
};

export default TechnologyTags;
