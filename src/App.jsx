import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Protfolio from './pages/porftolio'
import Services from './pages/services'
import Contact from './pages/contact'
import About from './pages/about'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/our-works' element={<Protfolio />} />
        <Route path='/our-services' element={<Services />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/about-us' element={<About />} />
      </Routes>
    <Footer />
    </>
  )
}

export default App