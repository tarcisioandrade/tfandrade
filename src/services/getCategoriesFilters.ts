import { CategoryFilters } from "@/interfaces/sanity";
import { createQuery } from "@/lib/createQuery";
import { unstable_cache } from "next/cache";

export const getCategoriesFilters = unstable_cache(
  async (language: string = "pt") => {
    const locale = language.split("-")[0];

    const query = `*[_type == "tagCategory" && name != "others" && name != "fullstack" && name != "mobile"] {
      _id,
      name,
      'title': title.${locale}
    } `;

    const categories = await createQuery<CategoryFilters[]>(query);

    return categories;
  },
  ["categories-filters-data"],
  { revalidate: 3600 },
);
