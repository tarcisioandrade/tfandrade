import React, { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = ComponentProps<"section"> & {
  children: ReactNode;
};

const Section = ({ children, ...props }: Props) => {
  return (
    <div className="border-b border-b-zinc-800">
      <section
        {...props}
        className={cn("px-4 py-6 sm:px-12 lg:p-12", props.className)}
      >
        {children}
      </section>
    </div>
  );
};

export default Section;
