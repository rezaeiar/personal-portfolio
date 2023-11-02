import React from 'react'

import Statistics from '../Statistics/Statistics'

export default function StatisticsSection() {
    return (
        <div className='py-12'>
            <div className="container">
                <div className="flex justify-between divide-x">
                    <Statistics />
                    <Statistics />
                    <Statistics />
                    <Statistics />
                </div>
            </div>
        </div>
    )
}
