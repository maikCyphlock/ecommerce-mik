import Footer from "@/components/layout/footer";
import SearchProduct from "../search-product";
export default function Home({ searchParams }) {
  return (
    <>
      <SearchProduct query={searchParams?.query} />

      <Footer />
    </>
  );
}
