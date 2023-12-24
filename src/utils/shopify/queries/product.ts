export const getProductsQuery = `
query ProductsQuery {
  products(first: 100) {
    nodes {
      title
      images(first: 3) {
        nodes {
          url
        }
      }
      description
      tags
      
    
      priceRange {
        maxVariantPrice {
          amount
          currencyCode
        }
        minVariantPrice {
          amount
          currencyCode
        }
      }
      id
    }
  }
}
`;

export const getProductQuery = `
query GetProduct($id: ID!) {
  product(id: $id) {
    title
    priceRange {
      maxVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 3) {
      nodes {
        src
      }
    }
    id
    tags
    description
    options(first: 20) {
      name
      values
    }
    variants(first: 15) {
      edges {
        node {
          id
          title
          availableForSale
          selectedOptions {
            name
            value
          }
        }
      }
    }
  }
}`;

export const getProductsBySearchQuery = `query GetSimilarProduct($query: String = "") {
    shop {
      search(first: 4, query: $query) {
        edges {
          node {
            
            title
            reference{
                id
            }
            image {
              src
            }
            description
          }
        }
      }
    }
  }`;

export const getProductsQueryByQuantity = `
query ProductsQuery ( $first: Int!, $before: String ) {
  products(first: $first, after: $before) {
    nodes {
      title
      images(first: 3) {
        nodes {
          url
        }
      }
      description
      tags
      productCategory {
        productTaxonomyNode {
          fullName
        }
      }
      priceRange {
        maxVariantPrice {
          amount
          currencyCode
        }
        minVariantPrice {
          amount
          currencyCode
        }
      }
      id
    }
  }
}

`;
export const getProductsFromCartQuery = `
query getProductsFromCartQuery($id: ID!) {
  cart(id:  $id) {
    id
    totalQuantity
    checkoutUrl
    estimatedCost {
      totalAmount {
        amount
        currencyCode
      }
      totalTaxAmount {
        amount
        currencyCode
      }
      subtotalAmount {
        amount
        currencyCode
      }
    }
    lines(first: 100) {
      edges {
        node {
          id
          merchandise {
            ... on ProductVariant {
              id
              image {
                url
              }
            }
          }
          quantity
          estimatedCost {
            totalAmount {
              amount
              currencyCode
            }
            
          }
        }
      }
    }
  }
}`;
