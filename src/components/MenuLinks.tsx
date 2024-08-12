"use client";

import React from "react";
import LinkWithLocale from "./LinkWithLocale";
import { cn } from "@/lib/utils";
import { useScopedI18n } from "@/locales/client";
import { Code2, FolderGit2, Home, Mail } from "lucide-react";
import { usePathname } from "next/navigation";

type Props = {
  trigger?: () => void;
};

const MenuLinks = ({ trigger }: Props) => {
  const t = useScopedI18n("linksNavigation");
  const pathname = usePathname();

  const isHomePage =
    !pathname.includes("project") &&
    !pathname.includes("skills") &&
    !pathname.includes("contact");

  return (
    <ul>
      <li className="last:border-b last:border-b-zinc-800 odd:border-y odd:border-y-zinc-800">
        <LinkWithLocale
          href="/"
          className={cn(
            "group block px-8 py-5 text-zinc-500 transition-all hover:bg-zinc-800/20",
            isHomePage && "bg-zinc-800/20 text-white",
          )}
          onClick={trigger}
        >
          <span
            className={cn(
              "flex items-center gap-3 transition-colors group-hover:text-white",
            )}
          >
            <Home size={20} strokeWidth={1.5} />
            <p className="font-medium">{t("home")}</p>
          </span>
        </LinkWithLocale>
      </li>

      <li className="last:border-b last:border-b-zinc-800 odd:border-y odd:border-y-zinc-800">
        <LinkWithLocale
          href="/project"
          className={cn(
            "group block px-8 py-5 text-zinc-500 transition-all hover:bg-zinc-800/20",
            pathname.includes("project") && "bg-zinc-800/20 text-white",
          )}
          onClick={trigger}
        >
          <span className="flex items-center gap-3 transition-colors group-hover:text-white">
            <FolderGit2 size={20} strokeWidth={1.5} />
            <p className="font-medium">{t("projects")}</p>
          </span>
        </LinkWithLocale>
      </li>

      <li className="last:border-b last:border-b-zinc-800 odd:border-y odd:border-y-zinc-800">
        <LinkWithLocale
          href={{ pathname: "/skills" }}
          className={cn(
            "group block px-8 py-5 text-zinc-500 transition-all hover:bg-zinc-800/20",
            pathname.includes("skills") && "bg-zinc-800/20 text-white",
          )}
          onClick={trigger}
        >
          <span className="flex items-center gap-3 transition-colors group-hover:text-white">
            <Code2 size={20} strokeWidth={1.5} />
            <p className="font-medium">{t("knowledge")}</p>
          </span>
        </LinkWithLocale>
      </li>

      <li className="last:border-b last:border-b-zinc-800 odd:border-y odd:border-y-zinc-800">
        <LinkWithLocale
          href="/contact"
          className={cn(
            "group block px-8 py-5 text-zinc-500 transition-all hover:bg-zinc-800/20",
            pathname.includes("contact") && "bg-zinc-800/20 text-white",
          )}
          onClick={trigger}
        >
          <span className="flex items-center gap-3 transition-colors group-hover:text-white">
            <Mail size={20} strokeWidth={1.5} />
            <p className="font-medium">{t("contact")}</p>
          </span>
        </LinkWithLocale>
      </li>
    </ul>
  );
};

export default MenuLinks;
