import React from 'react'

import Button from '../Button/Button'

export default function PortfolioHeader() {
    return (
        <div className='py-20'>
            <div className="container">
                <div className="flex flex-col items-center gap-y-2.5">
                    <Button styles='block transition-colors px-3 lg:px-3.5 py-2.5 bg-[#F4F8FF] text-[#34113F] rounded-md font-Inter-Medium text-xs lg:text-sm'>
                        Our Work
                    </Button>
                    <h4 className='text-[#34113F] font-Inter-Bold text-5xl'>
                        Portfolio
                    </h4>
                    <span className='text-base font-Inter-Regular text-[#475467] text-center'>
                        12 — SaaS companies we’ve helped in the past 24 months. Our holistic process <br />
                        takes care of discovery, branding, design, and development.
                    </span>
                </div>
            </div>
        </div>
    )
}
