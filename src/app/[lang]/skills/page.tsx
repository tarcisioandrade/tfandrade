import React from "react";
import Section from "@/components/Section";
import SkillBadge from "@/components/SkillBadge";
import { getSkills } from "@/services/getSkills";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  return {
    title: "Tarcisio | Conhecimentos",
  };
}

const SkillPage = async ({ params }: { params: { lang: string } }) => {
  const skills = await getSkills(params.lang);

  return (
    <Section className="min-h-[calc(100vh_-100px)]">
      <h1 className="text-4xl">Tecnologias e Conhecimentos</h1>
      <div className="mt-12 flex flex-col gap-6 sm:grid sm:grid-cols-2 xl:grid-cols-4">
        {skills.map((skill) => (
          <SkillBadge key={skill._id} skill={skill} />
        ))}
      </div>
    </Section>
  );
};

export default SkillPage;
