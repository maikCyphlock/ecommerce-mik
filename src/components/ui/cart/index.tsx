import React from "react";
import { CartDrawer } from "./cart-drawer";
import { getCart, getProductsFromCart } from "@/utils";
import { cookies } from "next/headers";

async function index() {
  let cartProducts;
  const cartId = cookies().get("cartId")?.value;

  if (cartId) {
    cartProducts = await getProductsFromCart(cartId);
    cartProducts = cartProducts?.data?.cart;
  }
  return <CartDrawer cartProducts={cartProducts} />;
}

export default index;
