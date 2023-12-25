import React from "react";
import User from "./user";
import Cart from "../ui/cart";

function Navbar() {
  return (
    <div className="navbar bg-base-100/40">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost text-xl">
          mik store
        </a>
      </div>
      <div className="flex-none gap-4">
        <Cart />
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className=" ">
            <User />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
