"use client";

import React from "react";
import { CategoryFilters } from "@/interfaces/sanity";
import { cn } from "@/lib/utils";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { FilterIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Props = {
  filtersOptions: CategoryFilters[];
};

const SkillsFilter = ({ filtersOptions }: Props) => {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const t = useTranslations("filter");

  const queryCategory = searchParams.get("category");

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("category", term);
    } else {
      params.delete("category");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  const categories: CategoryFilters[] = [
    { _id: "allFilter", name: "all", title: t("filterAllOption") },
    ...filtersOptions,
  ];

  return (
    <>
      <div className="lg:hidden">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button className="mt-4 flex items-center gap-2 rounded-lg border border-zinc-800 px-4 py-2 transition-all duration-300 hover:bg-zinc-800/20">
              <FilterIcon className="h-4 w-4" />
              {t("filterButton")}
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content className="ml-6 mt-1 flex min-w-[220px] flex-col rounded-lg border border-zinc-800 bg-darker px-4 py-2 sm:ml-12 lg:ml-0">
              {categories.map((cat) => (
                <DropdownMenu.Item
                  key={cat._id}
                  className={cn(
                    "rounded-lg transition-all duration-300 hover:bg-zinc-800/20",
                    ((!queryCategory && cat.name === "all") ||
                      queryCategory === cat.name) &&
                      "bg-green-700/10 text-green-500",
                  )}
                >
                  <button
                    className="block w-full px-4 py-2 text-left"
                    onClick={() => handleSearch(String(cat.name))}
                  >
                    {cat.title}
                  </button>
                </DropdownMenu.Item>
              ))}
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>

      <div className="mt-4 hidden items-center gap-2 lg:flex">
        {categories.map((cat) => (
          <button
            className={cn(
              "block rounded-lg border border-zinc-800 px-4 py-2 transition-all duration-300 hover:bg-zinc-800/20",
              ((!queryCategory && cat.name === "all") ||
                queryCategory === cat.name) &&
                "bg-green-700/10 text-green-500",
            )}
            onClick={() => handleSearch(String(cat.name))}
            key={cat._id}
          >
            {cat.title}
          </button>
        ))}
      </div>
    </>
  );
};

export default SkillsFilter;
