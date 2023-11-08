import React from 'react'

import AboutMeHeader from '../../components/AboutMeHeader/AboutMeHeader'
import DetailsSection from '../../components/DetailsSection/DetailsSection'
import StatisticsSection from '../../components/StatisticsSection/StatisticsSection'
import Members from '../../components/Members/Members'
import AboutMeCover from '../../components/AboutMeCover/AboutMeCover'
import Testimonials from '../../components/Testimonials/Testimonials'

import Button from '../../components/Button/Button'

export default function AboutMe() {
    return (
        <>
            <AboutMeHeader />
            <DetailsSection>
                <div className="flex flex-col lg:flex-row justify-between items-center gap-x-20 gap-y-4 lg:gap-y-0">
                    <div className="relative shrink-0 w-full lg:w-auto">
                        <img src="./images/home/Rectangle 12.png" className='aspect-square w-full lg:w-[455px] xl:w-[493px] object-cover' alt="" />
                    </div>
                    <div className="flex flex-col gap-y-4 sm:gap-y-8">
                        <div className="flex flex-col gap-y-3 sm:gap-y-4">
                            <h2 className='font-Inter-Bold text-[#34113F] text-2xl sm:text-4xl'>
                                Infuse Your Brand with <br className='hidden lg:block' />
                                Excellence
                            </h2>
                            <span className='text-[#454D55] font-Inter-Regular text-xs sm:text-sm md:text-base'>
                                Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Wiusmod tempor incididunt.Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </span>
                        </div>
                        <div className="flex flex-col gap-y-4 sm:gap-y-7">
                            <ul className='flex flex-col  justify-between lg:flex-col gap-y-2 sm:gap-y-4 font-Inter-Medium text-sm sm:text-base md:text-lg'>
                                <li className='flex items-center gap-x-2'>
                                    <i class="bi bi-clock"></i>
                                    Adipiscing eli sed eiusmod
                                </li>
                                <li className='flex items-center gap-x-2'>
                                    <i class="bi bi-clock"></i>
                                    Tempor incididunt
                                </li>
                                <li className='flex items-center gap-x-2'>
                                    <i class="bi bi-clock"></i>
                                    Labore et dolore magna
                                </li>
                            </ul>
                            <Button styles='block transition-colors hover:bg-gray-800 px-3 py-2.5 lg:px-3.5 lg:py-3 rounded-md font-Inter-SemiBold text-[10px] lg:text-xs bg-gradient-to-r from-[#F5E9F1] from-0% via-[#EBF4F8] via-50% to-[#F7E3E2] to-100% text-black'>
                                🦾 Contact Us
                            </Button>
                        </div>

                    </div>
                </div>
            </DetailsSection>
            <StatisticsSection />
            <div className="flex flex-col">
                <h5 className='font-Inter-Bold text-[#34113F] text-4xl text-center'>
                    Our Team
                </h5>
                <Members />
            </div>
            <DetailsSection>
                <div className="flex flex-col lg:flex-row justify-between items-center gap-x-32 py-6 lg:py-8">
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
                    <div className="flex flex-col gap-y-4 lg:gap-y-8">
                        <span className='text-[#454D55] font-Inter-Regular text-xs lg:text-base'>
                            HOW WE WORK
                        </span>
                        <h5 className='font-Inter-Bold text-[#34113F] text-2xl sm:text-3xl md:text-4xl'>
                            Our Design Process in Four Steps
                        </h5>
                        <span className='text-[#454D55] font-Inter-Regular text-sm md:text-base'>
                            Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                        </span>
                        <ul className='flex flex-col justify-between lg:flex-col gap-y-4 font-Inter-SemiBold text-[#A6A6AA] text-sm sm:text-base md:text-xl'>
                            <li className='text-black'>
                                01. Client Brief
                            </li>
                            <li className=''>
                                02. Analytics and Prototyping
                            </li>
                            <li className=''>
                                03. Design
                            </li>
                            <li className=''>
                                04. Launching and Support
                            </li>
                        </ul>
                    </div>
                </div>
            </DetailsSection>
            <AboutMeCover />
            {/* <Testimonials /> */}
        </>
    )
}
