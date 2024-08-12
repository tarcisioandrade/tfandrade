"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useScopedI18n } from "@/locales/client";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  const t = useScopedI18n("contactPage.form");

  return (
    <button
      type="submit"
      className={cn(
        "rounded border border-zinc-800 px-4 py-3 text-white transition-all duration-300 hover:bg-zinc-800/20",
        pending && "text-zinc-500 hover:bg-transparent",
      )}
      disabled={pending}
    >
      {pending ? t("buttonSending") : t("button")}
    </button>
  );
};

export default SubmitButton;
