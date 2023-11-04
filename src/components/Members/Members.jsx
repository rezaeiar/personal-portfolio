import React, { useState } from 'react'

import Member from '../Member/Member'

export default function Members() {
    const [data, setData] = useState([
        { id: 1, name: 'Anna Smith', position: 'Creative Director', img: 'Rectangle 13 (1).png' },
        { id: 2, name: 'Anna Smith', position: 'Creative Director', img: 'Rectangle 13 (2).png' },
        { id: 3, name: 'Anna Smith', position: 'Creative Director', img: 'Rectangle 13 (3).png' },
        { id: 4, name: 'Anna Smith', position: 'Creative Director', img: 'Rectangle 13 (4).png' },
    ])
    return (
        <div className='py-6 lg:py-12 grid grid-cols-2 md:grid-cols-4'>
            {
                data.map((member) => (
                    <Member key={member.id} {...member} />
                ))
            }
        </div>
    )
}
