import React from "react";
import User from "./user";
import Cart from "../ui/cart";
import SearchBar from "../ui/search/search-bar";

function Navbar() {
  return (
    <div className="navbar sticky top-0  z-20  bg-base-100 flex justify-around gap-2">
      <div className="hidden md:block">
        <a href="/" className="font-bold text-xl">
          MK
        </a>
      </div>
      <SearchBar />
      <div className="flex gap-2">
        <Cart />

        <div tabIndex={0} role="button" className="h-8 aspect-square">
          <User />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
