import React from 'react'
import Card from './components/Card'
// lets create a single card first
const App = () => {
  return (
    <div className='parent'>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}



export default App