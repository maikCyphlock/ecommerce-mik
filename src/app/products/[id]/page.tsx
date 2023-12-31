import ShowProductInDetail from "@/components/product/show-product-detail";
import SearchProduct from "@/app/(shop)/search-product";
function page({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: any;
}) {
  const queryParams = { ...searchParams };
  return (
    <>
      <SearchProduct query={queryParams.query} />
      <ShowProductInDetail id={params.id} query={queryParams} />
    </>
  );
}

export default page;
