import React from 'react'

export default function AboutMeHeader() {
    return (
        <div className='pt-12 pb-4 md:py-20'>
            <div className="container">
                <div className="flex flex-col items-center gap-y-2.5">
                    <h4 className='text-[#34113F] font-Inter-Bold text-3xl md:text-5xl'>
                        About Me
                    </h4>
                    <span className='text-xs sm:text-sm md:text-base font-Inter-Regular text-[#475467] text-center'>
                        12 — SaaS companies we’ve helped in the past 24 months. Our holistic process <br className='hidden sm:block' />
                        takes care of discovery, branding, design, and development.
                    </span>
                    <i className="bi bi-arrow-down text-xl md:text-2xl"></i>
                </div>
            </div>
        </div>
    )
}
