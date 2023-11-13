import React, { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = ComponentProps<"div"> & {
  children: ReactNode;
};

const Section = ({ children, ...props }: Props) => {
  return (
    <section className="border-b border-b-zinc-800">
      <div
        {...props}
        className={cn("px-4 py-6 sm:px-12 lg:p-12", props.className)}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
