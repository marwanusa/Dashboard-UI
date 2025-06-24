import { Navigate } from 'react-router-dom'
import AdminPage from './views/pages/AdminPage/AdminPage'

const AdminRoute = () => {
  const user = localStorage.getItem('user')
  console.log(user)
  if (!user || user !== 'admin') {
    return <Navigate to="/not-authorized" />
  }

  // eslint-disable-next-line prettier/prettier
  return <AdminPage/>
}

export default AdminRoute
