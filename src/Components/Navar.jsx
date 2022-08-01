import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../images/bando.png'
import { UserWhatsappContext } from '../Context/Context'

const Navar = () => {
  let navigate = useNavigate()
  const { state7 } = useContext(UserWhatsappContext)
  const [userIsAuth, setUserIsAuth] = state7

  useEffect(() => {
    const aa = localStorage.getItem('isAuth')
    const auth1 = JSON.parse(aa)
    if (auth1 === true) {
      setUserIsAuth(true)
      console.log('userisdsad')
    } else {
      setUserIsAuth(false)
    }
  }, [])
  const handleLogout = () => {
    localStorage.clear()
    setUserIsAuth(false)
    navigate('/login')
  }
  const handleLogin = () => {
    navigate('/login')
  }

  return (
    <>
      <div className='navar'>
        <div>
          <Link to='/'>
            <img className='logo' src={logo} alt='Logohere'></img>
          </Link>
        </div>
        <ul className='items'>
          <li>
            <Link className='menu' to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link className='menu' to='/contact'>
              Contact
            </Link>
          </li>
          {userIsAuth ? (
            <button
              onClick={handleLogout}
              className='button is-danger is-small'
            >
              Logut
            </button>
          ) : (
            <button onClick={handleLogin} className='button  is-small'>
              Login
            </button>
          )}
        </ul>
      </div>
    </>
  )
}

export default Navar
