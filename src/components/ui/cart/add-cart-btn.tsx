"use client";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import { addItemToCart } from "./actions";
import { useSearchParams } from "next/navigation";

function AddCartBtn({ combinations }: {}) {
  const searchParams = useSearchParams()!;
  const color = searchParams.get("Color");
  const size = searchParams.get("Size");

  const [cart, formAction] = useFormState(addItemToCart, null);
  function FindVariant(colorParam, sizeParam) {
    const productVariant = combinations.filter(
      (variant) => variant.color === colorParam && variant.size === sizeParam,
    )?.[0];
    const actionWithVariant = formAction.bind(null, productVariant?.id);

    return actionWithVariant;
  }

  return (
    <form className="flex justify-end" action={FindVariant(color, size)}>
      <SubmitButton />
    </form>
  );
}

const SubmitButton = () => {
  const searchParams = useSearchParams()!;
  const { pending } = useFormStatus();
  const color = searchParams.get("Color");
  const size = searchParams.get("Size");
  const handleDisabled = () => {
    if (pending) {
      return true;
    }
    if (!color || !size) {
      return true;
    }
    return false;
  };

  return (
    <button
      onClick={(e: React.FormEvent<HTMLButtonElement>) => {
        if (pending) e.preventDefault();
      }}
      disabled={handleDisabled()}
      className="btn btn-success self-end"
    >
      {pending ? (
        <span className="loading loading-spinner "></span>
      ) : (
        <HeroiconsPlusCircle className="w-8 h-8" />
      )}
      add to cart
    </button>
  );
};
export const HeroiconsPlusCircle = (props) => (
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
      d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0a9 9 0 0 1 18 0"
    ></path>
  </svg>
);
export default AddCartBtn;
