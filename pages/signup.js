import * as Yup from 'yup'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useMutation } from '@apollo/client'

import Layout from '../components/Layout'
import ErrorMessage from '../components/ErrorMessage'
import FeedbackMessage from '../components/FeedbackMessage'
import useValidations from '../hooks/useValidations'

import { MUTATION_CREATE_USER } from '../apollo/types'

const SignUp = () => {
  const [createUser] = useMutation(MUTATION_CREATE_USER)
  const [message, setMessage] = useState(null)
  const router = useRouter()

  const _handleCreateUser = useCallback(async input => {
    try {
      const {
        data: { createUser: user }
      } = await createUser({ variables: { input } })
      setMessage(`Se creo correctamente el usuario: ${user.name}`)
      setTimeout(() => {
        setMessage(null)
        router.push('/signin')
      }, 1500)
    } catch (error) {
      setMessage(error.message)
      setTimeout(() => setMessage(null), 3000)
    }
  }, [createUser, router])

  const [formik] = useValidations(initialValues, validationSchema, _handleCreateUser)

  return (
    <Layout>
      {message && <FeedbackMessage />}
      <h1 className="text-center text-2xl text-white font-light">Sign Up</h1>
      <div className="flex justify-center mt-5">
        <div className="w-full max-w-sm">
          <form
            onSubmit={formik.handleSubmit}
            className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4"
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
                type="name"
                placeholder="Nombre Usuario"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
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
                type="lastName"
                placeholder="Apellido Usuario"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.lastName && formik.errors.lastName && <ErrorMessage message={formik.errors.lastName} />}

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
                placeholder="Email Usuario"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.email && formik.errors.email && <ErrorMessage message={formik.errors.email} />}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password Usuario"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.password && formik.errors.password && <ErrorMessage message={formik.errors.password} />}

            <input
              type="submit"
              className="bg-gray-800 w-full mt-5 p-2 rounded text-white uppercase hover:bg-gray-900"
              value="Crear cuenta"
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
  email: '',
  password: ''
}

const validationSchema = Yup.object({
  name: Yup
    .string()
    .trim()
    .required('El nombre es obligatorio'),
  lastName: Yup
    .string()
    .trim()
    .required('El apellido esobligatorio'),
  email: Yup
    .string()
    .trim()
    .email('El email no es válido')
    .required('El email es obligatorio'),
  password: Yup
    .string()
    .trim()
    .required('El password no puede ir vacio')
    .min(6, 'El password debe ser de al menos 6 caracteres')
})

export default SignUp
