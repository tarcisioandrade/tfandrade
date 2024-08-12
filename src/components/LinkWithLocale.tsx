"use client";

import { UrlObject } from "url";
import React, { ComponentProps } from "react";
import { useCurrentLocale } from "@/locales/client";
import Link from "next/link";

export default function LinkWithLocale({
  href,
  ...rest
}: ComponentProps<typeof Link>) {
  const locale = useCurrentLocale();

  const BASE_PATH_WITH_LOCALE = `/${locale}`;

  const customHref: UrlObject | string =
    typeof href === "object"
      ? {
          ...href,
          pathname: BASE_PATH_WITH_LOCALE + href.pathname,
        }
      : BASE_PATH_WITH_LOCALE + href;

  return <Link href={customHref} {...rest} />;
}
