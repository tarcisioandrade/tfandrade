import React, { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = ComponentProps<"div"> & {
  children: ReactNode;
};

const Section = ({ children, ...props }: Props) => {
  return (
    <section className="border-b border-b-zinc-800 lg:px-12">
      <div
        {...props}
        className={cn(
          "mx-auto max-w-[1440px] px-6 py-8 sm:p-12 lg:px-0 lg:py-12",
          props.className,
        )}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
