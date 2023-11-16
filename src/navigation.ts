import { locales, pathnames } from "@/locale-config";
import { createLocalizedPathnamesNavigation } from "next-intl/navigation";

export const {
  Link: LinkI18n,
  usePathname,
  useRouter,
} = createLocalizedPathnamesNavigation({
  locales,
  pathnames,
});
