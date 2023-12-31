"use client";
import { getDataFromSearch } from "./actions";

import SubmitSearch from "./submit-btn";
import { useFormState } from "react-dom";

import { useEffect, useState } from "react";

function SearchBar() {
  const [search, setSearch] = useFormState(getDataFromSearch, null);

  return (
    <form action={setSearch}>
      <SubmitSearch />
    </form>
  );
}

export default SearchBar;
