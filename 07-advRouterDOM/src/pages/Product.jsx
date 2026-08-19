import React from 'react'
import { Link } from 'react-router-dom'


const Product = () => {
  return (
    <div>
      <div className='flex justify-center gap-5'>
        <Link to='men' className='font-bold text-2xl text-white'>Mens</Link>
        <Link to='women' className='font-bold text-2xl text-white'>Women</Link>
        <Link to='kids' className='font-bold text-2xl text-white'>Kids</Link>
      </div>
      <h1>
        Products
      </h1>
    </div>
  )
}

export default Product