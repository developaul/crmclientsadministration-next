import {
  SELECT_CLIENT,
  SELECT_PRODUCTS,
  QUANTITY_PRODUCTS
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

    default:
      return state
  }
}

export default orderReducer