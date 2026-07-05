import React from 'react'
import { ArrowRight} from 'lucide-react'

const RightCardContent = () => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
            <h1 className='text-xl font-bold bg-white rounded-full h-12 w-12 flex justify-center items-center'>1</h1>

            <div>
                <p className='text-lg leading-relaxed text-white mb-14'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam error culpa veniam repellendus repellat eligendi?</p>
                <div className='flex justify-between'>
                    <button className=' text-white bg-blue-700 font-medium px-8 py-2 rounded-full'>
                        View
                    </button>
                    <button className=' text-white bg-blue-700 font-medium px-3 py-3 rounded-full'>
                        <ArrowRight/>
                    </button>
                </div>
            </div>

        </div>
  )
}

export default RightCardContent