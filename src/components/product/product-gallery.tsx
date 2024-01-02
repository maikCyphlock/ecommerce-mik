"use client";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Image from "next/image";
import { useState } from "react";

export function ProductGallery({ product }) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <>
      <ScrollArea>
        <div className="flex lg:flex-col gap-2 ">
          {product?.images?.nodes?.map((node) => (
            <Image
              key={node?.id}
              alt={product?.title}
              src={node?.src}
              width={node?.width || 800}
              height={node?.height || 800}
              loading="lazy"
              id={node?.src}
              onClick={() =>
                setActiveImage(product?.images?.nodes?.indexOf(node))
              }
              className={`h-32 w-32 aspect-square object-cover object-center rounded border hover:border-secondary transition-colors duration-200 cursor-pointer ${
                activeImage === product?.images?.nodes?.indexOf(node) &&
                "border-neutral"
              }`}
            />
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="hidden lg:block" />
      </ScrollArea>
      <div>
        <Image
          alt={product?.title}
          src={product?.images?.nodes?.[activeImage]?.src}
          id={product?.images?.nodes?.[activeImage]?.src}
          width={800}
          height={800}
          className="h-full object-cover object-center rounded border  transition-colors duration-200"
        />
      </div>
    </>
  );
}
