import React, { useState, useEffect, useContext } from 'react'
import { doc, getDoc, query, where, onSnapshot } from 'firebase/firestore'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { UserWhatsappContext } from '../Context/Context'
import { TailSpin } from 'react-loader-spinner'
import { orderCollection } from '../Fire-config'

import { db } from '../Fire-config'
import { useNavigate } from 'react-router-dom'
const HomePage = () => {
  const navigate = useNavigate()
  const { state2 } = useContext(UserWhatsappContext)
  const [loading, setLoading] = state2
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [status, setStatus] = useState('')
  const [city, setCity] = useState('')
  const [pcode, setPcode] = useState('')
  const [orders, setOrders] = useState('')

  useEffect(() => {
    localStorage.removeItem('productName')
    localStorage.removeItem('productPrice')
    localStorage.removeItem('productDetail')
    localStorage.removeItem('productSku')
  }, [])

  useEffect(() => {
    const name = localStorage.getItem('name')
    setName(name)
    const address = localStorage.getItem('address')
    setAddress(address)
    const city = localStorage.getItem('city')
    setCity(city)
    const number = localStorage.getItem('phone')
    setPhone(number)
    const status = localStorage.getItem('status')
    setStatus(status)
  }, [])

  const pp = localStorage.getItem('phone')
  const q = query(orderCollection, where('contact', '==', pp))
  const fetchOrder = onSnapshot(q, (snap) => {
    const data = snap.docs[0].data()
    console.log(data.orderId)
    setOrders(data.orderId)
  })
  useEffect(() => {
    fetchOrder()
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    setLoading(true)
    const docRef = doc(db, 'products', pcode)
    getDoc(docRef)
      .then((doc) => {
        let pDetails = []
        pDetails.push(doc.data(), doc.id)
        pDetails.map((x) => console.log(x.price))
        localStorage.setItem(
          'productName',
          pDetails.map((x) => x.pName)
        )
        localStorage.setItem(
          'productPrice',
          pDetails.map((x) => x.price)
        )
        localStorage.setItem(
          'productDetail',
          pDetails.map((x) => x.details)
        )
        localStorage.setItem('productSku', pcode)
        navigate('/product')
        setLoading(false)
      })
      .catch((err) => {
        setLoading(true)
        toast.error('Product not Found')
        setLoading(false)
      })
  }
  return (
    <>
      <ToastContainer />
      <div className='mainhome'>
        <div className='home-container'>
          <div className='box adres'>
            <p className=' has-text-centered is-size-4'>Welcome</p>
            <p className='is-size-5 has-text-centered mt-4'>{name}</p>
            <p className='is-size-6 mt-4'>
              <strong>User Status :</strong> {status} user
            </p>
            <p className='is-size-6'>
              <strong>Delivery Address :</strong> {address}
            </p>
            <p className='is-size-6'>
              <strong>City :</strong> {city}
            </p>
            <p className='is-size-6'>
              <strong>Contact :</strong> {phone}
            </p>
            <hr></hr>
            <p className='mt-4 is-size-5 has-text-centered'>
              Enter Product Code
            </p>
            <input
              autoFocus
              className='input is-fullwidth is-link mt-4 is-focused'
              placeholder='Enter Product Code'
              onChange={(e) => setPcode(e.target.value)}
            ></input>
            <button
              onClick={handleSearch}
              className='button is-fullwidth is-link mt-4'
            >
              View Product Details
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
        <div className='orders-container'>
          <div className='box adress '>
            <p className='is-size-5 has-text-centered'>My Orders</p>
            <hr></hr>
            <p className='is-size-6'>
              <strong>Your Order No : </strong> {orders}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
