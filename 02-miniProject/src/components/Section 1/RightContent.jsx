import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props.users,"right content");
  
  return (
    
    <div id='right' className='h-full w-2/3 flex flex-nowrap overflow-x-auto gap-5 rounded-4xl'>
      {
        props.users.map(function(elem,idx){
          return <RightCard key={idx} id={idx+1} img={elem.img} info={elem.info} tag={elem.tag} />

        })
      }
    </div>
  )
}

export default RightContent