"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";

function ProductVariants({ product }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );
  const handleOptionChange = (event) => {
    const { name, value } = event.target;
    router.push(pathname + "?" + createQueryString(name, value), {
      scroll: false,
    });
  };

  return (
    <div className="flex ml-6  lg:flex-col gap-6">
      {product?.options?.map((option) => (
        <section key={option.name}>
          <span className="mr-3 font-bold">{option.name}</span>
          <div className="relative">
            <div className="flex  gap-3">
              {option.values.map((value) => (
                <div key={value.id} className="flex items-center gap-2">
                  <span className="label-text">{value}</span>
                  <input
                    type="radio"
                    title={option.name}
                    name={`${option.name}`}
                    value={value}
                    className="radio checked:bg-secondary"
                    onChange={handleOptionChange}
                    checked={searchParams.get(option.name) === value}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductVariants;
