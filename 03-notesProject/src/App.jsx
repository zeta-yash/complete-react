import React from 'react'

const App = () => {
  return (
    <div className='text-center'>
      <form>

        <input type="text" placeholder='Enter here' className='border-2 border-blue-500 rounded-2xl '/>
        <button className='bg-blue-400 rounded-2xl ' type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App