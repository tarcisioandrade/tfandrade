import { client } from "@sanity-local/lib/client";
import { groq } from "next-sanity";

export async function createQuery<T>(query: string) {
  const res: T = await client.fetch(groq`${query}`);

  return res;
}
