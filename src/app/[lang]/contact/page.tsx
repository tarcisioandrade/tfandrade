import React from "react";
import Form from "@/components/Form";
import Section from "@/components/Section";
import { contactFormSubmit } from "@/services/actions";
import { getProfileData } from "@/services/getProfileData";
import { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  return {
    title: "Tarcisio | Contato",
  };
}

const ContactPage = async () => {
  const email = (await getProfileData()).socials.find(
    (social) => social.title === "Email",
  )!;

  return (
    <Section className="mx-auto min-h-[calc(100vh_-100px)] max-w-[800px]">
      <h1 className="text-4xl">Vamos Conversar</h1>
      <p className="mt-4 text-zinc-500">
        Se você tem uma oportunidade para mim, por favor, me envie uma mensagem
        ou um e-mail para{" "}
        <Link
          href={email?.link}
          className="hover:text-neonGreen inline-block text-white transition-colors"
        >
          {/* O Link vem assim: mailto:email@gmail.com, por isso quebrei no ":" para pegar só o e-mail */}
          {email?.link.split(":")[1]}
        </Link>
      </p>
      <div className="mt-12">
        <Form formAction={contactFormSubmit} />
      </div>
    </Section>
  );
};

export default ContactPage;
