import React from 'react'

export default function ProjectCard() {
    return (
        <div className='rounded-xl overflow-hidden bg-gradient-to-r from-[#F5E9F1] from-0% via-[#EBF4F8] via-50% to-[#F7E3E2] to-100%'>
            <div>
                <img src="./images/projects/Rectangle 11.png" className='w-full' alt="" />
            </div>
            <div className="p-3 flex flex-col gap-y-3">
                <span className='text-xs text-[#454D55] font-Inter-Regular'>
                    May -July 2017
                </span>
                <div className="flex flex-col gap-y-1.5">
                    <h2 className='text-2xl font-Inter-SemiBold'>
                        Grids & Alignment
                    </h2>
                    <span className='text-xs font-Inter-Regular text-[#F2994A]'>
                        Mobile, UX, Vivid, Concept
                    </span>
                </div>
                <span className='text-sm/6 font-Inter-Regular text-[#454D55]'>
                    Expedita laborum suscipit sequi et nobis voluptas fuga placeat. Omnis est ratione. Repellendus recusandae a.
                </span>
            </div>
        </div>
    )
}
