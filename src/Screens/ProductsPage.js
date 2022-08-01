import React, { useEffect, useState, useContext } from 'react'
import { db } from '../Fire-config'
import { addDoc, collection, updateDoc, doc } from 'firebase/firestore'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { UserWhatsappContext } from '../Context/Context'
import { TailSpin } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'

const ProductsPage = () => {
  let navigate = useNavigate()
  const { state2 } = useContext(UserWhatsappContext)
  const [loading, setLoading] = state2
  const [pName, setPname] = useState('')
  const [pPrice, setPprice] = useState('')
  const [pDetails, setPdetails] = useState('')
  const [user, setUser] = useState('')
  const [userNum, setUserNum] = useState('')
  const [sku, setSku] = useState('')

  useEffect(() => {
    setPname(localStorage.getItem('productName'))
    setPprice(localStorage.getItem('productPrice'))
    setPdetails(localStorage.getItem('productDetail'))
    setUser(localStorage.getItem('name'))
    setUserNum(localStorage.getItem('phone'))
    setSku(localStorage.getItem('productSku'))
  }, [])

  const handleOrder = (e) => {
    e.preventDefault()
    setLoading(true)
    const orderCollectionsRef = collection(db, 'orders')
    const placeOrder = async () => {
      let today = new Date()
      await addDoc(orderCollectionsRef, {
        date: today,
        userName: user,
        orderId: '',
        contact: userNum,
        product: sku,
      }).then((docRef) => {
        const orderId = docRef.id
        const orderCollectionsRef = doc(db, 'orders', orderId)
        updateDoc(orderCollectionsRef, {
          orderId: orderId,
        })
      })
      toast.success('Order Placed')
      setLoading(false)
      setTimeout(() => {
        navigate('/')
      }, 1300)
    }
    placeOrder()
  }
  return (
    <>
      <ToastContainer />
      <div className='product-container'>
        <div className='box adres'>
          <p className='has-text-weight-bold has-text-centered is-size-4'>
            Product Details
          </p>
          <hr></hr>
          <p className='is-size-5'>
            <strong>Product Name : </strong> {pName}
          </p>
          <p className='is-size-5'>
            <strong>Product Price : </strong> {pPrice}
          </p>
          <p className='is-size-5'>
            <strong>Product Details : </strong> {pDetails}
          </p>
          <button
            onClick={handleOrder}
            className='button is-link mt-4 is-fullwidth'
          >
            Place Order
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

export default ProductsPage
