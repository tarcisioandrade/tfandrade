"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  const t = useTranslations("buttons");

  return (
    <button
      className="group flex h-12 items-center gap-1 text-zinc-500 transition-colors hover:text-neonGreen"
      onClick={() => router.back()}
    >
      <ArrowLeft size={20} strokeWidth={1.5} />
      <span className="transition-transform group-hover:translate-x-1">
        {t("back")}
      </span>
    </button>
  );
};

export default BackButton;
