import { useRouter } from 'next/router'

const EditClient = () => {
  const router = useRouter()
  const { query: { id } } = router

  return (
    <div>
      Desde editar lol
    </div>
  )
}

export default EditClient
