import React from 'react'

export default function Footer() {
    return (
        <div className='pt-20 bg-black text-white'>
            <div className="container">
                <div className="flex flex-col gap-y-14">
                    <h4 className='text-4xl font-Inter-Bold'>
                        Entrust Design to Professionals
                    </h4>
                    <div className="flex justify-between gap-x-16">
                        <div className="flex flex-col gap-y-5">
                            <h6 className='font-Inter-SemiBold'>
                                Address
                            </h6>
                            <span className='text-sm font-Inter-Regular'>
                                Germany —
                                78515h Street, Office 478
                                Berlin, De 81566
                            </span>
                        </div>
                        <div className="flex flex-col gap-y-5">
                            <h6 className='font-Inter-SemiBold'>
                                Say Hellow
                            </h6>
                            <ul className='flex flex-col gap-y-2.5 text-sm'>
                                <li className='font-Inter-Regular'>
                                    kiritgoti007@gmailcom
                                </li>
                                <li className='font-Inter-Medium'>
                                    +91 84695 47012
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-y-5">
                            <h6 className='font-Inter-SemiBold'>
                                Social
                            </h6>
                            <ul className='flex flex-col gap-y-2.5 text-sm'>
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
                        <div className="flex flex-col gap-y-5">
                            <h6 className='font-Inter-SemiBold'>
                                Newsletter
                            </h6>
                            <ul className='flex flex-col gap-y-2.5 text-sm'>
                                <li className='font-Inter-Regular'>
                                    I agree to the Privacy Policy
                                </li>
                                <li className='font-Inter-Regular'>
                                    I agree to the Privacy Policy
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="py-6 text-sm font-Inter-Regular border-t border-white/40">
                        KiritGoti @ 2023. All Rights Reserved.
                    </div>
                </div>
            </div>
        </div>
    )
}
