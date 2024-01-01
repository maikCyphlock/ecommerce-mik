"use client";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import { addItemToCart } from "./actions";
import { useSearchParams } from "next/navigation";
import { PlusCircle } from "../icons/hero-icons";

function AddCartBtn({ combinations }: { combinations: any[] }) {
  const searchParams = useSearchParams()!;
  const color = searchParams.get("Color");
  const size = searchParams.get("Size");
  // eslint-disable-next-line
  const [message, formAction] = useFormState(addItemToCart, null);
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
      className="mt-4 btn btn-block btn-primary self-end "
    >
      {pending ? (
        <span className="loading loading-spinner "></span>
      ) : (
        <PlusCircle className="w-8 h-8 " />
      )}
      add to cart
    </button>
  );
};

export default AddCartBtn;
