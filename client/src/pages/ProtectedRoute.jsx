import { Navigate } from 'react-router-dom'
import { useAppContext } from '../context/context'
import Loading from '../components/Loading'

function ProtectedRoute({ children }) {
  const { user, userLoading } = useAppContext()

  if (userLoading) return <Loading />
  if (!user) {
    return <Navigate to='/landing' />
  }
  return children
}
export default ProtectedRoute
