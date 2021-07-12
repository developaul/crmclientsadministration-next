import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'

import { GET_USER } from '../apollo/types'
import { useCallback } from 'react'

const Header = () => {
  const { data, loading } = useQuery(GET_USER)
  const router = useRouter()

  const _handleSignOut = useCallback(() => {
    localStorage.removeItem('accessToken')
    router.push('/signin')
  }, [router])

  if (loading) return null
  if (!data?.getUser) {
    router.push('/signin')
    return null
  }

  const { name, lastName } = data.getUser

  return (
    <header className="flex justify-between mb-6">
      <p className="mr-2">Hola: {name} {lastName}</p>
      <button
        className="bg-blue-800 w-full sm:w-auto font-bold uppercase text-xs rounded text-white py-1 px-2 shadow-md"
        type="button"
        onClick={_handleSignOut}
      >
        Cerrar Sesión
      </button>
    </header>
  )
}

export default Header
