import { useContext } from 'react'

import OrderContext from '../contexts/order/OrderContext'

const ResumenOrder = () => {
  const { products } = useContext(OrderContext)
  console.log("🚀 ~ ResumenOrder ~ products", products)

  return (
    <>
      <p
        className="mt-10 my-2 bg-white border-l4 border-gray-800 text-gray-700 p-2 text-sm font-bold"
      >
        3.- Ajustar las cantidades del producto
      </p>

      {(products.length) ?
        (
          <>
            Si hay productos
          </>
        )
        :
        (
          <p
            className="mt-5 text-sm"
          >
            Aún no hay productos
          </p>
        )
      }

    </>
  )
}

export default ResumenOrder
