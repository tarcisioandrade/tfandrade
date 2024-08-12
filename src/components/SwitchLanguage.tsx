"use client";

import React from "react";
import { useChangeLocale } from "@/locales/client";
import * as Popover from "@radix-ui/react-popover";
import { Globe } from "lucide-react";

type Props = {
  defaultLocale: string;
};

const SwitchLanguage = ({ defaultLocale }: Props) => {
  const changeLocale = useChangeLocale();

  function onSelectChange(locale: "en" | "pt") {
    changeLocale(locale);
  }

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="flex h-10 w-10 items-center justify-center rounded border border-zinc-800 text-zinc-500 transition-all duration-300 hover:bg-zinc-800/20">
          <Globe size={20} strokeWidth={1.5} />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="w-[260px] rounded bg-zinc-900 p-3 shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] will-change-[transform,opacity] data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=top]:animate-slideDownAndFade"
          sideOffset={5}
          align="end"
        >
          <ul>
            {defaultLocale === "pt" ? (
              <li
                className="block cursor-pointer rounded border border-zinc-800 p-3 text-zinc-200 transition-all hover:bg-zinc-800/20"
                onClick={() => onSelectChange("en")}
              >
                English (US)
              </li>
            ) : (
              <li
                className="block cursor-pointer rounded border border-zinc-800 p-3 text-zinc-200 transition-all hover:bg-zinc-800/20"
                onClick={() => onSelectChange("pt")}
              >
                Português (BR)
              </li>
            )}
          </ul>
          <Popover.Arrow className="fill-zinc-900" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default SwitchLanguage;
