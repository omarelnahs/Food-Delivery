import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Login from './components/LoginPopup/Login'

const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      {showLogin && <Login setShowLogin={setShowLogin} />}
      <Navbar setShowLogin={setShowLogin} />
      <div className="app">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App