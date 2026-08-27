import React from 'react'
import { useNavigate } from 'react-router-dom'

const Nav2 = () => {

    let navig = useNavigate()

  return (
    <div className='bg-cyan-500 px-7 py-3 flex gap-6 justify-center'>
        <button onClick={()=>{
            navig(-1)
        }}
        className='bg-[#ff9100] rounded-[5px] py-2 px-4 font-medium text-white'
        >Back</button>


        <button onClick={()=>{
            navig('/')
        }}
        className='bg-[#ff9100] rounded-[5px] py-2 px-4 font-medium text-white'
        >Home</button>


        <button onClick={()=>{
            navig(1)
        }}
        className='bg-[#ff9100] rounded-[5px] py-2 px-4 font-medium text-white'
        >Next</button>


    </div>
  )
}

export default Nav2