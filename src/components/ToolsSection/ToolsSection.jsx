import React from 'react'

import Tool from '../Tool/Tool'

export default function ToolsSection() {
    return (
        <div className='py-12'>
            <div className="container">
                <div className="flex flex-col gap-y-16">
                    <div className="flex flex-col gap-y-4">
                        <h6 className='text-4xl font-Inter-SemiBold'>
                            Tools i use in my daily life as UI/UX Designer <span className='font-sans'>🌤</span>
                        </h6>
                        <span className='text-[#454D55] text-lg font-Inter-Regular'>
                            Work with many big brands, brings for me great experience.
                        </span>
                    </div>
                    <div className="flex justify-between gap-x-5">
                        <Tool />
                        <Tool />
                        <Tool />
                        <Tool />
                        <Tool />
                        <Tool />
                        <Tool />
                        <Tool />
                    </div>
                </div>
            </div>
        </div>
    )
}
