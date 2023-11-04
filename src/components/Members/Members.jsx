import React, { useState } from 'react'

export default function Members() {
    const [data, setData] = useState([
        { id: 1, name: 'Anna Smith', position: 'Creative Director', img: 'Rectangle 13 (1).png' },
        { id: 2, name: 'Anna Smith', position: 'Creative Director', img: 'Rectangle 13 (2).png' },
        { id: 3, name: 'Anna Smith', position: 'Creative Director', img: 'Rectangle 13 (3).png' },
        { id: 4, name: 'Anna Smith', position: 'Creative Director', img: 'Rectangle 13 (4).png' },
    ])
    return (
        <div className='py-6 lg:py-12 grid grid-cols-2 md:grid-cols-4'>
            {
                data.map((member) => (
                    <div className='relative group'>
                        <img src={`./images/persons/${member.img}`} className='min-w-full' alt="" />
                        <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all absolute top-0 left-0 flex flex-col gap-y-5 justify-center items-center w-full h-full bg-gradient-to-r from-[#F8FAFF] from-0% via-[#EEF4FF] via-50% to-[#FFECEC] to-100%">
                            <h5 className='text-xl font-Inter-SemiBold'>
                                {member.name}
                            </h5>
                            <span className='font-Inter-Regular text-[#454D55] text-xs'>
                                {member.position}
                            </span>
                            <div className="flex gap-x-2.5">
                                <i class="bi bi-facebook"></i>
                                <i class="bi bi-linkedin"></i>
                                <i class="bi bi-instagram"></i>
                                <i class="bi bi-dribbble"></i>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
