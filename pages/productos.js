import Link from 'next/link'
import { useQuery } from '@apollo/client'

import Layout from '../components/Layout'
import Product from '../components/Product'
import { GET_PRODUCTS } from '../apollo/types'

const Products = () => {
  const { data, loading } = useQuery(GET_PRODUCTS)

  if (loading) return null
  if (!data?.getProducts) {
    router.push('/signin')
    return null
  }

  return (
    <Layout>
      <h1 className="text-2xl text-gray-800 font-light" >Productos</h1>
      <Link
        href="/nuevo-producto"
      >
        <a className="bg-blue-800 py-2 px-5 my-3 inline-block text-white hover:bg-gray-800 hover:text-gray-200 rounded uppercase font-bold text-sm">
          Nuevo Producto
        </a>
      </Link>
      <table className="table-auto shadow-md mt-10 w-full w-lg">
        <thead className="bg-gray-800">
          <tr className="text-white">
            <th className="w-1/5 py-2">Nombre</th>
            <th className="w-1/5 py-2">Stock</th>
            <th className="w-1/5 py-2">Precio</th>
            <th className="w-1/5 py-2">Eliminar</th>
            <th className="w-1/5 py-2">Editar</th>
          </tr>
        </thead>

        <tbody className="bg-white">
          {data.getProducts.map(product => <Product key={product.id} {...product} />)}
        </tbody>
      </table>
    </Layout>
  )
}

export default Products
