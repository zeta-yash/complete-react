
import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
    console.log(props.img, props.info, props.tag);
    
  return (
    <div className='h-full w-80 rounded-4xl overflow-hidden shrink-0 relative'>
        <img className='h-full w-full object-cover' src={props.img} alt="" />

        <RightCardContent tag={props.tag} info={props.info} id={props.id} />
    </div>
  )
}

export default RightCard