import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [user, setUser] = useState([])

  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list?page=1&limit=15')
    console.log(response.data);
    setUser(response.data)
  }

  let printUser = "No image available"
  if (user.length > 0) {
    printUser = user.map(function (elem,idx) {
      // return idx
      return <div className='h-60 w-80 rounded-xl ' >
        <img src={elem.download_url} alt="" />
      </div>
    })
  }
  return (
    <div>
      <h1>Hello</h1>
      <button className='bg-green-500 text-2xl m-4 p-6 rounded-2xl active:scale-95'
        onClick={getData}>
        Get Data
      </button>
      <div className='flex flex-wrap gap-6 '>
        {printUser}
      </div>
    </div>
  )
}

export default App