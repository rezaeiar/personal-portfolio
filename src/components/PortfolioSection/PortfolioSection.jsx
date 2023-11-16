import React, { useEffect, useState } from 'react'

import PortfolioItem from '../PortfolioItem/PortfolioItem'
import PortfolioPulse from '../PortfolioPulse/PortfolioPulse'

import { useDispatch, useSelector } from 'react-redux'
import { getProjectsFromServer } from '../../Redux/store/projects'

import { _ } from 'lodash'

export default function PortfolioSection() {

    const [itemsShown, setItemsShown] = useState(6)

    const projects = useSelector(state => state.projects)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProjectsFromServer({ page: 1, limit: itemsShown }))
    }, [itemsShown])

    const changeShownPorojectsLimit = () => {
        setItemsShown(prevState => {
            return prevState + 6
        })
    }

    return (
        <div className='sm:py-6 md:py-12'>
            <div className="container">
                <div className="flex flex-col gap-y-6 md:gap-y-8 lg:gap-y-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 xl:gap-12">
                        {
                            (projects === 'pending' || projects === 'rejected') &&
                            _.map(Array.from(Array(6).keys()), (item) => (
                                <PortfolioPulse key={item} />
                            ))
                        }
                        {
                            (projects !== 'pending' && projects !== 'rejected') && _.map(projects, project => (
                                <PortfolioItem key={project.id} {...project} />
                            ))
                        }
                    </div>
                    {
                        projects.length === itemsShown &&
                        <div className="py-2.5 lg:py-3 border-b-2 border-[#99A4AF] text-center">
                            <span className='font-Inter-Medium text-sm sm:text-base lg:text-lg text-[#99A4AF] cursor-pointer' onClick={() => changeShownPorojectsLimit()}>
                                Load more
                            </span>
                        </div>
                    }

                </div>
            </div>
        </div>
    )
}
