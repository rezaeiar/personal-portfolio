import React from 'react'

import ProjectCard from '../ProjectCard/ProjectCard'

export default function ProjectsSection() {
    return (
        <div className='py-6 md:py-8 lg:py-12'>
            <div className="container">
                <div className="flex flex-col gap-y-6 md:gap-y-8 lg:gap-y-12">
                    <h2 className='font-Inter-SemiBold text-lg md:text-2xl lg:text-4xl'>
                        Projects <span className='font-Inter-Medium'>😎🐱‍💻</span>
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 lg:gap-y-12">
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                    </div>
                    <div className="py-2.5 lg:py-3 border-b-2 border-black text-center">
                        <span className='font-Inter-Medium text-sm sm:text-base lg:text-lg cursor-pointer'>
                            View All Projects
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
