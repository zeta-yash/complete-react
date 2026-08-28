import React from 'react'

const Navbar = (props) => {

    console.log(props);
  return (
    <div className='nav'>
        <p>
            the theme is inherited : {props.theme}
        </p>
        <button onClick={()=>{
            props.setTheme('Dark-btn')
        }}>Change theme</button>

        <input type="text" onChange={(e)=>{
            props.input(e.target.value)
        }}/>
    </div>
  )
}

export default Navbar