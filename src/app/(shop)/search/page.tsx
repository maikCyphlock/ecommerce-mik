import SearchProduct from "../search-product";
export default function Home({ searchParams }) {
  return (
    <>
      <SearchProduct query={searchParams?.query} />
    </>
  );
}
