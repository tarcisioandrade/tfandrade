import React, { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = ComponentProps<"a"> & {
  children: ReactNode;
  href: string;
  className?: string;
};

const ButtonLink = ({ children, href, className }: Props) => {
  return (
    <Link
      href={href}
      className={cn(
        "flex h-12 items-center justify-center rounded border border-zinc-800 px-4 text-zinc-500 transition-all hover:bg-zinc-800/20 hover:text-white",
        className,
      )}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
