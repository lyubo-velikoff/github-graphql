import { ApolloProvider } from '@apollo/client'
import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom'
import { client } from './utils/apollo-provider'

import App from './components/containers/app/app'

ReactDOM.render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>,
  document.getElementById('root')
)
