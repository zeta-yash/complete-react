import React from 'react'
import Navbar from './Navbar'
import Content from './Content'

const Section1 = (props) => {
    console.log(props.users,"section") //yaha par... props = users={slides}---> ka users hai
    return (
        <div className='h-screen w-full '>
            <Navbar  />
            <Content users={props.users}/> 
        </div>
    )
}

export default Section1