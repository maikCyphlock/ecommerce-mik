import ShowProduct from "@/components/product/show-product";
import { CtaMain } from "@/components/shacdn/cta-main";
export default function Home() {
  return (
    <>
      <CtaMain />
      <ShowProduct id="collections" />
    </>
  );
}
