import { useReducer, useCallback } from 'react'

import OrderContext from './OrderContext'
import orderReducer from './OrderReducer'
import {
  SELECT_CLIENT,
  SELECT_PRODUCTS,
  QUANTITY_PRODUCTS
} from '../types'

const initialState = {
  client: {},
  products: [],
  total: 0
}

const OrderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(orderReducer, initialState)
  const _handleAddClient = useCallback(client => dispatch({ type: SELECT_CLIENT, payload: client }), [])
  const _handleAddProducts = useCallback(products => dispatch({ type: SELECT_PRODUCTS, payload: products }), [])
  return (
    <OrderContext.Provider
      value={{
        _handleAddClient,
        _handleAddProducts
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

export default OrderProvider