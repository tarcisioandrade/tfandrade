import React, { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  children: ReactNode;
  href: string;
  className?: string;
  target?: React.HTMLAttributeAnchorTarget;
};

const ButtonLink = ({ children, href, className, ...props }: Props) => {
  return (
    <Link
      href={href}
      className={cn(
        "flex h-12 w-full items-center justify-center rounded border border-zinc-800 px-4 text-zinc-500 transition-all hover:bg-zinc-800/20 hover:text-white",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
