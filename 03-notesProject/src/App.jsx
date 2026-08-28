import React, { useState } from 'react'



const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])
  
  const SubmitHandler = (e) => {
    e.preventDefault() //to avoid refreshing the page on every submit button press
    // console.log(title);

    const copyTask = [...task]
    copyTask.push({title,details})
    setTask(copyTask);
    
    
    setTitle('')
    setDetails('')

  }

  const deleteNote=(idx)=>{
    const copyTask = [...task];
    copyTask.splice(idx,1)
    setTask(copyTask)
    
    
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
            return <div key={idx} className="flex flex-col item-start justify-between  gap-5 h-50 w-40 bg-cover pt-8 pb-4 px-4 text-black bg-[url('https://imgs.search.brave.com/rd9dgHgNJdvQ0k4mr53zul4ZTY_QI5Sh_q31hcF7G1w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDQv/MjQ5LzI3NS9zbWFs/bC9ibGFuay1hbmQt/d2hpdGUtbm90ZWJv/b2std2l0aC1zcGly/YWwtd2l0aG91dC1i/YWNrZ3JvdW5kLXRl/bXBsYXRlLWZvci1t/b2NrdXAtcG5nLnBu/Zw')] bg-center bg-size-[auto_230px] rounded-2xl">
              <div>
                <h3 className='text-l font-bold leading-tight'>{elem.title}</h3>
              {/* <hr className='w-8/10 justify-center text-gray-200 ' /> */}
              <p className='mt-1 font-medium text-gray-500'>{elem.details}</p>
              </div>
              <button onClick={()=>{
                deleteNote(idx)
              }} className='bg-red-500 rounded cursor-pointer w-full active:translate-y-0.5'>
                Delete
              </button>
            </div>
          })}
        </div>
      </div>
    </div>

  )
}

export default App