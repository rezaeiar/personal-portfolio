import React from 'react'

export default function DeatilsSection() {
    return (
        <div className='py-6 lg:py-12'>
            <div className="container">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-x-32">
                    <div className="relative mb-5 sm:mb-8 lg:mb-14 lg:mr-48 shrink-0">
                        <img src="./images/home/Rectangle 12.png" className='hidden lg:block' alt="" />
                        <img src="./images/home/figure-150x150 1.svg" className='hidden lg:block absolute top-14 -right-48' alt="" />
                        <div className="bg-black w-full lg:w-96 p-4 flex flex-col gap-y-6 md:gap-y-9 text-white lg:absolute -bottom-14 left-20 rounded lg:rounded-none">
                            <div className="flex flex-col gap-y-2">
                                <span className='text-xs font-Inter-Regular'>
                                    01
                                </span>
                                <h6 className='text-2xl font-Inter-SemiBold'>
                                    UI/UX Design
                                </h6>
                            </div>
                            <p className='text-sm/6 font-Inter-Regular'>
                                Expedita laborum suscipit sequi et nobis voluptas fuga placeat. Omnis est ratione. Repellendus recusandae a.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-5 sm:gap-y-8 lg:gap-y-12">
                        <span className='text-[#454D55] font-Inter-Regular text-sm md:text-base'>
                            Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Wiusmod tempor incididunt.Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </span>
                        <div className="flex flex-col gap-y-3">
                            <h5 className='font-Inter-Bold text-black text-lg md:text-xl'>
                                UX/UI Design
                            </h5>
                            <ul className='flex flex-col sm:flex-row justify-between lg:flex-col gap-y-4 font-Inter-SemiBold text-[#A6A6AA] text-base md:text-xl'>
                                <li className=''>
                                    Branding
                                </li>
                                <li className=''>
                                    Development
                                </li>
                                <li className=''>
                                    Marketing
                                </li>
                                <li className=''>
                                    Support
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
