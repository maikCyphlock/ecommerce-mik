export interface GraphQLResponse {
  data:       Data;
  extensions: Extensions;
}

export interface Data {
  products: Products;
}

export interface Products {
  nodes: ProductsNode[];
}

export interface ProductsNode {
  title:           string;
  images:          Images;
  description:     string;
  tags:            string[];
  productCategory: ProductCategory | null;
  priceRange:      PriceRange;
  id:              string;
}

export interface Images {
  nodes: ImagesNode[];
}

export interface ImagesNode {
  url: string;
}

export interface PriceRange {
  maxVariantPrice: VariantPrice;
  minVariantPrice: VariantPrice;
}

export interface VariantPrice {
  amount:       string;
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
  actualQueryCost:    number;
  throttleStatus:     ThrottleStatus;
}

export interface ThrottleStatus {
  maximumAvailable:   number;
  currentlyAvailable: number;
  restoreRate:        number;
}

export interface IProducts {
  id: string,
  name: string,
  description: string,
  price:  VariantPrice,
  imgUrl: ImagesNode[],
  tags: string[],
  category:   ProductCategory,
  brand:      string,
}
