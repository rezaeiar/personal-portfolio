import React, { useState } from 'react'

import { Formik, Form, Field } from 'formik'

import { useDispatch, useSelector } from 'react-redux'
import { sendContactsToServer } from '../../Redux/store/contacts'

export default function GetInTouch() {

    const dispatch = useDispatch()

    return (
        <div className='py-6 sm:py-8 xl:py-12'>
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="flex flex-col gap-y-10 w-full md:w-[440px]">
                        <div className="flex flex-col gap-y-4">
                            <h5 className='font-Inter-Bold text-[#34113F] text-2xl sm:text-3xl lg:text-4xl'>
                                Have Questions? <br className='hidden md:block' />
                                Get in Touch!
                            </h5>
                            <span className='text-[#454D55] font-Inter-Regular text-xs sm:text-sm lg:text-base'>
                                Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                            </span>
                        </div>
                        <div className="flex flex-col gap-y-6">
                            <div className="flex gap-x-3 items-center">
                                <div className="flex items-center justify-center w-10 h-10 lg:h-12 lg:w-12 rounded-lg bg-[#EDECE2] shrink-0">
                                    <i className="bi bi-geo-alt text-lg lg:text-xl text-[#344054]"></i>
                                </div>
                                <span className='text-[#344054] font-Inter-Regular text-sm lg:text-base'>
                                    India — 723 17th Street, Office 478 Mumbai, IM 81566
                                </span>
                            </div>
                            <div className="flex gap-x-3 items-center">
                                <div className="flex items-center justify-center w-10 h-10 lg:h-12 lg:w-12 rounded-lg bg-[#EDECE2] shrink-0">
                                    <i className="bi bi-envelope text-lg lg:text-xl text-[#344054]"></i>
                                </div>
                                <span className='text-[#344054] font-Inter-Regular text-sm lg:text-base'>
                                    kiritgoti007@gmail.com
                                </span>
                            </div>
                            <div className="flex gap-x-3 items-center">
                                <div className="flex items-center justify-center w-10 h-10 lg:h-12 lg:w-12 rounded-lg bg-[#EDECE2] shrink-0">
                                    <i className="bi bi-telephone text-lg lg:text-xl text-[#344054]"></i>
                                </div>
                                <span className='text-[#344054] font-Inter-Regular text-sm lg:text-base'>
                                    +90 54321 09876
                                </span>
                            </div>
                        </div>
                    </div>
                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            phone: '',
                            message: '',
                            type: '-1',
                            acceptPrivacy: false
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                setSubmitting(false)
                            }, 3000);
                            dispatch(sendContactsToServer(values))
                        }}
                        validate={(values) => {
                            const errors = {}

                            if (values.name === '') {
                                errors.name = 'Field is empty!'
                            }
                            if (values.email === '') {
                                errors.email = 'Field is empty!'
                            }
                            if (values.phone === '') {
                                errors.phone = 'Field is empty!'
                            }
                            if (values.message === '') {
                                errors.message = 'Field is empty!'
                            }
                            if (values.type === '-1') {
                                errors.type = 'Not valid!'
                            }

                            return errors
                        }}
                    >
                        {({ values, handleChange, handleSubmit, errors, touched, isSubmitting }) => {
                            return <Form className="flex flex-col gap-y-4 sm:gap-y-8 w-full sm:w-[592px]">
                                <div className="grid grid-cols-2 gap-x-5 gap-y-8">
                                    <div className="relative flex items-center">
                                        <Field name='name' placeholder='Name' className={`h-10 text-sm lg:text-base lg:h-14 w-full outline-none border-b ps-8 lg:lg:ps-12 text-[#98A2B3] placeholder:text-[#98A2B3] font-Inter-Regular ${(errors.name && touched.name) ? 'border-[#ff6456]' : 'border-[#D0D5DD]'}`} />
                                        <i className="bi bi-person absolute left-2 text-lg lg:text-xl text-[#98A2B3]"></i>
                                    </div>
                                    <div className="relative flex items-center">
                                        <Field name='email' placeholder='Email Address' className={`h-10 text-sm lg:text-base lg:h-14 w-full outline-none border-b ps-8 lg:lg:ps-12 text-[#98A2B3] placeholder:text-[#98A2B3] font-Inter-Regular ${(errors.email && touched.email) ? 'border-[#ff6456]' : 'border-[#D0D5DD]'}`} />
                                        <i className="bi bi-envelope absolute left-2 text-lg lg:text-xl text-[#98A2B3]"></i>
                                    </div>
                                    <div className="relative flex items-center">
                                        <Field name='phone' placeholder='Phone' className={`h-10 text-sm lg:text-base lg:h-14 w-full outline-none border-b ps-8 lg:lg:ps-12 text-[#98A2B3] placeholder:text-[#98A2B3] font-Inter-Regular ${(errors.phone && touched.phone) ? 'border-[#ff6456]' : 'border-[#D0D5DD]'}`} />
                                        <i className="bi bi-telephone absolute left-2 text-lg lg:text-xl text-[#98A2B3]"></i>
                                    </div>
                                    <div className="relative flex w-full items-center">
                                        <select onChange={handleChange} defaultValue='-1' className={`h-10 text-sm lg:text-base lg:h-14 w-full outline-none border-b ps-2 lg:ps-4 text-[#98A2B3] placeholder:text-[#98A2B3] font-Inter-Regular ${(errors.type && touched.type) ? 'border-[#ff6456]' : 'border-[#D0D5DD]'}`} name='type'>
                                            <option value="-1">Select</option>
                                            <option value="creator">Creator</option>
                                            <option value="admin">Admin</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 relative">
                                    <textarea className={`h-36 ps-8 lg:ps-12 resize-none pt-4 text-[#98A2B3] placeholder:text-[#98A2B3] font-Inter-Regular text-sm outline-none border-b ${(errors.type && touched.type) ? 'border-[#ff6456]' : 'border-[#D0D5DD]'}`} onChange={handleChange} value={values.message} name='message' placeholder='How can we help you ? Feel free to get in touch!'></textarea>
                                    <i className="bi bi-pencil absolute left-2 lg:left-4 top-4 text-base text-[#98A2B3]"></i>
                                </div>
                                <div className="grid grid-cols-1">
                                    <div className="flex gap-x-2 items-center">
                                        <input type="checkbox" checked={values.acceptPrivacy} onChange={handleChange} name='acceptPrivacy' />
                                        <span className='text-[#667085] text-sm lg:text-base'>
                                            I agree that my data is collected and stored
                                        </span>
                                    </div>
                                </div>
                                <button type='submit' className={`transition-colors cursor-pointer px-3 py-2.5 lg:px-3.5 lg:py-3 bg-zinc-950 text-white rounded-md font-Inter-SemiBold text-[10px] lg:text-xs w-32 ${isSubmitting ? 'animate-pulse' : 'hover:bg-gray-800'}`} disabled={isSubmitting}>
                                    {
                                        isSubmitting ? 'Loading..' : '🤙 Get In Touch'
                                    }
                                </button>
                            </Form>
                        }}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

// kol in code ha yekbar kamel khande va yad gerefte shavad
// dar sorat emkan code ha tamiz kari shavad