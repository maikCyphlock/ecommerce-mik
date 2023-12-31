export const SearchQuery = `query Search($query: String = "") {
    search(query: $query, first: 100) {
      edges {
        node {
          ... on Product {
            id
            images(first: 1) {
                nodes {
                  url
                }
              }
            title
          }
        }
      }
    }
  }`;
