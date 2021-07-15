import {
  SELECT_CLIENT,
  SELECT_PRODUCTS,
  QUANTITY_PRODUCT,
  UPDATE_TOTAL
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
        products: state.products.map(product => product.id === action.payload.id ? { ...product, quantity: Number(action.payload.quantity) } : product)
      }

    case UPDATE_TOTAL:
      return {
        ...state,
        total: state.products.reduce((newTotal, { quantity, price }) => newTotal + (price * quantity), 0)
      }

    default:
      return state
  }
}

export default orderReducer