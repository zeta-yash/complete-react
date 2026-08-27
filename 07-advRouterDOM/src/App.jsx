import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Product from './pages/Product'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'



const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />}>
          <Route index element={<h1>Product Page</h1>} /> {/*displays the product page as default*/}
          <Route path='men' element={<Men />} />
          <Route path='women' element={<Women />} />
          <Route path='kids' element={<Kids />} />
        </Route>

        {/* <Route path='/product/men' element={<Men />} />
        <Route path='/product/women' element={<Women />} /> */}
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />

    </div>
  )
}

export default App