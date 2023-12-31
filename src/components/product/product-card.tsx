import { IProducts } from "@/interfaces";
import { FormatCurrency } from "@/utils";
import { twMerge } from "tailwind-merge";
function ProductCard({
  imgUrl,
  name,
  description,
  price,
  id,
  tags,
  className,
  ...products
}: IProducts) {
  const ids = id?.slice(id.lastIndexOf("/") + 1, id.length);

  return (
    <article
      className={twMerge("card  overflow-hidden bg-base-100 border", className)}
    >
      <a href={`/products/${ids}`}>
        <figure className="relative">
          <img
            src={imgUrl?.src ?? (imgUrl?.[0]?.url || imgUrl)}
            alt={name}
            className="object-cover w-full"
          />
          {price && (
            <div className=" border absolute bg-secondary p-1 text-secondary-content   bottom-2 right-2">
              {FormatCurrency(parseInt(price?.amount), price?.currencyCode)}
            </div>
          )}
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>

          <div className="card-actions justify-end">
            <div className="flex  gap-2">
              {" "}
              {tags &&
                tags?.map((tag) => (
                  <div
                    key={tag}
                    className="badge badge-secondary badge-outline"
                  >
                    {tag}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </a>
    </article>
  );
}

export default ProductCard;
