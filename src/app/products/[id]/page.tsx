import ShowProductInDetail from "@/components/product/show-product-detail";

function page({ params }: { params: { id: string } }) {
  return <ShowProductInDetail id={params.id} />;
}

export default page;
