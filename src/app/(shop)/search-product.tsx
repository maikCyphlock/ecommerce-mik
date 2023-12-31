import { getProductFromSearch } from "@/utils";
import React from "react";
import ProductCard from "@/components/product/product-card";
async function SearchProduct({ query }) {
  if (!query) return null;
  // create a debounce function

  const { data } = await getProductFromSearch(query);
  const nodes = data?.search?.edges?.map((node) => node);
  return (
    <div className="grid justify-items-center grid-flow-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-12 mb-32 p-2">
      {nodes.length > 0
        ? nodes.map(({ node }) => (
            <ProductCard
              key={node?.id}
              id={node?.id}
              name={node?.title}
              imgUrl={node?.images?.nodes?.[0]?.url}
            />
          ))
        : "no products found"}
    </div>
  );
}

export default SearchProduct;
