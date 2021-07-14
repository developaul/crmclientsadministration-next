import {
  SELECT_CLIENT,
  SELECT_PRODUCT,
  QUANTITY_PRODUCTS
} from '../types'

const orderReducer = (state, action) => {
  switch (action.type) {
    case SELECT_CLIENT:
      return {
        ...state,
        client: action.payload
      }

    default:
      return state
  }
}

export default orderReducer