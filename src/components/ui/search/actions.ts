"use server";
import { getProductFromSearch } from "@/utils";

export async function getDataFromSearch(prev: any, query: FormData) {
  const searchBy = query.get("query").toString();
  const products = await getProductFromSearch(searchBy);

  return products;
}
