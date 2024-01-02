/* eslint-disable no-use-before-define  */
export interface Root {
  cartProducts: CartProducts;
}

export interface CartProducts {
  id: string;
  totalQuantity: number;
  checkoutUrl: string;
  estimatedCost: EstimatedCost;
  lines: Lines;
}

export interface EstimatedCost {
  totalAmount: TotalAmount;
  totalTaxAmount: TotalTaxAmount;
  subtotalAmount: SubtotalAmount;
}

export interface TotalAmount {
  amount: string;
  currencyCode: string;
}

export interface TotalTaxAmount {
  amount: string;
  currencyCode: string;
}

export interface SubtotalAmount {
  amount: string;
  currencyCode: string;
}

export interface Lines {
  edges: Edge[];
}

export interface Edge {
  node: Node;
}

export interface Node {
  id: string;
  merchandise: Merchandise;
  quantity: number;
  estimatedCost: EstimatedCost2;
}

export interface Merchandise {
  id: string;
  title: string;
  image: Image;
  product: Product;
}

export interface Image {
  url: string;
}

export interface Product {
  title: string;
}

export interface EstimatedCost2 {
  totalAmount: TotalAmount2;
}

export interface TotalAmount2 {
  amount: string;
  currencyCode: string;
}
