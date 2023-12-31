"use client";
import { useFormStatus } from "react-dom";
import { MagnifyingGlass } from "../icons/HeroIcons";
import {
  usePathname,
  useSearchParams,
  useRouter,
  redirect,
} from "next/navigation";

import { useCallback, useState } from "react";
export default function SubmitSearch() {
  //create a query param
  const [query, setQuery] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const searchpathname = () => (pathname === "/" ? "/search" : pathname);

  console.log({ searchpathname });
  const searchParams = useSearchParams()!;
  function debounce(func, wait) {
    let timeout;

    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };

      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );
  const handleChange = (event) => {
    const { name, value } = event.target;
    // create a debounce promise
    setQuery(value);

    const routerChanger = router.push(
      searchpathname() + "?" + createQueryString(name, value),
      {
        scroll: false,
      },
    );
    debounce(routerChanger, 1000);
  };
  const { pending } = useFormStatus();
  return (
    <div
      aria-label="search"
      className="flex gap-2 rounded-2xl bg-base-200/10 input input-bordered md:w-auto"
    >
      <input
        disabled={pending}
        type="text"
        onChange={handleChange}
        value={query}
        id="query"
        name="query"
        placeholder="Search"
        className="w-full bg-transparent"
      ></input>
      <button
        disabled={pending}
        className="mx-2 flex justify-center items-center"
        type="submit"
      >
        {pending ? (
          <span className="loading loading-spinner"></span>
        ) : (
          <MagnifyingGlass className="w-6 h-6 " />
        )}
      </button>
    </div>
  );
}
