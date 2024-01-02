import { FormatCurrency } from "@/utils";
import { Sheet, SheetTrigger, SheetContent } from "../sheet";
import DeleteItemCart from "./delete-item-cart";
import EditItemQuantityButton from "./edit-cart-btn";
import { CartProducts } from "@/interfaces/cart";

export const ShoppingBag = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="none"
      stroke="#000000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007M8.625 10.5a.375.375 0 1 1-.75 0a.375.375 0 0 1 .75 0m7.5 0a.375.375 0 1 1-.75 0a.375.375 0 0 1 .75 0"
    ></path>
  </svg>
);
export const CartDrawer = ({
  cartProducts,
}: {
  cartProducts: CartProducts;
}) => {
  return (
    <Sheet>
      <div className="drawer-content ">
        <SheetTrigger asChild>
          <button className=" drawer-button" aria-label="open sidebar">
            <label
              htmlFor="my-drawer"
              className="cursor-pointer flex justify-center items-center"
              aria-label="cart"
            >
              <ShoppingBag className="h-6 w-6" />
              {cartProducts?.totalQuantity && (
                <span
                  aria-label="cart items"
                  className="badge badge-sm indicator"
                >
                  {cartProducts?.totalQuantity}
                </span>
              )}
            </label>
          </button>
        </SheetTrigger>
      </div>
      <SheetContent className="overflow-y-auto bg-base-100 dark:bg-base-100">
        <div className="flex flex-col gap-4 ">
          {cartProducts?.lines?.edges?.map(({ node }) => (
            <div
              className="relative flex gap-2 mt-5"
              data-gid={node?.merchandise?.id}
              key={node?.merchandise?.id}
            >
              <DeleteItemCart merchandiseId={node?.id} />

              <img
                src={node?.merchandise?.image?.url}
                className="w-24 aspect-square object-cover rounded-md"
                alt=""
              />
              <section className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <h2 className="text-lg font-bold text-base-content">
                    {node.merchandise?.product?.title}
                  </h2>
                  <p>{node?.merchandise?.title}</p>
                  <span>
                    {FormatCurrency(
                      parseFloat(
                        cartProducts?.estimatedCost?.totalAmount?.amount,
                      ),
                      node?.estimatedCost?.totalAmount?.currencyCode,
                    )}
                  </span>
                </div>
                <span className="border-secondary rounded-badge border flex gap-3 justify-center items-center">
                  <EditItemQuantityButton item={node} type="minus" />
                  <span className="text-lg font-bold text-secondary">
                    {node?.quantity}
                  </span>
                  <EditItemQuantityButton item={node} type="plus" />
                </span>
              </section>
            </div>
          ))}
        </div>

        <section className="flex flex-col self-center  mt-10">
          <div className="flex justify-between items-center">
            <h2 className=" text-lg">Subtotal</h2>
            <p className="flex gap-2 font-bold">
              <span>
                {FormatCurrency(
                  parseFloat(cartProducts?.estimatedCost?.totalAmount?.amount),
                  cartProducts?.estimatedCost?.subtotalAmount?.currencyCode,
                )}
              </span>
            </p>
          </div>
          <div className="divider"></div>
          <div className="flex justify-between items-center">
            <h2 className=" text-lg">Taxes</h2>
            <p className="flex gap-2 font-bold">
              <span>
                {FormatCurrency(
                  parseFloat(cartProducts?.estimatedCost?.totalAmount?.amount),
                  cartProducts?.estimatedCost?.totalTaxAmount?.currencyCode,
                )}
              </span>
            </p>
          </div>
          <div className="divider"></div>
          <div className="flex justify-between items-center">
            <h2 className=" text-lg">Total</h2>
            <p className="flex gap-2 font-bold">
              <span>
                {FormatCurrency(
                  parseFloat(cartProducts?.estimatedCost?.totalAmount?.amount),
                  cartProducts?.estimatedCost?.totalAmount?.currencyCode,
                )}
              </span>
            </p>
          </div>
          <div className="divider"></div>
          <a
            href={cartProducts?.checkoutUrl}
            className="btn btn-primary btn-block "
            disabled={cartProducts?.lines.edges.length ? false : true}
          >
            Checkout
          </a>
        </section>
      </SheetContent>
    </Sheet>
  );
};
