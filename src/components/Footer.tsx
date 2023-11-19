import React from "react";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");

  return (
    <footer className="h-24 lg:pl-[250px]">
      <div className="flex h-full items-center justify-center gap-12 px-4 sm:px-12">
        <p className="text-zinc-500">
          © 2023 {t("developer")}{" "}
          <strong className="text-white">{t("me")}</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
