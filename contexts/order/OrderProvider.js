import { useReducer, useCallback } from 'react'

import OrderContext from './OrderContext'
import orderReducer from './OrderReducer'
import {
  SELECT_CLIENT,
  SELECT_PRODUCTS,
  QUANTITY_PRODUCT,
  UPDATE_TOTAL
} from '../types'

const initialState = {
  client: {},
  products: [],
  total: 0
}

const OrderProvider = ({ children }) => {
  const [{ client, products, total }, dispatch] = useReducer(orderReducer, initialState)
  const _handleAddClient = useCallback(client => dispatch({ type: SELECT_CLIENT, payload: client }), [])
  const _handleUpdateTotal = useCallback(() => dispatch({ type: UPDATE_TOTAL }), [])

  const _handleAddProducts = useCallback(productsToProcess => {
    const newProducts = productsToProcess.map(productToProcess => {
      const { quantity } = products.find(product => product.id === productToProcess.id) || { quantity: 0 }
      return { ...productToProcess, quantity }
    })

    dispatch({ type: SELECT_PRODUCTS, payload: newProducts })

    _handleUpdateTotal()
  }, [_handleUpdateTotal, products])

  const _handleChangeQuantityProduct = useCallback(payload => {
    dispatch({ type: QUANTITY_PRODUCT, payload })

    _handleUpdateTotal()
  }, [_handleUpdateTotal])

  const isValidToRegisterOrder = useCallback(() => products.every(product => product.quantity > 0) && total && Object.entries(client).length, [client, products, total])

  return (
    <OrderContext.Provider
      value={{
        products,
        total,
        _handleAddClient,
        _handleAddProducts,
        _handleUpdateTotal,
        isValidToRegisterOrder,
        _handleChangeQuantityProduct
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

export default OrderProvider