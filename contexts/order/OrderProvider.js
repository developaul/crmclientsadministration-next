import { useReducer, useCallback } from 'react'

import OrderContext from './OrderContext'
import orderReducer from './OrderReducer'
import {
  SELECT_CLIENT,
  SELECT_PRODUCTS,
  QUANTITY_PRODUCT
} from '../types'

const initialState = {
  client: {},
  products: [],
  total: 0
}

const OrderProvider = ({ children }) => {
  const [{ products }, dispatch] = useReducer(orderReducer, initialState)
  const _handleAddClient = useCallback(client => dispatch({ type: SELECT_CLIENT, payload: client }), [])

  const _handleAddProducts = useCallback(productsToProcess => {
    const newProducts = productsToProcess.map(productToProcess => {
      const { quantity } = products.find(product => product.id === productToProcess.id) || { quantity: 0 }
      return { ...productToProcess, quantity }
    })

    dispatch({ type: SELECT_PRODUCTS, payload: newProducts })
  }, [products])

  const _handleChangeQuantityProduct = useCallback(payload => dispatch({ type: QUANTITY_PRODUCT, payload }), [])
  return (
    <OrderContext.Provider
      value={{
        products,
        _handleAddClient,
        _handleAddProducts,
        _handleChangeQuantityProduct
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

export default OrderProvider