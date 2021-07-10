import { useRouter } from "next/router"
import { useMemo } from "react"

const useGetCurrentPath = () => {
  const router = useRouter()
  const currentPathName = useMemo(() => router.pathname, [router.pathname])
  return [currentPathName]
}

export default useGetCurrentPath