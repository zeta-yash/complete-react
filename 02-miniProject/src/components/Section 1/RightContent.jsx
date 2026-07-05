import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props,"right content");
  
  return (
    
    <div className='h-full w-2/3 flex flex-nowrap overflow-x-auto gap-5'>
      {
        props.users.map(function(elem){
          return <RightCard img={elem.img}/>

        })
      }
    </div>
  )
}

export default RightContent