import React from 'react'

export default function SingleWorkDisplay() {
    return (
        <div className='bg-[#F4F8FF] py-8 sm:py-12 xl:py-20'>
            <div className="container">
                <div className="flex justify-center items-center relative">
                    <div className="">
                        <img src="/images/projects/Screenshot_2.png" className='' alt="" />
                    </div>
                    <div className="absolute -right-6 lg:right-0 2xl:right-32 hidden md:block">
                        <img src="/images/projects/products-s2.png" className='' alt="" />
                    </div>
                    <div className="absolute left-0 2xl:left-24 bottom-0 lg:w-52 xl:w-auto hidden lg:block">
                        <img src="/images/projects/NoPath - Copy (5).png" className='' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
