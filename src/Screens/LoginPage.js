import React, { useContext } from 'react'
import { UserWhatsappContext } from '../Context/Context'
import { query, where, onSnapshot } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AddressPage from './AddressPage'
import { collectionRef } from '../Fire-config'

const LoginPage = () => {
  let navigate = useNavigate()
  const { state1 } = useContext(UserWhatsappContext)
  const [number, setNumber] = state1

  const { state6 } = useContext(UserWhatsappContext)
  const { state7 } = useContext(UserWhatsappContext)
  const [userIsAuth, setUserIsAuth] = state7
  const [page, setPage] = state6

  // cheking if the user is already present===================================

  const q = query(collectionRef, where('whatsapp', '==', number))
  const fetchUser = onSnapshot(q, (snap) => {
    if (!snap.empty) {
      const data = snap.docs[0].data()
      console.log(data.name)
      setUserIsAuth(true)
      localStorage.setItem('isAuth', true)
      localStorage.setItem('name', data.name)
      localStorage.setItem('address', data.address)
      localStorage.setItem('city', data.city)
      localStorage.setItem('phone', data.whatsapp)
      localStorage.setItem('status', data.status)
      navigate('/')
      setNumber('')
    } else {
      console.log('no user found')
    }
  })

  // if the user is not present then add new user===========================

  const addNewUser = async () => {
    if (number === '') {
      toast.error('Please Enter a Valid Number')
    } else if (number.length < 11) {
      toast.error('Please Enter a Valid Number')
    } else if (number.length > 11) {
      toast.error('Please Enter a Valid Number')
    } else if (number.length === 11) {
      setPage(true)
    } else {
      console.log('creaisdf')
    }
  }

  return (
    <>
      {page ? (
        <AddressPage />
      ) : (
        <>
          <ToastContainer />
          <div className='has-text-centered login-container'>
            <div className='loginvox box'>
              <p className='mt-5 is-size-4 has-text-centered'>
                Please Enter your Whatsapp number
              </p>
              <hr></hr>
              <input
                type='number'
                onChange={(e) => setNumber(e.target.value)}
                autoFocus
                className='mt-5 input is-focused'
                placeholder='03XXXXXXXXX'
              ></input>
              <button
                onClick={addNewUser}
                className='is-fullwidth mt-5 button is-link'
              >
                Next
              </button>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default LoginPage
