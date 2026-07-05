
import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full w-80 rounded-4xl overflow-hidden shrink-0 relative'>
        <img className='h-full w-full object-cover' src="" alt="" />

        <RightCardContent />
    </div>
  )
}

export default RightCard