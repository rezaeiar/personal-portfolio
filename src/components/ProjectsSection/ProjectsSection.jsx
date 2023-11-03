import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import ProjectCard from '../ProjectCard/ProjectCard'

export default function ProjectsSection() {
    const [data, setData] = useState([
        { id: 1, date: 'May -July 2017', title: 'Grids & Alignment', tag: 'Mobile, UX, Vivid, Concept', img: 'Rectangle 11 (1).png', desc: 'Expedita laborum suscipit sequi et nobis voluptas fuga placeat. Omnis est ratione. Repellendus recusandae a.' },
        { id: 2, date: 'May -July 2017', title: 'Grids & Alignment', tag: 'Mobile, UX, Vivid, Concept', img: 'Rectangle 11 (2).png', desc: 'Expedita laborum suscipit sequi et nobis voluptas fuga placeat. Omnis est ratione. Repellendus recusandae a.' },
        { id: 3, date: 'May -July 2017', title: 'Grids & Alignment', tag: 'Mobile, UX, Vivid, Concept', img: 'Rectangle 11 (3).png', desc: 'Expedita laborum suscipit sequi et nobis voluptas fuga placeat. Omnis est ratione. Repellendus recusandae a.' },
        { id: 4, date: 'May -July 2017', title: 'Grids & Alignment', tag: 'Mobile, UX, Vivid, Concept', img: 'Rectangle 11 (4).png', desc: 'Expedita laborum suscipit sequi et nobis voluptas fuga placeat. Omnis est ratione. Repellendus recusandae a.' },
        { id: 5, date: 'May -July 2017', title: 'Grids & Alignment', tag: 'Mobile, UX, Vivid, Concept', img: 'Rectangle 11 (5).png', desc: 'Expedita laborum suscipit sequi et nobis voluptas fuga placeat. Omnis est ratione. Repellendus recusandae a.' },
        { id: 6, date: 'May -July 2017', title: 'Grids & Alignment', tag: 'Mobile, UX, Vivid, Concept', img: 'Rectangle 11 (6).png', desc: 'Expedita laborum suscipit sequi et nobis voluptas fuga placeat. Omnis est ratione. Repellendus recusandae a.' },
    ])
    return (
        <div className='py-6 md:py-8 lg:py-12'>
            <div className="container">
                <div className="flex flex-col gap-y-6 md:gap-y-8 lg:gap-y-12">
                    <h2 className='font-Inter-SemiBold text-lg md:text-2xl lg:text-4xl'>
                        Projects <span className='font-Inter-Medium'>😎🐱‍💻</span>
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 lg:gap-y-12">
                        {
                            data.map(project => (
                                <ProjectCard key={project.id} {...project} />
                            ))
                        }
                    </div>
                    <div className="py-2.5 lg:py-3 border-b-2 border-black text-center">
                        <Link to='/work' className='font-Inter-Medium text-sm sm:text-base lg:text-lg cursor-pointer'>
                            View All Projects
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
