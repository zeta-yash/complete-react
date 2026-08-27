import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDet = () => {

    const params = useParams()
    console.log(params);
    
  return (
    <div>
        <h1 className='capitalize'>
            {params.id} Detail Page
        </h1>
    </div>
  )
}

export default CourseDet