import { useContext } from 'react'
import OrderContext from '../contexts/order/OrderContext'

const ResumenTotal = () => {
  const { total } = useContext(OrderContext)

  return (
    <div className="flex items-center mt-5 justify-between bg-white p-3 rounded">
      <h2 className="text-gray-800 text-lg">Total a pagar: </h2>
      <p className="text-gray-800 mt-0">$ {total}</p>
    </div>
  )
}

export default ResumenTotal
