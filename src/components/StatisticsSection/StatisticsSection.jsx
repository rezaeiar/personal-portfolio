import React, { useState } from 'react'

import Statistics from '../Statistics/Statistics'

export default function StatisticsSection() {

    const [date, setDate] = useState([
        { id: 1, title: 'Projects', count: 98 },
        { id: 2, title: 'People', count: 65 },
        { id: 3, title: 'Years', count: 10 },
        { id: 4, title: 'Offices', count: 15 },
    ])

    return (
        <div className='py-6 lg:py-12'>
            <div className="container">
                <div className="flex justify-between items-center">
                    {
                        date.map((statistics, index) => (
                            <>
                                <Statistics key={statistics.id} {...statistics} />
                                {
                                    index < date.length - 1 &&
                                    <span className='flex h-4 sm:h-20 w-px bg-[#ECEEE5]'></span>
                                }
                            </>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
