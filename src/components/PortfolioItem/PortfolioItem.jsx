import React from 'react'

export default function PortfolioItem() {
    return (
        <div className='flex gap-y-5 flex-col'>
            <div>
                <img src="./images/portfolio/Rectangle 101.png" className='w-full' alt="" />
            </div>
            <div className="flex justify-between items-center">
                <div className="flex flex-col gap-y-3">
                    <h1 className='text-[#344054] text-2xl font-Inter-Bold'>
                        Specialty Restaurant Group
                    </h1>
                    <span className='font-Inter-Regular text-[#667085]'>
                        Enriched Immigration Process
                    </span>
                </div>
                <div className='flex items-center gap-x-2 text-sm text-[#667085]'>
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
