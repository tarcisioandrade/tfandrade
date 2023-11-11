"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      className="group flex h-12 items-center gap-1  px-2 text-zinc-500 transition-colors hover:text-green-500"
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
