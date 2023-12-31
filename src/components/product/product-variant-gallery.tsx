import {
  generateRandomNumbersBasedOnId,
  getProducts,
  productsAdapter,
} from "@/utils";
import React from "react";
import ProductCard from "./product-card";

async function ProductVariantGallery({
  id,
  variants,
}: {
  id: string;
  variants: any[];
}) {
  const randomNumbers = generateRandomNumbersBasedOnId(variants?.length - 1);

  return randomNumbers?.map((n) => {
    return (
      <ProductCard
        key={n}
        className="animate-fade-up"
        {...variants?.[n]}
      ></ProductCard>
    );
  });
}

export default ProductVariantGallery;
