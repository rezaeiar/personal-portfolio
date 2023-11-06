import React from 'react'

export default function PortfolioItem() {
    return (
        <div className='flex gap-y-3 md:gap-y-4 lg:gap-y-5 flex-col'>
            <div>
                <img src="./images/portfolio/Rectangle 101.png" className='w-full' alt="" />
            </div>
            <div className="flex justify-between items-center gap-x-2">
                <div className="flex flex-col gap-y-2 lg:gap-y-3">
                    <h1 className='text-[#344054] text-lg lg:text-xl xl:text-2xl font-Inter-Bold line-clamp-1'>
                        Specialty Restaurant Group
                    </h1>
                    <span className='font-Inter-Regular text-xs lg:text-sm xl:text-base text-[#667085] line-clamp-1'>
                        Enriched Immigration Process
                    </span>
                </div>
                <div className='flex items-center gap-x-2 text-xs xl:text-sm text-[#667085] shrink-0'>
                    <span>
                        Mobile
                    </span>
                    <span className='bg-[#D0D5DD] h-1 w-1 rounded-full'></span>
                    <span>
                        Web
                    </span>
                    <span className='bg-[#D0D5DD] h-1 w-1 rounded-full'></span>
                    <span>
                        UX-UI
                    </span>
                </div>
            </div>
        </div>
    )
}
