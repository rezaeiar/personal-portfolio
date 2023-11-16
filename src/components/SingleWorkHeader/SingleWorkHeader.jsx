import React from 'react'

export default function SingleWorkHeader() {
    return (
        <div className='py-6 md:py-12 lg:py-20'>
            <div className="container">
                <div className="flex flex-col gap-y-5 md:gap-y-8">
                    <span className='font-Inter-Regular text-xs sm:text-sm md:text-xl text-[#1D1D1D]'>
                        Sendlane —
                    </span>
                    <h4 className='text-xl sm:text-2xl md:text-5xl font-Inter-Bold'>
                        Revitalising the website and brand for a premier automated marketing platform.
                    </h4>
                    <div className="grid grid-cols-4 gap-x-8 justify-between relative">
                        <img src="/images/single-work/Ellipse 1.svg" className='absolute w-full -top-2 md:-top-3 lg:-top-4 xl:-top-5 left-0' alt="" />
                        <img src="/images/single-work/Ellipse 1.svg" className='absolute w-full -bottom-2 md:-bottom-3 lg:-bottom-4 xl:-bottom-5 left-0 rotate-180' alt="" />
                        <div className="">
                            <img src="/images/single-work/Rectangle 27.png" className='' alt="" />
                        </div>
                        <div className="">
                            <img src="/images/single-work/Rectangle 28.png" className='' alt="" />
                        </div>
                        <div className="">
                            <img src="/images/single-work/Rectangle 29.png" className='' alt="" />
                        </div>
                        <div className="">
                            <img src="/images/single-work/Rectangle 30.png" className='' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
