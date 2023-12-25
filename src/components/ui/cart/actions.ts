"use server";
import { cartCreate, getCart, addToCart } from "@/utils";
import { revalidatePath, revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { removeProductFromCart } from "@/utils/index";
export async function addItemToCart(prevState: any, selectedVariantId: string) {
  let cartId = cookies().get("cartId")?.value;
  let cart;
  if (cartId) {
    cart = await getCart();
  }
  if (!cartId) {
    cart = await cartCreate();
    cartId = await cart;
    cookies().set("cartId", cartId);
  }

  try {
    await addToCart(cartId, [
      { merchandiseId: selectedVariantId, quantity: 1 },
    ]);
    revalidatePath("/");
  } catch (e) {
    return "Error adding item to cart";
  }
}

export async function removeItem(prevState: any, lineId: string) {
  const cartId = cookies().get("cartId")?.value;

  console.log(lineId);

  if (!cartId) {
    return "Missing cart ID";
  }

  try {
    const res = await removeProductFromCart(cartId, [lineId]);

    console.dir({ res }, { depth: null });
    revalidateTag("cart");
  } catch (e) {
    return "Error removing item from cart";
  }
}
