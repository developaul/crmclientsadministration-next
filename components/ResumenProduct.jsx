import { useContext } from "react"

import OrderContext from "../contexts/order/OrderContext"

const ResumenProduct = ({ name, price, id }) => {
  const { _handleChangeQuantityProduct } = useContext(OrderContext)

  return (
    <div className="md:flex md:justify-between md:items-center md:items-center mt-5">
      <div className="md:w-2/4 mb-2 md:mb-0">
        <p className="text-sm">{name}</p>
        <p>$ {price}</p>
      </div>

      <input
        type="number"
        placeholder="Cantidad"
        className="shadow apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight foucs:outline-none focus:shadow-outline md:ml-4"
        onChange={({ target: { value: quantity } }) => _handleChangeQuantityProduct({ quantity, id })}
      />
    </div>
  )
}

export default ResumenProduct
