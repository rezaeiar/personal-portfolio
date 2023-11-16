import React, { useEffect } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useDispatch, useSelector } from 'react-redux';
import { getProjectImagesFromServer } from '../../Redux/store/projectImages';


export default function SingleWorkSlider() {
    const dispatch = useDispatch()
    const projectImages = useSelector(state => state.projectImages)

    useEffect(() => {
        dispatch(getProjectImagesFromServer())
    }, [])

    return (
        <div className='py-6 md:py-10'>
            <div className="container">
                <div className="flex">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        pagination={{ clickable: true }}
                        className="relative"
                        loop={true}
                        spaceBetween={20}
                        autoplay={{
                            delay: 4500,
                            disableOnInteraction: false,
                        }}
                    >
                        {
                            projectImages.map(projectImage => (
                                <SwiperSlide key={projectImage.id}>
                                    <div className='w-full'>
                                        <img src={`/images/single-work/${projectImage.img}`} className='w-full' alt="" />
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
