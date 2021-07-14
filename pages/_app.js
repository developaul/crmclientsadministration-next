import { ApolloProvider } from '@apollo/client'

import client from '../config/apollo'
import OrderProvider from '../contexts/order/OrderProvider'

const MyApp = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client} >
      <OrderProvider>
        <Component {...pageProps} />
      </OrderProvider>
    </ApolloProvider>
  )
}

export default MyApp
