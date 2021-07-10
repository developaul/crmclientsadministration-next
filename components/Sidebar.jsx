import Link from 'next/link'
import { useRouter } from 'next/router'
import { useMemo } from 'react'

const Sidebar = () => {
  const router = useRouter()
  const currentPathName = useMemo(() => router.pathname, [router.pathname])

  return (
    <aside className="bg-gray-800 sm:w-1/3 xl:w-1/5 sm:min-h-screen p-5">
      <div>
        <p className="text-white text-2xl font-black">CRM Clientes</p>
      </div>

      <nav className="mt-5 list-none">
        <li className={currentPathName === '/' ? 'bg-blue-800 p-2' : 'p-2'}>
          <Link href="/">
            <a className="text-white mb-2 block">
              Clientes
            </a>
          </Link>
        </li>
        <li className={currentPathName === '/pedidos' ? 'bg-blue-800 p-2' : 'p-2'}>
          <Link href="/pedidos">
            <a className="text-white mb-2 block">
              Pedidos
            </a>
          </Link>
        </li>
        <li className={currentPathName === '/productos' ? 'bg-blue-800 p-2' : 'p-2'}>
          <Link href="/productos">
            <a className="text-white block">
              Productos
            </a>
          </Link>
        </li>
      </nav>
    </aside>
  )
}

export default Sidebar
