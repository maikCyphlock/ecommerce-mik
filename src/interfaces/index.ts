/* eslint-disable no-use-before-define  */
export interface Data {
  products: Products;
  search: Search;
  product: Product;
}

export interface Product {
  variants: any;
  brand: any;
  descriptionHtml: string;
  variantBySelectedOptions: any;
  availableForSale: any;
  title: string;
  images: Images;
  description: string;
  tags: string[];
  productCategory: ProductCategory | null;
  priceRange: PriceRange;
  id: string;
}

export interface Edge {
  node: Node;
}
export interface Search {
  edges: Edge[];
}

export interface Products {
  nodes: ProductsNode[];
  variants: ProductsNode[];
}

export interface ProductsNode {
  title: string;
  images: Images;
  description: string;
  descriptionHtml: string;
  tags: string[];
  productCategory: ProductCategory | null;
  priceRange: PriceRange;
  id: string;
}

export interface Images {
  nodes: ImagesNode[];
}

export interface ImagesNode {
  url?: string;
  src?: string;
}

export interface PriceRange {
  maxVariantPrice: VariantPrice;
  minVariantPrice: VariantPrice;
}

export interface VariantPrice {
  amount: string;
  currencyCode: "USD";
}

export interface ProductCategory {
  productTaxonomyNode: ProductTaxonomyNode;
}

export interface ProductTaxonomyNode {
  fullName: string;
}

export interface Extensions {
  cost: Cost;
}

export interface Cost {
  requestedQueryCost: number;
  actualQueryCost: number;
  throttleStatus: ThrottleStatus;
}

export interface ThrottleStatus {
  maximumAvailable: number;
  currentlyAvailable: number;
  restoreRate: number;
}

export interface IProducts {
  id: string;
  name: string;
  description?: string;
  price?: VariantPrice;
  imgUrl: ImagesNode | ImagesNode[];
  className?: string;
  tags?: string[];
  category?: ProductCategory;
  brand?: string;
}
export interface GraphQLResponse {
  data: Data;
  extensions: Extensions;
}
