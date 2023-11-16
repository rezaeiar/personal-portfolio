import React, { useEffect } from 'react'

import { useParams } from 'react-router-dom'

import useScroll from '../../hooks/useScroll'

import SingleWorkHeader from '../../components/SingleWorkHeader/SingleWorkHeader'
import DetailsSection from '../../components/DetailsSection/DetailsSection'
import Button from '../../components/Button/Button'
import SingleWorkDisplay from '../../components/SingleWorkDisplay/SingleWorkDisplay'
import SingleWorkDetails from '../../components/SingleWorkDetails/SingleWorkDetails'
import SingleWorkBanner from '../../components/SingleWorkBanner/SingleWorkBanner'
import Testimonials from '../../components/Testimonials/Testimonials'
import GetStarted from '../../components/GetStarted/GetStarted'

export default function SingleWork() {

    const { id } = useParams()

    useEffect(() => {
        console.log(id);
    }, [])
    useScroll()
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
            <SingleWorkDisplay />
            <SingleWorkDetails title='Problems'>
                <p>
                    Our eCommerce design starts and ends with a best-in-class experience strategy that builds brands and drives transactions.
                </p>
                <p>
                    My job is to build your website so that it is functional and user friendly but at the same time attractive. My aim is to bring across your message and identity in the most creative way. It’s time to bring it all together. Nothing is more rewarding for me than making great work for clients with meaningful missions.
                </p>
            </SingleWorkDetails>
            <SingleWorkDetails title='The Solution'>
                <p>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                </p>
                <p>
                    It’s time to bring it all together. Nothing is more rewarding for me than making great work for clients with meaningful missions. Through a deep understanding of our audience’s makeup and motivations, we design digital experiences that connect with people.
                </p>
                <p>
                    We build and activate brands through cultural insight, strategic vision, and the power of emotion across every element of its expression.
                </p>
            </SingleWorkDetails>
            <SingleWorkBanner />
            <Testimonials />
            <GetStarted />
        </>
    )
}
