
import AssignProduct from '../components/AssignProduct'
import AssignClient from '../components/AssignClient'
import Layout from '../components/Layout'


const NewOrder = () => {

  return (
    <Layout>
      <h1 className="text-2xl text-gray-800 font-light">Crear Nuevo Pedido</h1>
      <AssignClient />
      <AssignProduct />
    </Layout>
  )
}



export default NewOrder