import { IProducts, GraphQLResponse } from "../interfaces";
import {
  getProductsQuery,
  getProductQuery,
  getProductsFromCartQuery,
} from "@/utils/shopify/queries/product";
import {
  cartCreateQuery,
  removeProductFromCartQuery,
} from "./shopify/mutations/cart";
import { cookies } from "next/headers";
import { SearchQuery } from "./shopify/queries/search";
export function productsAdapter(
  productosJson: GraphQLResponse,
): IProducts[] | null {
  return productosJson?.data?.products?.nodes?.map((producto) => {
    return {
      ...producto,
      id: producto.id,
      name: producto.title,
      description: producto.descriptionHtml,
      price: producto.priceRange.maxVariantPrice,
      imgUrl: producto.images.nodes,
      tags: producto.tags,
      category: producto.productCategory,
      brand: producto.title,
    };
  });
}

export const updateCart = async (
  cartId: string,
  lines: { id: string; merchandiseId: string; quantity: number }[],
) => {
  const res = await fetchDataFromShopify(
    {
      gqlQuery: gql`
        mutation updateCart($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
          cartLinesUpdate(cartId: $cartId, lines: $lines) {
            cart {
              id
            }
          }
        }
      `,
      variables: {
        cartId,
        lines,
      },
    },
    {
      cache: "no-store",
      tags: ["cart"],
    },
  );

  return res.json();
};
export const getProducts = async (): Promise<GraphQLResponse> => {
  const res = await fetch(process.env.GRAPHQL_API_URL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": process.env.SHOPIFY_API_KEY!,
    },
    body: JSON.stringify({
      query: gql`
        ${getProductsQuery}
      `,
    }),
  });

  if (!res.ok) {
    const text = await res.text(); // get the response body for more information

    throw new Error(`
      Failed to fetch data
      Status: ${res.status}
      Response: ${text}
    `);
  }

  return res.json();
};

const fetchDataFromShopify = async (
  {
    gqlQuery,
    variables,
  }: {
    gqlQuery: string;
    variables?: any;
  },
  ...NextProps: any[]
) => {
  const res = await fetch(process.env.GRAPHQL_API_URL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": process.env.SHOPIFY_API_KEY!,
    },
    body: JSON.stringify({
      query: gql`
        ${gqlQuery}
      `,
      variables,
    }),
    ...NextProps,
  });

  return res;
};

export const getProductFromSearch = async (query: string) => {
  const res = await fetchDataFromShopify({
    gqlQuery: gql`
      ${SearchQuery}
    `,
    variables: {
      query,
    },
  });

  return res.json();
};
export const getProduct = async (
  id: string,
  selectedOptions: {
    name: string;
    value: string;
  }[],
): Promise<GraphQLResponse> => {
  const res = await fetchDataFromShopify({
    gqlQuery: getProductQuery,
    variables: {
      id: `gid://shopify/Product/${id}`,
      selectedOptions,
    },
  });

  return res.json();
};

export async function cartCreate() {
  const res = await fetchDataFromShopify({
    gqlQuery: gql`
      ${cartCreateQuery}
    `,
  });
  const { data: cartId } = await res.json();
  console.dir(cartId, { depth: null });
  cookies().set("cartId", cartId?.cartCreate?.cart?.id);
  return cartId.cartCreate.cart.id;
}

export const getCart = async () => {
  const cartId = cookies().get("cartId")?.value;
  const res = await fetchDataFromShopify(
    {
      gqlQuery: gql`
        query getCart($id: ID!) {
          cart(id: $id) {
            id
            totalQuantity
            checkoutUrl
          }
        }
      `,
      variables: {
        id: cartId,
      },
    },
    {
      next: { tags: ["cart"] },
    },
  );
  return res.json();
};

export const getProductsFromCart = async (cartId: string) => {
  cartId = cartId ?? cookies().get("cartId")?.value;
  const res = await fetchDataFromShopify({
    gqlQuery: gql`
      ${getProductsFromCartQuery}
    `,
    variables: {
      id: cartId,
    },
  });

  return res.json();
};

export const addToCart = async (
  cartId: string,
  lines: { merchandiseId: string; quantity: number }[],
) => {
  const res = await fetchDataFromShopify({
    gqlQuery: gql`
      mutation addToCart($cartId: ID!, $lines: [CartLineInput!]!) {
        cartLinesAdd(cartId: $cartId, lines: $lines) {
          cart {
            id
          }
        }
      }
    `,
    variables: {
      cartId,
      lines,
    },
  });
  return res.json();
};

export const removeProductFromCart = async (cartId, LineId) => {
  const res = await fetchDataFromShopify({
    gqlQuery: gql`
      ${removeProductFromCartQuery}
    `,
    variables: {
      lineIds: LineId,
      cartId,
    },
  });
  return res.json();
};

export function generateRandomNumbersBasedOnId(range: number = 4) {
  const numbers = Array.from({ length: range }, (_, i) => i + 1);
  const randomNumbers = numbers.sort(() => Math.random() - 0.5).slice(0, 4);
  return randomNumbers;
}

export const FormatCurrency = (value: number, currency: string) => {
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
    }).format(value);
  } catch (e) {
    console.error(e);
    return "0.00";
  }
};
export const gql = String.raw;
