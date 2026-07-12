import React, { useState } from 'react'



const App = () => {
  const [text, settext] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Submitted by",text);
    settext('');
  }

  return (
    <div className='text-center'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>

        <input type="text" 
        value={text}
        onChange={(e)=>{
        settext(e.target.value)
        }}
        placeholder='Enter here' 
        className='border-2 border-blue-500 rounded-2xl ' />
        <button className='bg-blue-400 rounded-2xl' type="submit" >Submit</button>
      </form>
    </div>
  )
}

export default App