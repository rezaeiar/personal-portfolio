import React, { Fragment, useEffect, useState } from 'react'

import Statistics from '../Statistics/Statistics'

import { useDispatch, useSelector } from 'react-redux'
import { getStatisticsFromServer } from '../../Redux/store/statistics'

import { _ } from 'lodash'

export default function StatisticsSection() {

    const statistics = useSelector(state => state.statistics)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getStatisticsFromServer())
    }, [])

    return (
        <div className='py-6 lg:py-12'>
            <div className="container">
                <div className="flex justify-between items-center">
                    {
                        _.map(statistics, (statistic, index) => (
                            <Fragment key={statistic.id}>
                                <Statistics {...statistic} />
                                {
                                    index < statistics.length - 1 &&
                                    <span className='flex h-4 sm:h-20 w-px bg-[#ECEEE5]'></span>
                                }
                            </Fragment>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
