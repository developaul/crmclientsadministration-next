import * as Yup from 'yup'

import Layout from '../components/Layout'
import useValidations from '../hooks/useValidations'
import ErrorMessage from '../components/ErrorMessage'

const NewProduct = () => {

  const _handleCreateProduct = () => {

  }

  const [formik] = useValidations(initialValues, validationSchema, _handleCreateProduct)

  return (
    <Layout>
      <h1 className="text-2xl text-gray-800 font-light" >Crear Nuevo Producto</h1>
      <div className="flex justify-center mt-5">
        <div className="w-full max-w-lg">
          <form
            onSubmit={formik.handleSubmit}
            className="bg-white shadow-md px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Nombre
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Nombre Producto"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
            </div>
            {formik.touched.name && formik.errors.name && <ErrorMessage message={formik.errors.name} />}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="stock"
              >
                Cantidad Disponible
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="stock"
                type="number"
                placeholder="Cantidad Disponible"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.stock}
              />
            </div>
            {formik.touched.stock && formik.errors.stock && <ErrorMessage message={formik.errors.stock} />}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="price"
              >
                Precio
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="price"
                type="number"
                placeholder="Precio Producto"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.price}
              />
            </div>
            {formik.touched.price && formik.errors.price && <ErrorMessage message={formik.errors.price} />}

            <input
              type="submit"
              className="bg-gray-800 w-full mt-5 p-2 rounded text-white uppercase hover:bg-gray-900"
              value="Agregar Nuevo Producto"
            />
          </form>
        </div>
      </div>

    </Layout>
  )
}

const initialValues = {
  name: '',
  stock: '',
  price: ''
}

const validationSchema = Yup.object({
  name: Yup
    .string()
    .trim()
    .required('El nombre es obligatorio'),
  stock: Yup
    .number()
    .required('Agrega la cantidad disponible')
    .positive('No se aceptan números negativos')
    .integer('La existencia deben ser números enteros'),
  price: Yup
    .number()
    .required('El precio es obligatorio')
    .positive('No se aceptan números negativos')
})


export default NewProduct