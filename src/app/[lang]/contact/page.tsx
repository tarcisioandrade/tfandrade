import React from "react";
import Form from "@/components/Form";
import Section from "@/components/Section";
import { contactFormSubmit } from "@/services/actions";
import { getProfileData } from "@/services/getProfileData";
import { Metadata } from "next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const t = await getTranslations("linksNavigation");

  return {
    title: `Tarcisio | ${t("contact")}`,
  };
}

const ContactPage = async ({ params }: { params: { lang: string } }) => {
  unstable_setRequestLocale(params.lang);

  const email = (await getProfileData()).socials.find(
    (social) => social.title === "Email",
  )!;
  const t = await getTranslations("contactPage");

  return (
    <Section className="mx-auto min-h-[calc(100vh_-100px)] max-w-[800px]">
      <h1 className="text-4xl">{t("title")}</h1>
      <p className="mt-4 text-zinc-500">
        {t("heroMessage")}{" "}
        <Link
          href={email?.link}
          className="inline-block text-white transition-colors hover:text-neonGreen"
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
