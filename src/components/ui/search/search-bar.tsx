"use client";
import { getDataFromSearch } from "./actions";
import SubmitSearch from "./submit-btn";
import { useFormState } from "react-dom";

function SearchBar() {
  // eslint-disable-next-line
  const [search, setSearch] = useFormState(getDataFromSearch, null);

  return (
    <form action={setSearch}>
      <SubmitSearch />
    </form>
  );
}

export default SearchBar;
