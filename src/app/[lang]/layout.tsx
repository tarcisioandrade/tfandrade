import Footer from "@/components/Footer";
import MenuMobile from "@/components/MenuMobile";
import MobileBar from "@/components/MobileBar";
import Sidebar from "@/components/Sidebar";
import { locales } from "@/locale-config";
import type { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { getLocale, unstable_setRequestLocale } from "next-intl/server";
import { Outfit } from "next/font/google";
import { notFound } from "next/navigation";

import "../globals.css";

import { DOMAIN_URL } from "@/constants";

const outfit = Outfit({ subsets: ["latin"] });

export async function generateMetadata({
  params,
}: {
  params: { slug: string; lang: string };
}): Promise<Metadata> {
  const locale = await getLocale();

  return {
    description: "Site Portfólio",
    title: "Tarcisio Andrade",
    metadataBase: new URL(String(DOMAIN_URL)),
    openGraph: {
      images: "/ogdefault.jpg",
      title: "Tarcisio Andrade",
      description: "Site Portfólio",
      type: "website",
      alternateLocale: locales.filter((l) => l !== locale),
      siteName: "Tarcisio Andrade",
      url: DOMAIN_URL,
    },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  if (!locales.includes(params.lang)) notFound();

  // No momento é necessario usar isso em todas os layouts e pages para poder gerar páginas staticas na build;
  // Saiba mais no link: https://next-intl-docs.vercel.app/docs/getting-started/app-router#static-rendering
  unstable_setRequestLocale(params.lang);
  const messages = useMessages();

  return (
    <html lang={params.lang}>
      <body className={outfit.className}>
        <NextIntlClientProvider messages={messages}>
          <MobileBar>
            <MenuMobile />
          </MobileBar>
          {/* DIV TO FIX:HEADER FIXED HEIGHT */}
          <div className="invisible h-16 lg:hidden" />
          <Sidebar />
          <main className="lg:pl-[250px]">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
