import React from "react";
import ProductCard from "./product-card";
import { productsAdapter, getProducts } from "@/utils";

async function ShowProduct({ id }) {
  const products = await getProducts();

  return (
    <div className="bg-base-100" id={id}>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-rows-2 gap-4 p-4 ">
        {productsAdapter(products)?.map((product) => {
          return (
            <ProductCard
              {...product}
              key={product.id}
              imgUrl={product.imgUrl}
              name={product.name}
              description={product.description}
              price={product.price}
              id={product.id}
              category={product.category}
            ></ProductCard>
          );
        })}
      </div>
    </div>
  );
}

export default ShowProduct;
