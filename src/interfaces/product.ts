/* eslint-disable no-use-before-define  */
export interface IProduct {
  title: string;
  availableForSale: boolean;
  priceRange: PriceRange;
  images: Images;
  id: string;
  tags: string[];
  descriptionHtml: string;
  options: Option[];
  variantBySelectedOptions: any;
  variants: Variants;
}

export interface PriceRange {
  maxVariantPrice: MaxVariantPrice;
}

export interface MaxVariantPrice {
  amount: string;
  currencyCode: string;
}

export interface Images {
  nodes: Node[];
}

export interface Node {
  id: string;
  src: string;
}

export interface Option {
  name: string;
  values: string[];
}

export interface Variants {
  edges: Edge[];
}

export interface Edge {
  node: Node2;
}

export interface Node2 {
  id: string;
  title: string;
  availableForSale: boolean;
  selectedOptions: SelectedOption[];
}

export interface SelectedOption {
  name: string;
  value: string;
}
