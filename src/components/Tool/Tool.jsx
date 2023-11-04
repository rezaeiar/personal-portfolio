import React from 'react'

export default function Tool({ title, img, color }) {
    return (
        <div className={`${color} px-4 md:px-10 lg:px-6 xl:px-6 py-6 lg:py-4 xl:py-6 flex flex-col gap-y-6 lg:gap-y-2 xl:gap-y-6 items-center rounded-lg`}>
            <img src={`/images/tools/${img}`} className='' alt="" />
            <span className='text-xl md:text-base font-Inter-SemiBold'>
                {title}
            </span>
        </div>
    )
}
