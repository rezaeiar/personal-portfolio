import React, { Fragment } from 'react'

import { Link } from 'react-router-dom'

import { _ } from 'lodash'

export default function PortfolioItem({ id, img, date, title, tags, description, explanation }) {
    return (
        <Link to={`/work/${id}`} className='flex gap-y-3 md:gap-y-4 lg:gap-y-5 flex-col'>
            <div className='rounded-xl overflow-hidden'>
                <img src={`./images/projects/${img}`} className='w-full' alt="" />
            </div>
            <div className="flex justify-between items-center gap-x-2">
                <div className="flex flex-col gap-y-2 lg:gap-y-3">
                    <h1 className='text-[#344054] text-lg lg:text-xl xl:text-2xl font-Inter-Bold line-clamp-1'>
                        {title}
                    </h1>
                    <span className='font-Inter-Regular text-xs lg:text-sm xl:text-base text-[#667085] line-clamp-1'>
                        {explanation}
                    </span>
                </div>
                <div className='flex items-center gap-x-2 text-xs xl:text-sm text-[#667085] shrink-0'>
                    {
                        _.map(tags, (singleTag, index) => (
                            <Fragment key={singleTag}>
                                <span>
                                    {singleTag}
                                </span>
                                {
                                    index < tags.length - 1 &&
                                    <span className='bg-[#D0D5DD] h-1 w-1 rounded-full'></span>
                                }
                            </Fragment>
                        ))
                    }
                </div>
            </div>
        </Link>
    )
}
