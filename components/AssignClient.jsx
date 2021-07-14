import Select from 'react-select'
import { useContext } from 'react'
import { useQuery } from '@apollo/client'

import { GET_CLIENTS_BY_SELLER } from '../apollo/types'
import OrderContext from '../contexts/order/OrderContext'

const AssignClient = () => {
  const { data, loading } = useQuery(GET_CLIENTS_BY_SELLER)
  const { _handleAddClient } = useContext(OrderContext)

  if (loading) return null
  const { getClientsBySeller: clients } = data

  return (
    <>
      <p
        className="mt-10 my-2 bg-white border-l4 border-gray-800 text-gray-700 p-2 text-sm font-bold"
      >
        1.- Asigna un cliente al pedido
      </p>
      <Select
        className="mt-3"
        options={clients}
        onChange={_handleAddClient}
        getOptionValue={({ id }) => id}
        getOptionLabel={({ name }) => name}
        placeholder="Busque o Seleccione el Cliente"
        noOptionsMessage={() => "No hay resultados"}
      />
    </>
  )
}

export default AssignClient
