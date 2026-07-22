import React, { useState } from 'react'



const App = () => {

  const SubmitHandler = (e) => {
    e.preventDefault()
    console.log(title);

  }

  const [title, setTitle] = useState('')

  return (
    <div className='h-screen lg:flex bg-black text-white '>
      <form onSubmit={(e) => {
        SubmitHandler(e)
      }} action=""
        className='flex flex-col gap-4 p-10 items-start lg:w-1/2 '>

        <h1 className='text-4xl font-bold'>Add Notes</h1>
        <input type="text" className='bg-black border-2 rounded px-5 py-7 m-0 w-full outline-none font-medium' placeholder='Enter Notes' 
        onChange={(e)=>{
          setTitle(e.target.value);
          
        }}/>

        <textarea className='border-2 rounded px-5 py-5 outline-none w-full h-50 font-medium' placeholder='Enter Details' />

        <button className='bg-white text-black w-full outline-none px-5 py-7 rounded font-medium'>
          Add Note
        </button>

      </form>
      <div className='p-10 lg:w-1/2 lg:border-l-2 '>
        <h1 className='font-bold text-2xl'>Recent Notes</h1>
        <div className='flex flex-wrap gap-5 mt-5 h-full overflow-auto'>
          <div className='h-50 w-40 text-black bg-white rounded-2xl'>1</div>
          <div className='h-50 w-40 text-black bg-white rounded-2xl'>2</div>
          <div className='h-50 w-40 text-black bg-white rounded-2xl'>3</div>
          <div className='h-50 w-40 text-black bg-white rounded-2xl'>4</div>
          <div className='h-50 w-40 text-black bg-white rounded-2xl'>5</div>
          <div className='h-50 w-40 text-black bg-white rounded-2xl'>6</div>
          <div className='h-50 w-40 text-black bg-white rounded-2xl'>7</div>
          <div className='h-50 w-40 text-black bg-white rounded-2xl'>8</div>
          <div className='h-50 w-40 text-black bg-white rounded-2xl'>9</div>
          <div className='h-50 w-40 text-black bg-white rounded-2xl'>10</div>
        </div>
      </div>
    </div>

  )
}

export default App