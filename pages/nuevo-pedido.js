import Select from 'react-select'

import Layout from '../components/Layout'

const options = [
  { id: 'chocolate', name: 'Chocolate' },
  { id: 'strawberry', name: 'Strawberry' },
  { id: 'vanilla', name: 'Vanilla' }
]

const NewOrder = () => {


  const _handleChange = (...rest) => {
    console.log("🚀 ~ NewOrder ~ rest", rest)
  }

  return (
    <Layout>
      <h1 className="text-2xl text-gray-800 font-light">Crear Nuevo Pedido</h1>
      <Select
        isMulti
        options={options}
        onChange={_handleChange}
        getOptionValue={({ id }) => id}
        getOptionLabel={({ name }) => name}
        placeholder="Seleccione el Producto"
        noOptionsMessage={() => "No hay resultados"}
      />
    </Layout>
  )
}



export default NewOrder