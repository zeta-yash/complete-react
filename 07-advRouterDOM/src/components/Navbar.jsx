import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between p-8 bg-cyan-800'>
      <Link to='/'>
        <h3 className='text-4xl font-bold text-white'>Website.com</h3>
      </Link>
        <div className='flex items-center gap-8'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/courses'>Courses</Link>
            <Link to='/product'>Product</Link>
        </div>
    </div>
  )
}

export default Navbar