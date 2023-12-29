"use server";
import { getProductFromSearch } from "@/utils";
import { cookies } from "next/headers";
export async function getDataFromSearch(prev, query: FormData) {
  const searchBy = query.get("query");
  const products = await getProductFromSearch(searchBy);

  console.log({ products });
  return products;
}
