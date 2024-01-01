import { generateRandomNumbersBasedOnId } from "@/utils";
import React from "react";
import ProductCard from "./product-card";

async function ProductVariantGallery({ variants }: { variants: any[] }) {
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
