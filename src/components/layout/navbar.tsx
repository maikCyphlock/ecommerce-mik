import React from "react";
import User from "./user";
import Cart from "../ui/cart";
import SearchBar from "@/components/ui/search/search-bar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical20Solid } from "../ui/icons/hero-icons";

function Navbar() {
  return (
    <div className="navbar sticky top-0  z-20  bg-base-100 flex md:justify-around justify-center gap-2">
      <div className="hidden md:block">
        <a href="/" className="font-bold text-xl">
          MK
        </a>
      </div>
      <SearchBar />
      <div className="hidden md:flex gap-2 items-stretch">
        <Cart />

        <div tabIndex={0} role="button" className="h-8 aspect-square">
          <User />
        </div>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger className="md:hidden">
          <EllipsisVertical20Solid className="w-6 h-6" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className=" md:hidden bg-base-100 dark:bg-base-100 border-base-200 text-base-content dark:text-base-content">
          <DropdownMenuLabel>
            {" "}
            <Cart />
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem></DropdownMenuItem>
          <DropdownMenuItem className="gap-1">
            <User />
            Login
          </DropdownMenuItem>

          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default Navbar;
