
import Layout from '../components/Layout'
import ResumenOrder from '../components/ResumenOrder'
import AssignClient from '../components/AssignClient'
import AssignProduct from '../components/AssignProduct'


const NewOrder = () => {

  return (
    <Layout>
      <h1 className="text-2xl text-gray-800 font-light">Crear Nuevo Pedido</h1>
      <div className="flex justify-center mt-5">
        <div className="w-full max-w-lg">
          <AssignClient />
          <AssignProduct />
          <ResumenOrder />
        </div>
      </div>
    </Layout>
  )
}



export default NewOrder