import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from 'apollo-link-context'
import fetch from 'node-fetch'

const httpLink = createHttpLink({
  fetch,
  uri: 'https://developaul-crmclients.herokuapp.com/'
})

const authLink = setContext((_, { headers }) => {
  const accessToken = localStorage.getItem('accessToken')
  return {
    headers: {
      ...headers,
      authorization: accessToken ? `Bearer ${accessToken}` : ''
    }
  }
})


const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink)
})

export default client