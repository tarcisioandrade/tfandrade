import Footer from "@/components/Footer";
import MenuMobile from "@/components/MenuMobile";
import MobileBar from "@/components/MobileBar";
import Sidebar from "@/components/Sidebar";
import { locales } from "@/locale-config";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { notFound } from "next/navigation";

import "../globals.css";

import { DOMAIN_URL } from "@/constants";
import { I18nProviderClient } from "@/locales/client";
import { getCurrentLocale } from "@/locales/server";
import { setStaticParamsLocale } from "next-international/server";

const outfit = Outfit({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const locale = getCurrentLocale();

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
  params: { locale: string };
}) {
  if (!locales.includes(params.locale)) notFound();
  setStaticParamsLocale(params.locale);

  return (
    <html lang={params.locale}>
      <body className={outfit.className}>
        <I18nProviderClient locale={params.locale}>
          <MobileBar>
            <MenuMobile />
          </MobileBar>
          {/* DIV TO FIX:HEADER FIXED HEIGHT */}
          <div className="invisible h-16 lg:hidden" />
          <I18nProviderClient locale={params.locale}>
            <Sidebar />
          </I18nProviderClient>
          <main className="lg:pl-[250px]">{children}</main>
          <Footer />
        </I18nProviderClient>
      </body>
    </html>
  );
}
