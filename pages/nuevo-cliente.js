import { useMutation } from '@apollo/client'
import { useCallback, useState } from 'react'
import { useRouter } from 'next/router'
import * as Yup from 'yup'

import FeedbackMessage from '../components/FeedbackMessage'
import ErrorMessage from '../components/ErrorMessage'
import Layout from '../components/Layout'
import useValidations from '../hooks/useValidations'
import { GET_CLIENTS_BY_SELLER, MUTATION_CREATE_CLIENTE } from '../apollo/types'

const NewClient = () => {
  const [createClient] = useMutation(MUTATION_CREATE_CLIENTE, {
    update(cache, { data: { createClient: client } }) {
      const { getClientsBySeller } = cache.readQuery({ query: GET_CLIENTS_BY_SELLER })
      cache.writeQuery({
        query: GET_CLIENTS_BY_SELLER,
        data: {
          getClientsBySeller: [
            ...getClientsBySeller,
            client
          ]
        }
      })
    }
  })
  const router = useRouter()
  const [message, setMessage] = useState(null)

  const _handleCreateClient = useCallback(async input => {
    try {
      await createClient({ variables: { input } })
      router.push('/')
    } catch (error) {
      setMessage(error.message)
      setTimeout(() => setMessage(null), 3000)
    }
  }, [createClient, router])

  const [formik] = useValidations(initialValues, validationSchema, _handleCreateClient)

  return (
    <Layout>
      <h1 className="text-2xl text-gray-800 font-light" >Nuevo Cliente</h1>
      {message && <FeedbackMessage message={message} />}

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
                placeholder="Nombre Cliente"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
            </div>
            {formik.touched.name && formik.errors.name && <ErrorMessage message={formik.errors.name} />}


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
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />
            </div>
            {formik.touched.lastName && formik.errors.lastName && <ErrorMessage message={formik.errors.lastName} />}

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
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.company}
              />
            </div>
            {formik.touched.company && formik.errors.company && <ErrorMessage message={formik.errors.company} />}


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
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
            </div>
            {formik.touched.email && formik.errors.email && <ErrorMessage message={formik.errors.email} />}

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
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
            </div>

            <input
              type="submit"
              className="bg-gray-800 w-full mt-5 p-2 rounded text-white uppercase hover:bg-gray-900"
              value="Registrar Cliente"
            />
          </form>
        </div>
      </div>
    </Layout>
  )
}

const initialValues = {
  name: '',
  lastName: '',
  company: '',
  email: '',
  phone: ''
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


export default NewClient
