import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between p-8 bg-cyan-800'>
        <h3 className='text-4xl font-bold text-white'>Website.com</h3>
        <div className='flex items-center gap-8'>
            <a href="\pages\Home.jsx">Home</a>
            <a href="\pages\Home.jsx">Home</a>
            <a href="\pages\Home.jsx">Home</a>
        </div>
    </div>
  )
}

export default Navbar