import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'
import ProjectCard from '../ProjectCard/ProjectCard'
import ProjectPulse from '../ProjectPulse/ProjectPulse'

import { useDispatch, useSelector } from 'react-redux'
import { getProjectsFromServer } from '../../Redux/store/projects'

import { _ } from 'lodash'

export default function ProjectsSection() {

    const projects = useSelector(state => state.projects)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProjectsFromServer({ page: 1, limit: 6 }))
    }, [])

    return (
        <div className='py-6 md:py-8 lg:py-12'>
            <div className="container">
                <div className="flex flex-col gap-y-6 md:gap-y-8 lg:gap-y-12">
                    <h2 className='font-Inter-SemiBold text-lg md:text-2xl lg:text-4xl'>
                        Projects <span className='font-Inter-Medium'>😎🐱‍💻</span>
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 lg:gap-y-12">
                        {
                            (projects === 'pending' || projects === 'rejected') &&
                            _.map(Array.from(Array(6).keys()), (item) => (
                                <ProjectPulse key={item} />
                            ))
                        }
                        {
                            (projects !== 'pending' && projects !== 'rejected') &&
                            _.map(projects, project => (
                                <ProjectCard key={project.id} {...project} />
                            ))
                        }
                    </div>
                    {
                        (projects !== 'pending' && projects !== 'rejected') &&
                        <div className="py-2.5 lg:py-3 border-b-2 border-black text-center">
                            <Link to='/work' className='font-Inter-Medium text-sm sm:text-base lg:text-lg cursor-pointer'>
                                View All Projects
                            </Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
