"use client";
import { useFormState, useFormStatus } from "react-dom";
import { removeItem } from "./actions";
import { XMark20Solid } from "../icons/hero-icons";
function DeleteItemCart({ merchandiseId }) {
  // eslint-disable-next-line
  const [message, formAction] = useFormState(removeItem, null);
  console.log({ merchandiseId });
  const actionWithVariant = formAction.bind(null, merchandiseId);
  return (
    <form action={actionWithVariant}>
      <SubmitButton />
    </form>
  );
}

export default DeleteItemCart;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {" "}
      <button
        disabled={pending}
        type="submit"
        className="btn btn-circle btn-error btn-xs absolute -top-2 -left-2"
      >
        {pending ? (
          <span className="loading loading-spinner "></span>
        ) : (
          <XMark20Solid className="w-4 h-4 " />
        )}
      </button>
    </>
  );
}
