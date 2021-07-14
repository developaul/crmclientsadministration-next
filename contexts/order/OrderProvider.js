import { useReducer } from 'react'

import OrderContext from './OrderContext'
import orderReducer from './OrderReducer'
import {
  SELECT_CLIENT,
  SELECT_PRODUCT,
  QUANTITY_PRODUCTS
} from '../types'

const initialState = {
  client: {},
  products: [],
  total: 0
}

const OrderProvider = ({ children }) => {

  const [state, dispatch] = useReducer(orderReducer, initialState)

  return (
    <OrderContext.Provider
      value={{

      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

export default OrderProvider