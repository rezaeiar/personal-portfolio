import React from 'react'

export default function DeatilsSection() {
    return (
        <div className='py-12'>
            <div className="container">
                <div className="flex justify-between items-center gap-x-32">
                    <div className="relative mb-14 mr-48 shrink-0">
                        <img src="./images/home/Rectangle 12.png" className='' alt="" />
                        <img src="./images/home/figure-150x150 1.svg" className='absolute top-14 -right-48' alt="" />
                        <div className="bg-black w-96 p-4 flex flex-col gap-y-9 text-white absolute -bottom-14 left-20">
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
                    <div className="flex flex-col gap-y-12">
                        <span className='text-[#454D55] font-Inter-Regular text-base'>
                            Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Wiusmod tempor incididunt.Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </span>
                        <ul className='flex flex-col gap-y-4 text-xl font-Inter-SemiBold text-[#A6A6AA]'>
                            <li className='font-Inter-Bold text-black'>
                                UX/UI Design
                            </li>
                            <li>
                                Branding
                            </li>
                            <li>
                                Development
                            </li>
                            <li>
                                Marketing
                            </li>
                            <li>
                                Support
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
