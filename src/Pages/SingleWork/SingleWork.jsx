import React from 'react'

import SingleWorkHeader from '../../components/SingleWorkHeader/SingleWorkHeader'
import DetailsSection from '../../components/DetailsSection/DetailsSection'
import Button from '../../components/Button/Button'

export default function SingleWork() {
    return (
        <>
            <SingleWorkHeader />
            <DetailsSection>
                <div className="flex justify-between gap-x-20">
                    <div className="flex flex-col gap-y-4 w-1/2">
                        <Button title='Our Work' route='/work' style='block transition-colors px-3 py-2.5 lg:px-3.5 lg:py-3 rounded-md font-Inter-SemiBold text-[10px] lg:text-xs bg-[#F4F8FF] text-black' />
                        <div className="flex flex-col gap-y-6">
                            <h6 className='text-[#34113F] text-5xl font-Inter-Bold'>
                                Project Brief
                            </h6>
                            <div className="flex flex-col gap-y-3">
                                <span className='text-[#475467] font-Inter-Regular'>
                                    Our Roles
                                </span>
                                <ul className="grid grid-cols-2 text-lg text-[#34113F] font-Inter-Bold gap-y-1">
                                    <li>
                                        Branding
                                    </li>
                                    <li>
                                        UI/UX Design
                                    </li>
                                    <li>
                                        Web Design
                                    </li>
                                    <li>
                                        Development
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-6 w-1/2">
                        <p className='text-[#475467] font-Inter-Regular'>
                            Our job is to build your website so that it is functional and user friendly but at the same time attractive. My aim is to bring across your message and identity in the most creative way.
                        </p>
                        <p className='text-[#475467] font-Inter-Regular'>
                            I enjoy turning complex problems into simple, beautiful and intuitive interface designs. When I’m not coding or pushing pixels, you’ll find me in the pool or on the court shooting hoops.
                        </p>
                        <ul className="grid grid-cols-2 gap-y-8">
                            <li className='flex flex-col gap-y-1'>
                                <span className='text-[#475467] font-Inter-Regular'>
                                    Client
                                </span>
                                <h4 className='text-[#34113F] text-lg font-Inter-Bold'>
                                    Revitalising
                                </h4>
                            </li>
                            <li className='flex flex-col gap-y-1'>
                                <span className='text-[#475467] font-Inter-Regular'>
                                    Role
                                </span>
                                <h4 className='text-[#34113F] text-lg font-Inter-Bold'>
                                    Design & Development
                                </h4>
                            </li>
                            <li className='flex flex-col gap-y-1'>
                                <span className='text-[#475467] font-Inter-Regular'>
                                    Date
                                </span>
                                <h4 className='text-[#34113F] text-lg font-Inter-Bold'>
                                    June 2020
                                </h4>
                            </li>
                            <li className='flex flex-col gap-y-1'>
                                <span className='text-[#475467] font-Inter-Regular'>
                                    Share
                                </span>
                                <div className='flex gap-x-3 text-[#34113F]'>
                                    <i class="bi bi-linkedin"></i>
                                    <i class="bi bi-facebook"></i>
                                    <i class="bi bi-instagram"></i>
                                    <i class="bi bi-twitter"></i>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </DetailsSection>
        </>
    )
}
