import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'

const App = () => {
  const [user, setUser] = useState([])
  const [index, setindex] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=15`)
    // console.log(response.data);
    setUser(response.data)
  }

  useEffect(() => {
    getData()
  }, [index])

  let printUser = <h3 className='text-gray-400 text-7xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h3>
  if (user.length > 0) {
    printUser = user.map(function (elem, idx) {
      // return idx
      return <div key={idx}>
        <Card elem={elem}/>
      </div>
    })
  }
  return (
    <div className='overflow-auto px-10 py-10 h-screen'>

      {/* <button className='bg-green-500 text-2xl m-4 p-6 rounded-2xl active:scale-95'
        onClick={getData}>
        Get Data
      </button> */}

      <div className='flex flex-wrap gap-6 h-[95%] '>
        {printUser}
      </div>

      <div className='flex justify-center items-center gap-4'>
        <button className='text-xl bg-amber-400 rounded py-2 px-4 m-2 font-semibold text-black active:scale-95 cursor-pointer' 
        onClick={()=>{
          if (index>1){
            setindex(index-1)
            setUser([])
          }
          }}
          
          style={{opacity: index == 1 ? 0.5 : 1}}>Prev</button>
        <h1 className='text-xl text-white'>Page {index}</h1>
        <button className='text-xl bg-amber-400 rounded py-2 px-4 m-2 font-semibold text-black active:scale-95 cursor-pointer' onClick={()=>{setindex(index+1); setUser([])}}>Next</button>
      </div>
    </div>
  )
}

export default App