import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'
const Content = () => {
  return (
    <div className=' flex items-center gap-10 h-[90vh] pb-6 pt-16 px-18'>
        <LeftContent />
        <RightContent />
    </div>
  )
}

export default Content