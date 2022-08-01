import React, { useContext } from 'react'
import { UserWhatsappContext } from '../Context/Context'
import { db } from '../Fire-config'
import { useNavigate } from 'react-router-dom'

import { addDoc, collection } from 'firebase/firestore'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { TailSpin } from 'react-loader-spinner'

const AddressPage = () => {
  let navigate = useNavigate()

  const { state3 } = useContext(UserWhatsappContext)
  const [city, setCity] = state3
  const { state4 } = useContext(UserWhatsappContext)
  const [name, setName] = state4
  const { state5 } = useContext(UserWhatsappContext)
  const [address, setAddress] = state5
  const { state2 } = useContext(UserWhatsappContext)
  const [loading, setLoading] = state2
  const { state1 } = useContext(UserWhatsappContext)
  const [number, setNumber] = state1
  const { state6 } = useContext(UserWhatsappContext)
  const [page, setPage] = state6
  const { state7 } = useContext(UserWhatsappContext)
  const [userIsAuth, setUserIsAuth] = state7

  const handleCity = (e) => {
    e.preventDefault()
    setCity(e.target.value)
  }
  const userCollectionsRef = collection(db, 'users')
  const saveUser = async () => {
    if (name === '') {
      toast.error('Please Enter Name')
    } else if (city === '') {
      toast.error('Please Select City')
    } else if (address === '') {
      toast.error('Please Enter Address')
    } else {
      setLoading(true)
      const ucase = name.toUpperCase()
      await addDoc(userCollectionsRef, {
        whatsapp: number,
        name: ucase,
        city: city,
        address: address,
        status: 'unverified',
      })
      toast.success('New User Created')
      setTimeout(() => {
        setLoading(false)
      }, 1300)
      navigate('/')
      localStorage.setItem('isAuth', true)
      localStorage.setItem('name', ucase)
      localStorage.setItem('city', city)
      localStorage.setItem('address', address)
      localStorage.setItem('phone', number)
      localStorage.setItem('status', 'unverified')
      setLoading(false)
      setUserIsAuth(true)
      setPage(false)
    }
  }

  const handleback = (e) => {
    e.preventDefault()
    setPage(false)
    setNumber('')
  }
  return (
    <>
      <ToastContainer />
      <div className='address-container'>
        <div className='box adres'>
          <button
            onClick={handleback}
            className='button is-outlined mb-3 is-small is-danger'
          >
            back
          </button>
          <p className='is-size-4 has-text-centered'>
            Please Enter Your Full Name
          </p>
          <input
            className='input is-focused mt-4'
            placeholder='Name'
            autoFocus
            required
            style={{ textTransform: 'uppercase' }}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <p className='is-size-4 mt-4'>Select City</p>
          <div className='select is-info is-fullwidth mt-4'>
            <select onChange={handleCity} name='city' id='city'>
              <option value='notSelected'>-----</option>
              <option value='Abbottabad'>Abbottabad</option>
              <option value='Ahmadpur East'>Ahmadpur East</option>
              <option value='Bahawalnagar'>Bahawalnagar</option>
              <option value='Bahawalpur'>Bahawalpur</option>
              <option value='Burewala'>Burewala</option>
              <option value='Chakdara'>Chakdara</option>
              <option value='Chakwal'>Chakwal</option>
              <option value='Chaman'>Chaman</option>
              <option value='Chiniot'>Chiniot</option>
              <option value='Chishtian'>Chishtian</option>
              <option value='Dadu'>Dadu</option>
              <option value='Daska'>Daska</option>
              <option value='DeraGhaziKhan'>Dera Ghazi Khan</option>
              <option value='DeraIsmailKhan'>Dera Ismail Khan</option>
              <option value='Faisalabad'>Faisalabad</option>
              <option value='Gojra'>Gojra</option>
              <option value='Gujranwala'>Gujranwala</option>
              <option value='Gujrat'>Gujrat</option>
              <option value='Hafizabad'>Hafizabad</option>
              <option value='Hyderabad'>Hyderabad</option>
              <option value='Islamabad'>Islamabad</option>
              <option value='Jacobabad'>Jacobabad</option>
              <option value='Jaranwala'>Jaranwala</option>
              <option value='Jhang'>Jhang</option>
              <option value='Jhelum'>Jhelum</option>
              <option value='Kamalia'>Kamalia</option>
              <option value='Kamoke'>Kamoke</option>
              <option value='Kandhkot'>Kandhkot</option>
              <option value='Karachi'>Karachi</option>
              <option value='Kasur'>Kasur</option>
              <option value='Khairpur'>Khairpur</option>
              <option value='Khanewal'>Khanewal</option>
              <option value='Khanpur'>Khanpur</option>
              <option value='Kohat'>Kohat</option>
              <option value='Lahore'>Lahore</option>
              <option value='Larkana'>Larkana</option>
              <option value='MandiBahauddin'>Mandi Bahauddin</option>
              <option value='Multan'>Multan</option>
              <option value='Muridke'>Muridke</option>
              <option value='Muzaffargarh'>Muzaffargarh</option>
              <option value='Nawabshah'>Nawabshah</option>
              <option value='Nowshera'>Nowshera</option>
              <option value='Okara'>Okara</option>
              <option value='Pakpattan'>Pakpattan</option>
              <option value='Peshawar'>Peshawar</option>
              <option value='Quetta'>Quetta</option>
              <option value='RahimYarKhan'>Rahim Yar Khan</option>
              <option value='Rawalpindi'>Rawalpindi</option>
              <option value='Sadiqabad'>Sadiqabad</option>
              <option value='Sahiwal'>Sahiwal</option>
              <option value='Sargodha'>Sargodha</option>
              <option value='Shekhupura'>Shekhupura</option>
              <option value='Shikarpur'>Shikarpur</option>
              <option value='Sialkot'>Sialkot</option>
              <option value='Sukkur'>Sukkur</option>
              <option value='TobaTekSIngh'>Toba Tek SIngh</option>
              <option value='WahCantonment'>Wah Cantonment</option>
              <option value='Vehari'>Vehari</option>
            </select>
          </div>
          <p className='is-size-4 mt-4'>Delivery Address</p>

          <textarea
            onChange={(e) => setAddress(e.target.value)}
            className='textarea mt-4'
            placeholder='house no ____ '
            required
          ></textarea>
          <button
            onClick={saveUser}
            className='button is-info is-fullwidth mt-4'
          >
            Save User Information
          </button>
          <div className='loder'>
            {loading ? (
              <>
                <p className='is-size-6'>Please Wait</p>
                <br />
                <TailSpin height='50' width='50' color='green' />
              </>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default AddressPage
