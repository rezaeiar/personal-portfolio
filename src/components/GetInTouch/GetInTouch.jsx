import React, { useState } from 'react'

import Button from '../Button/Button'

export default function GetInTouch() {

    const [agreePrivacyPolicy, setAgreePrivacyPolicy] = useState(false)

    return (
        <div className='py-24'>
            <div className="container">
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-col gap-y-10 w-[440px]">
                        <div className="flex flex-col gap-y-4">
                            <h5 className='font-Inter-Bold text-[#34113F] text-2xl sm:text-4xl'>
                                Have Questions? <br />
                                Get in Touch!
                            </h5>
                            <span className='text-[#454D55] font-Inter-Regular text-xs sm:text-sm md:text-base'>
                                Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                            </span>
                        </div>
                        <div className="flex flex-col gap-y-6">
                            <div className="flex gap-x-3 items-center">
                                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#EDECE2]">
                                    <i class="bi bi-geo-alt text-xl text-[#344054]"></i>
                                </div>
                                <span className='text-[#344054] font-Inter-Regular'>
                                    India — 723 17th Street, Office 478 Mumbai, IM 81566
                                </span>
                            </div>
                            <div className="flex gap-x-3 items-center">
                                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#EDECE2]">
                                    <i class="bi bi-envelope text-xl text-[#344054]"></i>
                                </div>
                                <span className='text-[#344054] font-Inter-Regular'>
                                    kiritgoti007@gmail.com
                                </span>
                            </div>
                            <div className="flex gap-x-3 items-center">
                                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#EDECE2]">
                                    <i class="bi bi-telephone text-xl text-[#344054]"></i>
                                </div>
                                <span className='text-[#344054] font-Inter-Regular'>
                                    +90 54321 09876
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-8 w-[592px]">
                        <div className="grid grid-cols-2 justify-between gap-x-5">
                            <div className="relative flex items-center">
                                <input type="text" placeholder='Name' className='h-14 outline-none border-b border-[#D0D5DD] ps-12 text-[#98A2B3] placeholder:text-[#98A2B3] font-Inter-Regular' />
                                <i class="bi bi-person absolute left-4 text-xl text-[#98A2B3]"></i>
                            </div>
                            <div className="relative flex items-center">
                                <input type="text" placeholder='Email Address' className='h-14 outline-none border-b border-[#D0D5DD] ps-12 text-[#98A2B3] placeholder:text-[#98A2B3] font-Inter-Regular' />
                                <i class="bi bi-envelope absolute left-4 text-xl text-[#98A2B3]"></i>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 justify-between gap-x-5">
                            <div className="relative flex items-center">
                                <input type="text" placeholder='Phone' className='h-14 outline-none border-b border-[#D0D5DD] ps-12 text-[#98A2B3] placeholder:text-[#98A2B3] font-Inter-Regular' />
                                <i class="bi bi-telephone absolute left-4 text-xl text-[#98A2B3]"></i>
                            </div>
                            <div className="relative flex items-center">
                                <input type="text" placeholder='Subject' className='h-14 outline-none border-b border-[#D0D5DD] ps-12 text-[#98A2B3] placeholder:text-[#98A2B3] font-Inter-Regular' />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 relative">
                            <textarea className='h-36 ps-12 resize-none pt-4 text-[#98A2B3] placeholder:text-[#98A2B3] font-Inter-Regular text-sm outline-none border-b border-[#D0D5DD]' placeholder='How can we help you ? Feel free to get in touch!'></textarea>
                            <i class="bi bi-pencil absolute left-4 top-4 text-base text-[#98A2B3]"></i>
                        </div>
                        <div className="grid grid-cols-1">
                            <div className="flex gap-x-2 items-center">
                                <div className="h-3 w-3 sm:h-4 sm:w-4 rounded border border-[#D0D5DD]">
                                    <div className={`${agreePrivacyPolicy ? 'opacity-100' : 'opacity-0'} flex h-full w-full bg-black items-center justify-center cursor-pointer`} onClick={() => setAgreePrivacyPolicy(prevState => !prevState)}>
                                        <i className="bi bi-check text-white"></i>
                                    </div>
                                </div>
                                <span className='text-[#667085]'>
                                    I agree that my data is collected and stored
                                </span>
                            </div>
                        </div>
                        <div className="grid grid-cols-1">
                            <div className='transition-colors cursor-pointer hover:bg-gray-800 px-3 py-2.5 lg:px-3.5 lg:py-3 bg-zinc-950 text-white rounded-md font-Inter-SemiBold text-[10px] lg:text-xs w-fit'>
                                🤙 Get In Touch
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
