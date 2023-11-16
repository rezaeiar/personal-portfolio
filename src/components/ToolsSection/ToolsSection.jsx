import React, { useState } from 'react'

import Tool from '../Tool/Tool'

import { _ } from 'lodash'

export default function ToolsSection() {
    const [data, setData] = useState([
        { id: 1, title: 'Figma', img: 'figma.svg', color: 'bg-[#F3F6FB]' },
        { id: 2, title: 'Adobe XD', img: 'adobe_xd.svg', color: 'bg-[#FEF4FD]' },
        { id: 3, title: 'Illustrator', img: 'illustrator.svg', color: 'bg-[#FCF9F4]' },
        { id: 4, title: 'Photoshop', img: 'adobe_photoshop.svg', color: 'bg-[#F9FCF2]' },
        { id: 5, title: 'Notion', img: 'notion.svg', color: 'bg-[#F9F9F9]' },
        { id: 6, title: 'Asana', img: 'asana.svg', color: 'bg-[#F6F7FC]' },
        { id: 7, title: 'Marvel', img: 'marvel.svg', color: 'bg-[#FCF9F4]' },
        { id: 8, title: 'MeTool', img: 'adobe_photoshop.svg', color: 'bg-[#F9FCF2]' },
    ])
    return (
        <div className='py-6 lg:py-12'>
            <div className="container">
                <div className="flex flex-col gap-y-10 lg:gap-y-16">
                    <div className="flex flex-col gap-y-4">
                        <h6 className='text-2xl md:text-3xl lg:text-4xl font-Inter-SemiBold'>
                            Tools i use in my daily life as UI/UX Designer <span className='font-sans'>🌤</span>
                        </h6>
                        <span className='text-[#454D55] text-base md:text-lg font-Inter-Regular'>
                            Work with many big brands, brings for me great experience.
                        </span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-8 gap-4 sm:gap-6">
                        {
                            _.map(data, tool => (
                                <Tool key={tool.id} {...tool} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
