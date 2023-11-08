import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

export default function Testimonials() {
    return (
        <div className='py-12 lg:py-20'>
            <div className="container">
                <div className="flex items-center justify-between gap-x-8">
                    <div className="testimonials-prev flex-items-center justify-center bg-[#F4F8FF] rounded-3xl cursor-pointer">
                        <i class="bi bi-arrow-left p-3"></i>
                    </div>
                    <Swiper
                        modules={[Navigation]}
                        className=""
                        navigation={{
                            prevEl: '.testimonials-prev',
                            nextEl: '.testimonials-next',
                        }}
                        loop={true}
                        spaceBetween={20}
                    >
                        <SwiperSlide>
                            <div className="flex my-10 bg-[#F6F1F7] rounded-2xl grow p-10 flex-col gap-y-8 relative">
                                <img src="./images/about-me/“.svg" className='absolute left-12 -top-10' alt="" />
                                <div className="flex justify-between items-center gap-x-16">
                                    <p className='font-Inter-Regular text-2xl text-[#34113F]'>
                                        Everyone on the team is expected to meet the
                                        same high standards and produce work of the
                                        highest calibre, Everyone on the team is expected to meet the
                                        same high standards
                                    </p>
                                    <div className="shrink-0">
                                        <img src="./images/about-me/Rectangle 108.png" alt="" />
                                    </div>
                                </div>
                                <span className='h-px w-full bg-[#E8DBEC]'></span>
                                <div className="flex justify-between">
                                    <div className="flex gap-x-3">
                                        <div className="rounded-full overflow-hidden">
                                            <img src="./images/about-me/Rectangle 5.png" className='' alt="" />
                                        </div>
                                        <div className="flex flex-col gap-y-1">
                                            <span className='font-Inter-Regular text-sm'>
                                                Michael B. Jordan
                                            </span>
                                            <h6 className='font-Inter-Bold text-base'>
                                                VP of Marketing, disney
                                            </h6>
                                        </div>
                                    </div>
                                    <div>
                                        <img src="./images/about-me/Layer_1.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex my-10 bg-[#F6F1F7] rounded-2xl grow p-10 flex-col gap-y-8 relative">
                                <img src="./images/about-me/“.svg" className='absolute left-12 -top-10' alt="" />
                                <div className="flex justify-between items-center gap-x-16">
                                    <p className='font-Inter-Regular text-2xl text-[#34113F]'>
                                        Everyone on the team is expected to meet the
                                        same high standards and produce work of the
                                        highest calibre, Everyone on the team is expected to meet the
                                        same high standards
                                    </p>
                                    <div className="shrink-0">
                                        <img src="./images/about-me/Rectangle 108.png" alt="" />
                                    </div>
                                </div>
                                <span className='h-px w-full bg-[#E8DBEC]'></span>
                                <div className="flex justify-between">
                                    <div className="flex gap-x-3">
                                        <div className="rounded-full overflow-hidden">
                                            <img src="./images/about-me/Rectangle 5.png" className='' alt="" />
                                        </div>
                                        <div className="flex flex-col gap-y-1">
                                            <span className='font-Inter-Regular text-sm'>
                                                Michael B. Jordan
                                            </span>
                                            <h6 className='font-Inter-Bold text-base'>
                                                VP of Marketing, disney
                                            </h6>
                                        </div>
                                    </div>
                                    <div>
                                        <img src="./images/about-me/Layer_1.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div className="testimonials-next flex-items-center justify-center bg-[#F4F8FF] rounded-3xl cursor-pointer">
                        <i class="bi bi-arrow-right p-3"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
