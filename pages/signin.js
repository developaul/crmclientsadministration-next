import { useCallback, useState } from 'react'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import * as Yup from 'yup'

import Layout from '../components/Layout'
import ErrorMessage from '../components/ErrorMessage'
import useValidations from '../hooks/useValidations'
import { MUTATION_AUTHENTICATE_USER } from '../apollo/types'
import FeedbackMessage from '../components/FeedbackMessage'

const SignIn = () => {
  const [authenticateUser] = useMutation(MUTATION_AUTHENTICATE_USER)
  const [message, setMessage] = useState(null)
  const router = useRouter()

  const _handleLogin = useCallback(async input => {
    try {
      setMessage(`Iniciando Sesión...`)

      const {
        data: { authenticateUser: token }
      } = await authenticateUser({ variables: { input } })

      localStorage.setItem('accessToken', token)

      setMessage(null)
      router.replace('/')
    } catch (error) {
      setMessage(error.message)
      setTimeout(() => setMessage(null), 3000)
    }
  }, [authenticateUser, router])

  const [formik] = useValidations(initialValues, validationSchema, _handleLogin)

  return (
    <Layout>
      {message && <FeedbackMessage message={message} />}

      <h1 className="text-center text-2xl text-white font-light">Sign In</h1>
      <div className="flex justify-center mt-5">
        <div className="w-full max-w-sm">
          <form
            onSubmit={formik.handleSubmit}
            className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4"
          >
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
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
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
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
            </div>
            {formik.touched.password && formik.errors.password && <ErrorMessage message={formik.errors.password} />}

            <input
              type="submit"
              className="bg-gray-800 w-full mt-5 p-2 rounded text-white uppercase hover:bg-gray-900"
              value="Iniciar Sesión"
            />
          </form>
        </div>
      </div>
    </Layout>
  )
}

const initialValues = {
  email: '',
  password: ''
}

const validationSchema = Yup.object({
  email: Yup
    .string()
    .trim()
    .email('El no es válido')
    .required('El email no puede ir vacio'),
  password: Yup
    .string()
    .trim()
    .required('El password es obligatorio')
    .min(6, 'El password debe ser de al menos 6 caracteres')
})

export default SignIn
