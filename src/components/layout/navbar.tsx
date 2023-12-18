"use client";
import React from "react";
import { UserButton } from "@clerk/nextjs";
import { useCartStore } from "@/store/index";
import type { CartItem } from "@/store/index";

function CartIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  );
}
function Navbar() {
  const cartItems: CartItem[] = useCartStore((state) => state.cartItems);
  const RemoveItemsForCartItems = useCartStore((state) => state.removeFromCart);
  const ReduceItems = useCartStore((state) => state.reduceCountFromCart);
  const AddItem = useCartStore((state) => state.addToCart);
  return (
    <div className="navbar bg-base-100/40">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">mik store</a>
      </div>
      <div className="flex-none gap-4">
        <div className="drawer z-10">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label htmlFor="my-drawer" className="btn  drawer-button">
              <CartIcon />
              <span className="badge badge-sm indicator">
                {cartItems.reduce((total, item) => total + item.count, 0)}
              </span>
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              {cartItems.map((item) => {
                return (
                  <div key={item.id} className="my-4 ml-2 flex flex-col gap-4">
                    <img
                      src={item.imgUrl[0].url}
                      className="w-32 aspect-square object-cover"
                    ></img>
                    <h1 className="font-bold text-lg">{item.name}</h1>
                    <div className="flex gap-4">
                      <div className="flex gap-4">
                        <button onClick={() => ReduceItems(item.id)}>-</button>
                        <div className="badge badge-neutral"> {item.count}</div>

                        <button onClick={() => AddItem(item)}>+</button>
                      </div>
                      <div className="badge badge-success badge-outline ">
                        ${item.price.amount} USD
                      </div>
                    </div>
                    <button
                      className="btn  self-start"
                      onClick={() => RemoveItemsForCartItems(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className=" ">
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
