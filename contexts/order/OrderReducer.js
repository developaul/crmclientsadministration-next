import {
  SELECT_CLIENT,
  SELECT_PRODUCTS,
  QUANTITY_PRODUCT
} from '../types'

const orderReducer = (state, action) => {
  switch (action.type) {
    case SELECT_CLIENT:
      return {
        ...state,
        client: action.payload
      }

    case SELECT_PRODUCTS:
      return {
        ...state,
        products: action.payload
      }

    case QUANTITY_PRODUCT:
      return {
        ...state,
        products: state.products.map(product => product.id === action.payload.id ? { ...product, quantity: action.payload.quantity } : product)
      }

    default:
      return state
  }
}

export default orderReducer