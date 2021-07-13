import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { GET_CLIENT } from '../../apollo/types'
import Layout from '../../components/Layout'

const EditClient = () => {
  const router = useRouter()
  const { query: { id } } = router
  const { data, loading } = useQuery(GET_CLIENT, { variables: { id } })

  if (loading) return null

  const {
    getClient: {
      name,
      lastName,
      company,
      email,
      phone
    }
  } = data


  return (
    <Layout>
      <h1 className="text-2xl text-gray-800 font-light" >Editar Cliente</h1>

      <div className="flex justify-center mt-5">
        <div className="w-full max-w-lg">
          <form
            // onSubmit={formik.handleSubmit}
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
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              // value={formik.values.name}
              />
            </div>
            {/* {formik.touched.name && formik.errors.name && <ErrorMessage message={formik.errors.name} />} */}


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
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              // value={formik.values.lastName}
              />
            </div>
            {/* {formik.touched.lastName && formik.errors.lastName && <ErrorMessage message={formik.errors.lastName} />} */}

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
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              // value={formik.values.company}
              />
            </div>
            {/* {formik.touched.company && formik.errors.company && <ErrorMessage message={formik.errors.company} />} */}


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
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              // value={formik.values.email}
              />
            </div>
            {/* {formik.touched.email && formik.errors.email && <ErrorMessage message={formik.errors.email} />} */}

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
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              // value={formik.values.phone}
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

export default EditClient
