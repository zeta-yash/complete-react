import React from 'react'
import HeroText from './HeroText'
import { ArrowUpRight } from 'lucide-react';

const LeftContent = () => {
  return (
    <div className='h-full w-1/3 bg-blue-400 '>

        <div>Traveling the tradition</div>
        <div><ArrowUpRight /> </div>
        <HeroText/>
    </div>
  )
}

export default LeftContent