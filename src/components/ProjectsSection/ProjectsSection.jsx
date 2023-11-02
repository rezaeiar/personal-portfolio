import React from 'react'

import Button from '../Button/Button'

export default function ProjectsSection() {
    return (
        <div className='py-12'>
            <div className="container">
                <div className="flex flex-col gap-y-12">
                    <h2 className='font-Inter-SemiBold text-4xl'>
                        Projects <span className='font-Inter-Medium'>😎🐱‍💻</span>
                    </h2>
                    <div className="grid grid-cols-3 gap-x-6 gap-y-12">
                        <div className="h-10 bg-red-600"></div>
                        <div className="h-10 bg-red-600"></div>
                        <div className="h-10 bg-red-600"></div>
                        <div className="h-10 bg-red-600"></div>
                        <div className="h-10 bg-red-600"></div>
                        <div className="h-10 bg-red-600"></div>
                    </div>
                    <div className="py-5 border-b-2 border-black text-center">
                        <span className='font-Inter-Medium text-xl cursor-pointer'>
                            View All Projects
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
