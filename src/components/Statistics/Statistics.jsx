import React from 'react'

export default function Statistics({ title, count }) {
    return (
        <div className='text-4xl sm:text-7xl lg:text-9xl font-Inter-Bold text-[#ECEEE5] relative flex items-center justify-center'>
            {count}
            <span className='absolute text-black text-[10px] sm:text-base lg:text-xl font-Inter-Bold'>
                {title}
            </span>
        </div>
    )
}
