import React, { useState } from 'react'
import Navbar from './Navbar'

const App = () => {
  const [Theme, setTheme] = useState('light')
  const [text, settext] = useState('default text')
  
  return (
    <div>
      <h1>
        Theme is {Theme}
      </h1>
      <Navbar theme = {Theme} setTheme={setTheme} input = {settext}/>
      <h1>
        You typed <u>{text}</u> in a child element.
      </h1>
    </div>
  )
}

export default App