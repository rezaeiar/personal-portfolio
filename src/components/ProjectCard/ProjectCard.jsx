import React from 'react'

export default function ProjectCard({ id, date, title, tags, img, description }) {
    return (
        <div className='rounded-xl overflow-hidden bg-gradient-to-r from-[#F5E9F1] from-0% via-[#EBF4F8] via-50% to-[#F7E3E2] to-100%'>
            <div>
                <img src={`./images/projects/${img}`} className='w-full' alt="project image" />
            </div>
            <div className="p-3 flex flex-col gap-y-3 sm:gap-y-2.5 md:gap-y-3">
                <span className='text-xs sm:text-[10px] md:text-xs text-[#454D55] font-Inter-Regular'>
                    {date}
                </span>
                <div className="flex flex-col gap-y-1.5">
                    <h2 className='text-2xl sm:text-xl md:text-2xl font-Inter-SemiBold'>
                        {title}
                    </h2>
                    <span className='text-xs sm:text-[10px] md:text-xs font-Inter-Regular text-[#F2994A]'>
                        {tags.join(', ') + ', Concept'}
                    </span>
                </div>
                <span className='text-sm/6 sm:text-xs md:text-sm/6 font-Inter-Regular text-[#454D55] line-clamp-3'>
                    {description}
                </span>
            </div>
        </div>
    )
}
