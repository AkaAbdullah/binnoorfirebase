import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
  let fauth = localStorage.getItem('isAuth')
  const auth = JSON.parse(fauth)

  return auth ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoutes
