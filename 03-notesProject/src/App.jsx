import React, { useState } from 'react'



const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])
  
  const SubmitHandler = (e) => {
    e.preventDefault()
    // console.log(title);

    const copyTask = [...task]
    copyTask.push({title,details})
    setTask(copyTask);
    console.log(copyTask);
    
    
    setTitle('')
    setDetails('')

  }


  return (
    <div className='h-screen lg:flex bg-black text-white '>
      <form onSubmit={(e) => {
        SubmitHandler(e)
      }} action=""
        className='flex flex-col gap-4 p-10 items-start lg:w-1/2 '>

        <h1 className='text-4xl font-bold'>Add Notes</h1>
        <input type="text" className='bg-black border-2 rounded px-5 py-7 m-0 w-full outline-none font-medium' placeholder='Enter Notes' value={title}
        onChange={(e)=>{
          setTitle(e.target.value);
          
        }}/>

        <textarea className='border-2 rounded px-5 py-5 outline-none w-full h-50 font-medium' placeholder='Enter Details' value={details} 
        onChange={(e) =>{
          setDetails(e.target.value);
          
        }} />

        <button className='bg-white text-black w-full outline-none px-5 py-7 rounded font-medium
        active:bg-blue-100 '>
          Add Note
        </button>

      </form>
      <div className='p-10 lg:w-1/2 lg:border-l-2 '>
        <h1 className='font-bold text-2xl'>Recent Notes</h1>
        <div className='flex flex-wrap gap-5 mt-5 h-full overflow-auto'>
          {task.map(function(elem,idx){
            return <div key={idx} className='h-50 w-40 p-4 text-black bg-white rounded-2xl'>
              <h3 className='text-l font-bold leading-tight'>{elem.title}</h3>
              {/* <hr className='w-8/10 justify-center text-gray-200 ' /> */}
              <p className='mt-1 font-medium text-gray-500'>{elem.details}</p>
            </div>
          })}
        </div>
      </div>
    </div>

  )
}

export default App