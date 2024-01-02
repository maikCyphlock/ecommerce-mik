import { FormatCurrency } from "@/utils";
import { Sheet, SheetTrigger, SheetContent } from "../sheet";
import DeleteItemCart from "./delete-item-cart";
import EditItemQuantityButton from "./edit-cart-btn";
import { CartProducts } from "@/interfaces/cart";
import { ShoppingBag } from "../icons/hero-icons";
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
            disabled={!cartProducts?.lines.edges.length}
          >
            Checkout
          </a>
        </section>
      </SheetContent>
    </Sheet>
  );
};
