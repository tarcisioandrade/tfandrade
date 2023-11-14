import MenuMobile from "@/components/MenuMobile";
import MobileBar from "@/components/MobileBar";
import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";

import "../globals.css";

import Footer from "@/components/Footer";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  description: "Site portfólio",
  title: "Tarcisio | Portfólio",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang}>
      <body className={outfit.className}>
        <MobileBar>
          <MenuMobile />
        </MobileBar>
        {/* DIV TO FIX:HEADER FIXED HEIGHT */}
        <div className="invisible h-16 lg:hidden" />
        <Sidebar />
        <main className="lg:pl-[calc(250px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
