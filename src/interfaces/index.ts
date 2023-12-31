export interface GraphQLResponse {
  data: Data;
  extensions: Extensions;
}

export interface Data {
  products: Products;
  search: Search;
  product: Product;
}

export interface Product {
  variants: any;
  brand: any;
  descriptionHtml: string | TrustedHTML;
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

export interface Search {
  edges: Edge[];
}

export interface Edge {
  node: Node;
}

export interface Products {
  nodes: ProductsNode[];
  variants: ProductsNode[];
}

export interface ProductsNode {
  title: string;
  images: Images;
  description: string;
  tags: string[];
  productCategory: ProductCategory | null;
  priceRange: PriceRange;
  id: string;
}

export interface Images {
  nodes: ImagesNode[];
}

export interface ImagesNode {
  url: string;
  src: string;
}

export interface PriceRange {
  maxVariantPrice: VariantPrice;
  minVariantPrice: VariantPrice;
}

export interface VariantPrice {
  amount: string;
  currencyCode: CurrencyCode;
}

export enum CurrencyCode {
  Usd = "USD",
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
  description: string;
  price: VariantPrice;
  imgUrl: ImagesNode[];
  className: string;
  tags: string[];
  category: ProductCategory;
  brand: string;
}
