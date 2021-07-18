import Head from 'next/head'
import { useMemo } from 'react'

import Sidebar from './Sidebar'
import Header from './Header'
import useGetCurrentPath from '../hooks/useGetCurrentPath'

const Layout = ({ children }) => {
  const [currentPathName] = useGetCurrentPath()
  const isAuthPage = useMemo(() => currentPathName === '/signin' || currentPathName === '/signup', [currentPathName])

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer" />
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet" />
        <title>CRM - Administración de Clientes</title>
      </Head>

      {isAuthPage ? (
        <div className="bg-gray-800 min-h-screen flex flex-col justify-center">
          <main>
            {children}
          </main>
        </div>
      ) : (
        <div className="bg-gray-200 min-h-screen">
          <div className="sm:flex min-h-screen">
            <Sidebar />
            <main className="sm:w-2/3 xl:w-4/5 sm:min-h-screen p-5">
              <Header />
              {children}
            </main>
          </div>
        </div >
      )}
    </>
  )
}

export default Layout
