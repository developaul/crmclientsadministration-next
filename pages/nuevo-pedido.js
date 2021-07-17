import { useCallback, useContext, useState } from 'react'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'

import Layout from '../components/Layout'
import ResumenOrder from '../components/ResumenOrder'
import AssignClient from '../components/AssignClient'
import ResumenTotal from '../components/ResumenTotal'
import AssignProduct from '../components/AssignProduct'
import OrderContext from '../contexts/order/OrderContext'
import FeedbackMessage from '../components/FeedbackMessage'

import { MUTATION_CREATE_ORDER } from '../apollo/types'

const NewOrder = () => {
  const router = useRouter()
  const [message, setMessage] = useState(null)
  const [createOrder] = useMutation(MUTATION_CREATE_ORDER)
  const { isValidToRegisterOrder, products, client, total } = useContext(OrderContext)

  const _handleSanitizationOrder = useCallback(products => products.map(({ __typename, stock, ...product }) => {
    if (stock < product.quantity)
      throw new Error(`La cantidad del producto ${product.name} supera el stock disponible`)

    return product
  }), [])

  const _handleCreateOrder = useCallback(async () => {
    try {
      const order = _handleSanitizationOrder(products)

      await createOrder({
        variables: {
          input: {
            total,
            order,
            client: client.id,
            status: 'pending',
          }
        }
      })

      Swal.fire(
        'Correcto',
        'El pedido se registró correctamente',
        'success'
      )

      router.push('/pedidos')

    } catch (error) {
      setMessage(error.message)

      setTimeout(() => setMessage(null), 3000)
    }
  }, [_handleSanitizationOrder, client.id, createOrder, products, router, total])

  return (
    <Layout>
      {message && <FeedbackMessage message={message} />}

      <h1 className="text-2xl text-gray-800 font-light">Crear Nuevo Pedido</h1>
      <div className="flex justify-center mt-5">
        <div className="w-full max-w-lg">
          <AssignClient />
          <AssignProduct />
          <ResumenOrder />
          <ResumenTotal />

          <button
            type="button"
            onClick={_handleCreateOrder}
            className={`bg-gray-800 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-gray-900 ${isValidToRegisterOrder() ? '' : 'opacity-50 cursor-not-allowed'}`}
          >
            Registrar Pedido
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default NewOrder