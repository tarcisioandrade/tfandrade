import { Pathnames } from "next-intl/navigation";

export const locales = ["pt-BR", "en-US"];

export const pathnames = {
  "/": "/",
  "/contact": "/contact",
  "/project": "/project",
  "/project/[slug]": "/project/[slug]",
  "/skills": "/skills",
} satisfies Pathnames<typeof locales>;

export type AppPathnames = keyof typeof pathnames;
