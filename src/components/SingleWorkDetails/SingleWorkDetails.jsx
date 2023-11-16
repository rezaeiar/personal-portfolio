import React from 'react'

export default function SingleWorkDetails({ title, children }) {
    return (
        <div className='py-8 sm:py-12 xl:py-20'>
            <div className="container">
                <div className="flex flex-col gap-y-4 sm:gap-y-6 md:gap-y-10">
                    <h4 className='text-2xl sm:text-4xl lg:text-5xl font-Inter-Bold text-[#34113F]'>
                        {title}
                    </h4>
                    <div className="flex flex-col gap-y-4 md:gap-y-6 text-xs sm:text-sm md:text-base font-Inter-Regular text-[#475467]">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
