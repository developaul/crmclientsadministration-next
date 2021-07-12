import { useQuery } from '@apollo/client'
import { GET_CLIENTS_BY_SELLER } from '../apollo/types'

import Layout from '../components/Layout'

const Home = () => {
  const { data, loading, error } = useQuery(GET_CLIENTS_BY_SELLER)
  console.log("🚀 ~ Home ~ loading", loading)
  console.log("🚀 ~ Home ~ data", data)

  if (loading) return <p>Cargando...</p>

  return (
    <Layout>
      <h1 className="text-2xl text-gray-800 font-light" >Clientes</h1>

      <table className="table-auto shadow-md mt-10 w-full w-lg">
        <thead className="bg-gray-800">
          <tr className="text-white">
            <th className="w-1/5 py-2">Nombre</th>
            <th className="w-1/5 py-2">Empresa</th>
            <th className="w-1/5 py-2">Email</th>
          </tr>
        </thead>

        <tbody className="bg-white">
          {data.getClientsBySeller.map(({ id, name, lastName, company, email }) => (
            <tr key={id}>
              <td className="border px-4 py-2">{name} {lastName}</td>
              <td className="border px-4 py-2">{company}</td>
              <td className="border px-4 py-2">{email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  )
}

export default Home