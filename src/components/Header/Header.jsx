import React from 'react'

import Button from '../Button/Button'

export default function Header() {
    return (
        <div className='bg-gradient-to-r from-[#F8D9D8] from-0% via-[#F5F6F7] via-50% to-[#F3DFED] to-100% py-8 sm:py-14 lg:py-20'>
            <div className="container">
                <div className="flex flex-col lg:flex-row justify-between gap-x-12 items-center gap-y-8">
                    <div className="flex flex-col gap-y-5 sm:gap-y-7 items-center lg:items-start">
                        <h4 className='font-Inter-Bold text-2xl sm:text-4xl xl:text-5xl/[55px] text-center lg:text-start'>
                            Welcome to my new <br />
                            Creative World!
                        </h4>
                        <p className='text-[#1D1D1D] font-Inter-Regular text-sm sm:text-base md:text-lg xl:text-xl/[32px] text-center lg:text-start'>
                            Kirit Goti is a designer focused on building brands and creating digital experiences — currently working at TechHive
                        </p>
                        <Button styles='block transition-colors hover:bg-gray-800 px-3 py-2.5 lg:px-3.5 lg:py-3 bg-zinc-950 text-white rounded-md font-Inter-SemiBold text-[10px] lg:text-xs'>
                            Let’s Get Started
                        </Button>
                    </div>
                    <div className='flex flex-shrink-0 w-full lg:w-auto'>
                        <img src="./images/home/image 1.png" alt="" className='grow lg:grow-0' />
                    </div>
                </div>
            </div>
        </div>
    )
}
