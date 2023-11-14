"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      className="hover:text-neonGreen group flex h-12 items-center gap-1 text-zinc-500 transition-colors"
      onClick={() => router.back()}
    >
      <ArrowLeft size={20} strokeWidth={1.5} />
      <span className="transition-transform group-hover:translate-x-1">
        Voltar
      </span>
    </button>
  );
};

export default BackButton;
