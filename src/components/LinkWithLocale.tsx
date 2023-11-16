import React, { ComponentProps } from "react";
import { AppPathnames } from "@/locale-config";
import { LinkI18n } from "@/navigation";

export default function LinkWithLocale<Pathname extends AppPathnames>({
  href,
  ...rest
}: ComponentProps<typeof LinkI18n<Pathname>>) {
  return <LinkI18n href={href} {...rest} />;
}
