import { Outlet, Navigate } from 'react-router-dom'

const ProtectedRoutes2 = () => {
  const nauth = localStorage.getItem('isAuth')
  const auth = JSON.parse(nauth)
  return auth ? <Navigate to='/' /> : <Outlet />
}

export default ProtectedRoutes2
