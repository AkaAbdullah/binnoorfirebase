import './App.css'
import LoginPage from './Screens/LoginPage'
import Navar from './Components/Navar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Screens/HomePage'
import ContactPage from './Screens/ContactPage'
import { UserWhatsappProvider } from './Context/Context'
import Footer from './Components/Footer'
import PrivateRoutes from './Routes/ProtectedRoutes'
import ProtectedRoutes2 from './Routes/ProtectedRoutes2'
import ProductsPage from './Screens/ProductsPage'

function App() {
  return (
    <>
      <UserWhatsappProvider>
        <div className='App'>
          <BrowserRouter>
            <Navar />
            <Routes>
              <Route element={<PrivateRoutes />}>
                <Route path='/' element={<HomePage />} />
                <Route path='/product' element={<ProductsPage />} />
              </Route>
              <Route element={<ProtectedRoutes2 />}>
                <Route path='/login' element={<LoginPage />} />
              </Route>
              <Route path='/contact' element={<ContactPage />} />
            </Routes>
          </BrowserRouter>
          <Footer />
        </div>
      </UserWhatsappProvider>
    </>
  )
}

export default App
