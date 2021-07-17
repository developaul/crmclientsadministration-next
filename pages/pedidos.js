import Link from 'next/link'
import { useQuery } from '@apollo/client'

import Layout from '../components/Layout'
import Order from '../components/Order'

import { GET_ORDERS_BY_SELLER } from '../apollo/types'

const Orders = () => {
  const { data, loading } = useQuery(GET_ORDERS_BY_SELLER)

  if (loading) return null

  return (
    <Layout>
      <h1 className="text-2xl text-gray-800 font-light" >Pedidos</h1>
      <Link href="/nuevo-pedido" >
        <a className="bg-blue-800 py-2 px-5 my-3 inline-block text-white hover:bg-gray-800 hover:text-gray-200 rounded uppercase font-bold text-sm">
          Nuevo Pedido
        </a>
      </Link>

      {data?.getOrdersBySeller?.length ? data?.getOrdersBySeller.map(order => <Order key={order.id} {...order} />) :
        <p className="mmt-5 text-center text-2xl" >No hay pedido aún</p>
      }
    </Layout>
  )
}

export default Orders
