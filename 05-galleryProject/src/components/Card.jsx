import React from 'react'

const Card = (props) => {
    return (
        <div>
            <a href={props.elem.url} target='_blank'>
                <div className='h-45 w-50 rounded-xl overflow-hidden bg-cover' >
                    <img className='h-full object-cover' src={props.elem.download_url} alt="" />
                </div>
            </a>
            <h2 className='text-white font-bold text-lg pt-1'>{props.elem.author}</h2>
        </div>
    )
}

export default Card