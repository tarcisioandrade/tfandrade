"use client";

import React from "react";
import LinkWithLocale from "./LinkWithLocale";
import { Code2, FolderGit2, Home, Mail } from "lucide-react";
import { useTranslations } from "next-intl";

type Props = {
  trigger?: () => void;
};

const MenuLinks = ({ trigger }: Props) => {
  const t = useTranslations("linksNavigation");

  // Motivo de eu não ter criado uma lista com os links e ter feito um map para nao repetir cada li:
  // O next-intl ainda não oferece uma typagem para o href
  return (
    <ul>
      <li className="last:border-b last:border-b-zinc-800 odd:border-y odd:border-y-zinc-800">
        <LinkWithLocale
          href="/"
          className="group block px-8 py-5 transition-all hover:bg-zinc-800/20"
          onClick={trigger}
        >
          <span className="flex items-center gap-3 text-zinc-500 transition-colors group-hover:text-white">
            <Home size={20} strokeWidth={1.5} />
            <p className="font-medium">{t("home")}</p>
          </span>
        </LinkWithLocale>
      </li>

      <li className="last:border-b last:border-b-zinc-800 odd:border-y odd:border-y-zinc-800">
        <LinkWithLocale
          href="/project"
          className="group block px-8 py-5 transition-all hover:bg-zinc-800/20"
          onClick={trigger}
        >
          <span className="flex items-center gap-3 text-zinc-500 transition-colors group-hover:text-white">
            <FolderGit2 size={20} strokeWidth={1.5} />
            <p className="font-medium">{t("projects")}</p>
          </span>
        </LinkWithLocale>
      </li>

      <li className="last:border-b last:border-b-zinc-800 odd:border-y odd:border-y-zinc-800">
        <LinkWithLocale
          href={{ pathname: "/skills", query: { category: "all" } }}
          className="group block px-8 py-5 transition-all hover:bg-zinc-800/20"
          onClick={trigger}
        >
          <span className="flex items-center gap-3 text-zinc-500 transition-colors group-hover:text-white">
            <Code2 size={20} strokeWidth={1.5} />
            <p className="font-medium">{t("knowledge")}</p>
          </span>
        </LinkWithLocale>
      </li>

      <li className="last:border-b last:border-b-zinc-800 odd:border-y odd:border-y-zinc-800">
        <LinkWithLocale
          href="/contact"
          className="group block px-8 py-5 transition-all hover:bg-zinc-800/20"
          onClick={trigger}
        >
          <span className="flex items-center gap-3 text-zinc-500 transition-colors group-hover:text-white">
            <Mail size={20} strokeWidth={1.5} />
            <p className="font-medium">{t("contact")}</p>
          </span>
        </LinkWithLocale>
      </li>
    </ul>
  );
};

export default MenuLinks;
