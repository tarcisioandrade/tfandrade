import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";

type Props = LinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: ReactNode;
  };

const ButtonLink = ({ children, href, className, ...props }: Props) => {
  return (
    <Link
      href={href}
      className={cn(
        "flex h-12 w-full items-center justify-center rounded border border-zinc-800 px-4 text-zinc-500 transition-all duration-300 hover:bg-zinc-800/20 hover:text-white",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
