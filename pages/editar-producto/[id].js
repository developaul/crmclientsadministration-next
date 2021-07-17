import { useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { Formik } from 'formik'
import Swal from 'sweetalert2'
import * as Yup from 'yup'

import Layout from '../../components/Layout'
import ErrorMessage from '../../components/ErrorMessage'
import {
  GET_PRODUCT,
  MUTATION_UPDATE_PRODUCT
} from '../../apollo/types'

const EditProduct = () => {
  const router = useRouter()
  const { query: { id } } = router
  const { data, loading } = useQuery(GET_PRODUCT, { variables: { id } })
  const [updateProduct] = useMutation(MUTATION_UPDATE_PRODUCT)

  const _handleUpdateProduct = useCallback(async input => {
    try {
      await updateProduct({ variables: { id, input } })
      Swal.fire(
        'Actualizado',
        'El producto se actualizó correctamente',
        'success'
      )
      router.push('/productos')
    } catch (error) {
      Swal.fire(
        'Error',
        error.message,
        'error'
      )
    }
  }, [id, router, updateProduct])

  if (loading) return null

  const { getProduct: { __typename, ...product } } = data

  return (
    <Layout>
      <h1 className="text-2xl text-gray-800 font-light" >Editar Producto</h1>

      <div className="flex justify-center mt-5">
        <div className="w-full max-w-lg">
          <Formik
            enableReinitialize
            validationSchema={validationSchema}
            initialValues={{ ...product }}
            onSubmit={_handleUpdateProduct}
          >
            {({ handleSubmit, handleBlur, handleChange, touched, errors, values }) => (
              <form
                onSubmit={handleSubmit}
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
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                </div>
                {touched.name && errors.name && <ErrorMessage message={errors.name} />}


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
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.stock}
                  />
                </div>
                {touched.stock && errors.stock && <ErrorMessage message={errors.stock} />}

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
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.price}
                  />
                </div>
                {touched.price && errors.price && <ErrorMessage message={errors.price} />}

                <input
                  type="submit"
                  className="bg-gray-800 w-full mt-5 p-2 rounded text-white uppercase hover:bg-gray-900"
                  value="Actualizar Producto"
                />
              </form>
            )}
          </Formik>
        </div>
      </div>
    </Layout>
  )
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


export default EditProduct
