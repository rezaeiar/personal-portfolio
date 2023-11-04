import React, { useState } from 'react'

export default function Footer() {

    const [agreePrivacyPolicy, setAgreePrivacyPolicy] = useState(true)

    return (
        <div className='pt-8 md:pt-12 lg:pt-20 bg-black text-white'>
            <div className="container">
                <div className="flex flex-col gap-y-8 lg:gap-y-14">
                    <h4 className='text-3xl lg:text-4xl font-Inter-Bold'>
                        Entrust Design <br className='hidden sm:block' />
                        to Professionals
                    </h4>
                    <div className="flex flex-col sm:flex-row justify-between gap-x-5 gap-y-8 md:gap-x-8 lg:gap-x-16">
                        <div className="flex flex-col gap-y-3 sm:gap-y-5">
                            <h6 className='font-Inter-SemiBold'>
                                Address
                            </h6>
                            <span className='text-xs/5 lg:text-sm/6 font-Inter-Regular text-white/60'>
                                Germany — <br className='hidden sm:block' />
                                78515h Street, Office 478 <br className='hidden sm:block' />
                                Berlin, De 81566
                            </span>
                        </div>
                        <div className="flex flex-col gap-y-3 sm:gap-y-5">
                            <h6 className='font-Inter-SemiBold'>
                                Say Hellow
                            </h6>
                            <ul className='flex flex-col gap-y-2.5 text-xs lg:text-sm text-white/60'>
                                <li className='font-Inter-Regular'>
                                    kiritgoti007@gmailcom
                                </li>
                                <li className='font-Inter-Medium'>
                                    +91 84695 47012
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-y-3 sm:gap-y-5">
                            <h6 className='font-Inter-SemiBold'>
                                Social
                            </h6>
                            <ul className='flex flex-col gap-y-2.5 text-xs lg:text-sm text-white/60'>
                                <li className='font-Inter-Regular'>
                                    Facebook
                                </li>
                                <li className='font-Inter-Regular'>
                                    Twitter
                                </li>
                                <li className='font-Inter-Regular'>
                                    Dribble
                                </li>
                                <li className='font-Inter-Regular'>
                                    Instagram
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-y-3 sm:gap-y-5">
                            <h6 className='font-Inter-SemiBold'>
                                Newsletter
                            </h6>
                            <ul className='flex flex-col gap-y-3 sm:gap-y-6 text-xs lg:text-sm'>
                                <li className='font-Inter-Regular'>
                                    <div className='w-full sm:w-48 md:w-56 lg:w-80 relative flex items-center text-white/60'>
                                        <i class="bi bi-envelope absolute left-0"></i>
                                        <i class="bi bi-chevron-right text-[10px] absolute right-0"></i>
                                        <input type="text" className='ps-6 w-full py-2 outline-none bg-transparent border-b border-white/60 text-xs lg:text-sm font-Inter-Regular text-white/60 placeholder:text-xs placeholder:text-white/60 placeholder:font-Inter-Regular' placeholder='Enter your email' />
                                    </div>
                                </li>
                                <li className='font-Inter-Regular'>
                                    <div className="flex gap-x-2 items-center">
                                        <div className="h-3 w-3 sm:h-4 sm:w-4 rounded border border-white/60">
                                            <div className={`${agreePrivacyPolicy ? 'opacity-100' : 'opacity-0'} flex h-full w-full bg-white/60 items-center justify-center cursor-pointer`} onClick={() => setAgreePrivacyPolicy(prevState => !prevState)}>
                                                <i class="bi bi-check text-black"></i>
                                            </div>
                                        </div>
                                        <span className='text-white/60'>
                                            I agree to the Privacy Policy
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="py-4 sm:py-6 text-xs lg:text-sm font-Inter-Regular border-t border-white/40 text-white/60">
                        KiritGoti @ 2023. All Rights Reserved.
                    </div>
                </div>
            </div>
        </div>
    )
}
