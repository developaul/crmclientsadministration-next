import Select from 'react-select'
import { useContext } from 'react'
import { useQuery } from '@apollo/client'

import { GET_PRODUCTS } from '../apollo/types'
import OrderContext from '../contexts/order/OrderContext'

const AssignProduct = () => {
  const { data, loading } = useQuery(GET_PRODUCTS)
  const { _handleAddProducts } = useContext(OrderContext)

  if (loading) return null
  const { getProducts: products } = data

  return (
    <>
      <p
        className="mt-10 my-2 bg-white border-l4 border-gray-800 text-gray-700 p-2 text-sm font-bold"
      >
        2.- Selecciona o busca los productos
      </p>
      <Select
        className="mt-3"
        isMulti
        options={products}
        onChange={_handleAddProducts}
        getOptionValue={({ id }) => id}
        getOptionLabel={({ name, stock }) => `${name} - ${stock} Disponibles`}
        placeholder="Busque o Seleccione los productos"
        noOptionsMessage={() => "No hay resultados"}
      />
    </>
  )
}

export default AssignProduct
