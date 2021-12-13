import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { relayStylePagination } from '@apollo/client/utilities'

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
})

const authLink = setContext((_, { headers }) => {
  const token = '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'
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        search: relayStylePagination(),
      },
    },
  },
})

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
})
