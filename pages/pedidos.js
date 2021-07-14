import Link from 'next/link'
import Layout from '../components/Layout'

const Orders = () => {
  return (
    <Layout>
      <h1 className="text-2xl text-gray-800 font-light" >Pedidos</h1>
      <Link
        href="/nuevo-pedido"
      >
        <a className="bg-blue-800 py-2 px-5 my-3 inline-block text-white hover:bg-gray-800 hover:text-gray-200 rounded uppercase font-bold text-sm">
          Nuevo Pedido
        </a>
      </Link>
    </Layout>
  )
}

export default Orders
