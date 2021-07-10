import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import fetch from 'node-fetch'

const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: process.env.REACT_APP_SERVER,
    fetch
  })
})

export default client