import React from "react";
import Form from "@/components/Form";
import Section from "@/components/Section";
import { getScopedI18n } from "@/locales/server";
import { contactFormSubmit } from "@/services/actions";
import { getProfileData } from "@/services/getProfileData";
import { Metadata } from "next";
import { setStaticParamsLocale } from "next-international/server";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getScopedI18n("linksNavigation");

  return {
    title: `Tarcisio | ${t("contact")}`,
  };
}

const ContactPage = async ({ params }: { params: { locale: string } }) => {
  setStaticParamsLocale(params.locale);

  const email = (await getProfileData()).socials.find(
    (social) => social.title === "Email",
  )!;
  const t = await getScopedI18n("contactPage");

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
          {email?.link.split(":")[1]}.
        </Link>
      </p>
      <div className="mt-12">
        <Form formAction={contactFormSubmit} />
      </div>
    </Section>
  );
};

export default ContactPage;
