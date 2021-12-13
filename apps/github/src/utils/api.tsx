import { gql } from '@apollo/client'

export const SEARCH_QUERY = gql`
  query SearchQuery($query: String!, $numOfResults: Int!, $cursor: String) {
    search(query: $query, first: $numOfResults, after: $cursor, type: USER) {
      edges {
        node {
          ... on User {
            id
            name
            email
            login
            location
            url
            avatarUrl
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`

// TODO: Add pagination for repositories
// TODO: Add a fragment for user metadata too so that it's reused by both queries
export const REPOSITORY_OWNER_QUERY = gql`
  query SearchQuery($login: String!) {
    repositoryOwner(login: $login) {
      ... on User {
        id
        name
        email
        login
        location
        url
        avatarUrl
      }
      repositories(first: 100) {
        edges {
          node {
            name
            url
          }
        }
      }
    }
  }
`
