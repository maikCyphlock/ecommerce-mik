"use client";
import React from "react";
import { updateItemQuantity } from "./actions";
import { useFormState, useFormStatus } from "react-dom";
import { MinusCircle, PlusCircle } from "../icons/hero-icons";

function SubmitButton({ type }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      onClick={(e: React.FormEvent<HTMLButtonElement>) => {
        if (pending) e.preventDefault();
      }}
      aria-label={
        type === "plus" ? "Increase item quantity" : "Reduce item quantity"
      }
      disabled={pending}
      className="ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full px-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80"
    >
      {pending ? (
        <span className="loading loading-spinner "></span>
      ) : type === "plus" ? (
        <PlusCircle className="h-12 w-12 text-secondary" />
      ) : (
        <MinusCircle className="h-12 w-12 text-secondary" />
      )}
    </button>
  );
}

export function EditItemQuantityButton({
  item,
  type,
}: {
  item: any;
  type: "plus" | "minus";
}) {
  const [message, formAction] = useFormState(updateItemQuantity, null);
  const payload = {
    lineId: item.id,
    variantId: item.merchandise.id,
    quantity: type === "plus" ? item.quantity + 1 : item.quantity - 1,
  };
  const actionWithVariant = formAction.bind(null, payload);

  return (
    <form action={actionWithVariant}>
      <SubmitButton type={type} />
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  );
}

export default EditItemQuantityButton;
