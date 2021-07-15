
import Layout from '../components/Layout'
import ResumenOrder from '../components/ResumenOrder'
import AssignClient from '../components/AssignClient'
import ResumenTotal from '../components/ResumenTotal'
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
          <ResumenTotal />

          <button
            type="button"
            className={`bg-gray-800 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-gray-900`}
          >
            Registrar Pedido
          </button>
        </div>
      </div>
    </Layout>
  )
}



export default NewOrder