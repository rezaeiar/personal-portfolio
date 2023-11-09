import React from 'react'

export default function Member({ name, position, img }) {
    return (
        <div className='relative group'>
            <img src={`./images/persons/${img}`} className='min-w-full' alt="person image" />
            <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all absolute top-0 left-0 flex flex-col gap-y-5 justify-center items-center w-full h-full bg-gradient-to-r from-[#F8FAFF] from-0% via-[#EEF4FF] via-50% to-[#FFECEC] to-100%">
                <h5 className='text-xl font-Inter-SemiBold'>
                    {name}
                </h5>
                <span className='font-Inter-Regular text-[#454D55] text-xs'>
                    {position}
                </span>
                <div className="flex gap-x-2.5">
                    <i className="bi bi-facebook"></i>
                    <i className="bi bi-linkedin"></i>
                    <i className="bi bi-instagram"></i>
                    <i className="bi bi-dribbble"></i>
                </div>
            </div>
        </div>
    )
}
