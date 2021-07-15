import { useContext } from 'react'

import OrderContext from '../contexts/order/OrderContext'
import ResumenProduct from './ResumenProduct'

const ResumenOrder = () => {
  const { products } = useContext(OrderContext)

  return (
    <>
      <p
        className="mt-10 my-2 bg-white border-l4 border-gray-800 text-gray-700 p-2 text-sm font-bold"
      >
        3.- Ajustar las cantidades del producto
      </p>

      {(products.length) ?
        products.map(product => (
          <ResumenProduct
            key={product.id}
            {...product}
          />
        ))
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
