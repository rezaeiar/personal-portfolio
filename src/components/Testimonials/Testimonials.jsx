import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

export default function Testimonials() {
    return (
        <div className='py-12 lg:py-20'>
            <div className="container">
                <div className="flex flex-col">
                    <h4 className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-Inter-Bold text-[#34113F] text-center mb-0 sm:mb-4 lg:mb-10'>
                        Testimonials
                    </h4>
                    <div className="flex items-center justify-between gap-x-8">
                        <div className="hidden lg:flex testimonials-prev flex-items-center justify-center bg-[#F4F8FF] rounded-3xl cursor-pointer">
                            <i className="bi bi-arrow-left p-3"></i>
                        </div>
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            className=""
                            navigation={{
                                prevEl: '.testimonials-prev',
                                nextEl: '.testimonials-next',
                            }}
                            loop={true}
                            spaceBetween={20}
                            autoplay={{
                                delay: 4500,
                                disableOnInteraction: false,
                            }}
                        >
                            <SwiperSlide>
                                <div className="flex mt-8 lg:mt-10 bg-[#F6F1F7] rounded-2xl grow p-6 lg:p-10 flex-col gap-y-3 sm:gap-y-6 lg:gap-y-8 relative">
                                    <img src="./images/about-me/“.svg" className='absolute h-8 sm:h-auto left-8 sm:left-12 -top-4 sm:-top-8 lg:-top-10' alt="" />
                                    <div className="flex justify-between items-center gap-x-2 sm:gap-x-8 lg:gap-x-16">
                                        <p className='font-Inter-Regular text-xs sm:text-xl lg:text-2xl text-[#34113F]'>
                                            Everyone on the team is expected to meet the
                                            same high standards and produce work of the
                                            highest calibre, Everyone on the team is expected to meet the
                                            same high standards
                                        </p>
                                        <div className="shrink-0">
                                            <img src="./images/about-me/Rectangle 108.png" className='h-32 sm:h-auto' alt="" />
                                        </div>
                                    </div>
                                    <span className='h-px w-full bg-[#E8DBEC]'></span>
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-x-3">
                                            <div className="rounded-full overflow-hidden">
                                                <img src="./images/about-me/Rectangle 5.png" className='' alt="" />
                                            </div>
                                            <div className="flex flex-col gap-y-1 justify-center">
                                                <span className='font-Inter-Regular text-xs sm:text-sm'>
                                                    Michael B. Jordan
                                                </span>
                                                <h6 className='font-Inter-Bold text-sm sm:text-base'>
                                                    VP of Marketing, disney
                                                </h6>
                                            </div>
                                        </div>
                                        <div className='w-16 sm:w-auto'>
                                            <img src="./images/about-me/Layer_1.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex mt-8 lg:mt-10 bg-[#F6F1F7] rounded-2xl grow p-6 lg:p-10 flex-col gap-y-3 sm:gap-y-6 lg:gap-y-8 relative">
                                    <img src="./images/about-me/“.svg" className='absolute h-8 sm:h-auto left-8 sm:left-12 -top-4 sm:-top-8 lg:-top-10' alt="" />
                                    <div className="flex justify-between items-center gap-x-2 sm:gap-x-8 lg:gap-x-16">
                                        <p className='font-Inter-Regular text-xs sm:text-xl lg:text-2xl text-[#34113F]'>
                                            Everyone on the team is expected to meet the
                                            same high standards and produce work of the
                                            highest calibre, Everyone on the team is expected to meet the
                                            same high standards
                                        </p>
                                        <div className="shrink-0">
                                            <img src="./images/about-me/Rectangle 108.png" className='h-32 sm:h-auto' alt="" />
                                        </div>
                                    </div>
                                    <span className='h-px w-full bg-[#E8DBEC]'></span>
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-x-3">
                                            <div className="rounded-full overflow-hidden">
                                                <img src="./images/about-me/Rectangle 5.png" className='' alt="" />
                                            </div>
                                            <div className="flex flex-col gap-y-1 justify-center">
                                                <span className='font-Inter-Regular text-xs sm:text-sm'>
                                                    Michael B. Jordan
                                                </span>
                                                <h6 className='font-Inter-Bold text-sm sm:text-base'>
                                                    VP of Marketing, disney
                                                </h6>
                                            </div>
                                        </div>
                                        <div className='w-16 sm:w-auto'>
                                            <img src="./images/about-me/Layer_1.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                        <div className="hidden lg:flex testimonials-next flex-items-center justify-center bg-[#F4F8FF] rounded-3xl cursor-pointer">
                            <i className="bi bi-arrow-right p-3"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
