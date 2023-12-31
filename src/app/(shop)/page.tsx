import Footer from "@/components/layout/footer";
import ShowProduct from "@/components/product/show-product";
import SearchProduct from "./search-product";
import { CtaMain } from "@/components/shacdn/cta-main";
export default function Home({ searchParams }) {
  return (
    <>
      <CtaMain />
      <ShowProduct id="collections" />
      <Footer />
    </>
  );
}
