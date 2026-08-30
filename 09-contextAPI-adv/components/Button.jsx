import React, { useContext } from 'react'
import { ThemeDataContext } from '../src/context/ThemeContext'

const Button = () => {
    const [theme,setTheme] = useContext(ThemeDataContext)
  return (
    <div>
        <button onClick={()=> {
            setTheme('dark')
        }}>
            Change Theme 
        </button>
    </div>
  )
}

export default Button