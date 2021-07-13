import { useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { Formik } from 'formik'
import Swal from 'sweetalert2'
import * as Yup from 'yup'

import Layout from '../../components/Layout'
import ErrorMessage from '../../components/ErrorMessage'
import {
  GET_CLIENT,
  MUTATION_UPDATE_CLIENT
} from '../../apollo/types'

const EditClient = () => {
  const router = useRouter()
  const { query: { id } } = router
  const { data, loading } = useQuery(GET_CLIENT, { variables: { id } })
  const [updateClient] = useMutation(MUTATION_UPDATE_CLIENT)

  const _handleUpdateClient = useCallback(async input => {
    try {
      await updateClient({ variables: { id, input } })
      Swal.fire(
        'Actualizado',
        'El cliente se actualizó correctamente',
        'success'
      )
      router.push('/')
    } catch (error) {
      Swal.fire(
        'Error',
        error.message,
        'error'
      )
    }
  }, [id, router, updateClient])

  if (loading) return null

  const { getClient: { __typename, ...client } } = data

  return (
    <Layout>
      <h1 className="text-2xl text-gray-800 font-light" >Editar Cliente</h1>

      <div className="flex justify-center mt-5">
        <div className="w-full max-w-lg">
          <Formik
            enableReinitialize
            validationSchema={validationSchema}
            initialValues={{ ...client }}
            onSubmit={_handleUpdateClient}
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
                    placeholder="Nombre Cliente"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                </div>
                {touched.name && errors.name && <ErrorMessage message={errors.name} />}


                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="lastName"
                  >
                    Apellido
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="lastName"
                    type="text"
                    placeholder="Apellido Cliente"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                  />
                </div>
                {touched.lastName && errors.lastName && <ErrorMessage message={rrors.lastName} />}

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="company"
                  >
                    Empresa
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="company"
                    type="company"
                    placeholder="Empresa Cliente"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.company}
                  />
                </div>
                {touched.company && errors.company && <ErrorMessage message={errors.company} />}


                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email Cliente"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                </div>
                {touched.email && errors.email && <ErrorMessage message={errors.email} />}

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="phone"
                  >
                    Teléfono
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="phone"
                    type="tel"
                    placeholder="Teléfono Cliente"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                  />
                </div>

                <input
                  type="submit"
                  className="bg-gray-800 w-full mt-5 p-2 rounded text-white uppercase hover:bg-gray-900"
                  value="Actualizar Cliente"
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
  lastName: Yup
    .string()
    .trim()
    .required('El apellido es obligatorio'),
  company: Yup
    .string()
    .trim()
    .required('El campo empresa es obligatorio'),
  email: Yup
    .string()
    .trim()
    .email('Email no válido')
    .required('El email es obligatorio'),
  phone: Yup
    .string()
    .trim()
})


export default EditClient
