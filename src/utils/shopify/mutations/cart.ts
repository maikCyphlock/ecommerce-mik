export const cartCreateQuery = `mutation CartCreate {
    cartCreate {
      cart {
        id
      
      }
    }
  }`;

export const removeProductFromCartQuery = `
mutation removeProductFromCartQuery($cartId: ID!, $lineIds: [ID!]!) {
  cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
    cart {
      id
      checkoutUrl
    }
  }
 }
 `;
