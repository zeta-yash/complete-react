import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'
const Content = (props) => {
  console.log(props.users, "content");
  
  return (
    <div className=' flex items-center gap-10 h-[90vh] pb-16 pt-6 px-18'>
        <LeftContent />
        <RightContent users={props.users} />
    </div>
  )
}

export default Content