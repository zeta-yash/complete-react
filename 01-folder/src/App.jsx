import React from 'react'
import Card from './components/Card'
// lets create a single card first

const arr = ["Adi","Amit","Nitin","Yash"] // the data
const App = () => {
  
  return (
    <div className='parent'>
      {arr.map(function(elem){ // method to spread the data
        return <Card user = {elem}/>
      })}
      <Card user = "Yash"/> 
    </div>
  )
}
//test


export default App