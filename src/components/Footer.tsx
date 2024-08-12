import React from "react";
import { getScopedI18n } from "@/locales/server";

const Footer = async () => {
  const t = await getScopedI18n("footer");

  return (
    <footer className="h-24 lg:pl-[250px]">
      <div className="flex h-full items-center justify-center gap-12 px-4 sm:px-12">
        <p className="text-zinc-500">
          © {new Date().getFullYear()} {t("developer")}{" "}
          <strong className="text-white">{t("me")}</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
