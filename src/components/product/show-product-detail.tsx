import {
  productsAdapter,
  getProduct,
  generateRandomNumbers,
  getProducts,
  FormatCurrency,
} from "@/utils";
import ProductCardSkeleton from "./product-card-skeleton";
import ProductCard from "./product-card";
import { Suspense } from "react";
Image;

import ProductVariants from "./product-variants";
import AddCartBtn from "../ui/cart/add-cart-btn";
import Image from "next/image";
import { ProductGallery } from "./product-gallery";
async function ShowProductInDetail({ id, query }: { id: string; query: any }) {
  const selectedOptions = Object.entries(query).map(([key, value]) => ({
    name: key,
    value,
  }));

  const json = await getProduct(id, selectedOptions);
  const { product } = json.data;

  const variants = productsAdapter(await getProducts());

  const randomNumbers = generateRandomNumbers(variants?.length - 1);
  const combinations: any = product?.variants?.edges?.map(
    ({ node: variant }) => ({
      id: variant.id,
      availableForSale: variant.availableForSale,
      // Adds key / value pairs for each variant (ie. "color": "Black" and "size": 'M").
      ...variant.selectedOptions?.reduce(
        (accumulator, option) => ({
          ...accumulator,
          [option.name.toLowerCase()]: option.value,
        }),
        {},
      ),
    }),
  );
  console.dir({ combinations }, { depth: null });
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="  flex lg:flex-nowrap flex-wrap gap-2 ">
            <ProductGallery product={product} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-4 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest ">
                {product?.brand}
              </h2>
              <h1 className="text-base-content text-3xl title-font font-medium mb-1">
                {product?.title}
              </h1>

              <p
                dangerouslySetInnerHTML={{ __html: product?.descriptionHtml }}
                className="pl-5 text-base  text-base-content antialiased"
              ></p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 text-base-content mb-5">
                <ProductVariants product={product} />
              </div>
              <div className="flex flex-col mt-6 pb-5 border-b-2 border-gray-100 text-base-content mb-5">
                {product?.variantBySelectedOptions && (
                  <img
                    src={product?.variantBySelectedOptions?.image?.url}
                    alt={product?.title}
                    title={product?.variantBySelectedOptions?.title}
                    className="w-16 h-16 rounded-full border border-secondary mr-4 shadow-xl aspect-square object-cover"
                  />
                )}
              </div>
              <div className="flex gap-3">
                {product?.tags?.map((tag) => (
                  <span
                    className="badge badge-secondary badge-outline"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex mt-2">
                <span className="title-font font-medium text-2xl text-base-content">
                  {FormatCurrency(
                    product?.priceRange?.maxVariantPrice?.amount,
                    product?.priceRange?.maxVariantPrice?.currencyCode,
                  )}
                </span>
              </div>
              <AddCartBtn combinations={combinations} />
            </div>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-4 gap-4 px-12">
        {randomNumbers.map((n) => {
          return (
            <Suspense fallback={<ProductCardSkeleton />}>
              <ProductCard key={n} {...variants?.[n]}></ProductCard>
            </Suspense>
          );
        })}
      </section>
    </div>
  );
}

export default ShowProductInDetail;
