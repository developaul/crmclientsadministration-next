import Link from 'next/link'
import useGetCurrentPath from '../hooks/useGetCurrentPath'

const Sidebar = () => {
  const [currentPathName] = useGetCurrentPath()
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

      <div className="sm:mt-10">
        <p className="text-white text-2xl font-black">Otras Opciones</p>
      </div>

      <nav className="mt-5 list-none">
        <li className={currentPathName === '/mejores-vendedores' ? 'bg-blue-800 p-2' : 'p-2'}>
          <Link href="/mejores-vendedores">
            <a className="text-white mb-2 block">
              Mejores Vendedores
            </a>
          </Link>
        </li>
        <li className={currentPathName === '/mejores-clientes' ? 'bg-blue-800 p-2' : 'p-2'}>
          <Link href="/mejores-clientes">
            <a className="text-white mb-2 block">
              Mejores Clientes
            </a>
          </Link>
        </li>
      </nav>
    </aside>
  )
}

export default Sidebar
