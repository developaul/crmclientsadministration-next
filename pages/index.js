import Link from 'next/link'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

import Layout from '../components/Layout'
import Client from '../components/Client'
import { GET_CLIENTS_BY_SELLER } from '../apollo/types'


const Index = () => {
  const router = useRouter()
  const { data, loading } = useQuery(GET_CLIENTS_BY_SELLER)

  if (loading) return null
  if (!data?.getClientsBySeller) {
    router.push('/signin')
    return null
  }

  return (
    <Layout>
      <h1 className="text-2xl text-gray-800 font-light" >Clientes</h1>
      <Link href="/nuevo-cliente">
        <a
          className="w-full lg:w-auto text-center bg-blue-800 py-2 px-5 my-3 inline-block text-white rounded text-sm hover:bg-gray-800 uppercase font-bold"
        >
          Nuevo Cliente
        </a>
      </Link>

      <div className="overflow-x-scroll">
        <table className="table-auto shadow-md mt-10 w-full w-lg">
          <thead className="bg-gray-800">
            <tr className="text-white">
              <th className="w-1/5 py-2">Nombre</th>
              <th className="w-1/5 py-2">Empresa</th>
              <th className="w-1/5 py-2">Email</th>
              <th className="w-1/5 py-2">Eliminar</th>
              <th className="w-1/5 py-2">Editar</th>
            </tr>
          </thead>

          <tbody className="bg-white">
            {data.getClientsBySeller.map(client => <Client key={client.id} {...client} />)}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export default Index