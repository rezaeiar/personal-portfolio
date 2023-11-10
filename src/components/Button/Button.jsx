import React from 'react'

import { Link } from 'react-router-dom'

export default function Button({ title, route, style }) {
    return (
            <Link to={route} className={`w-fit ${style}`}>
                {title}
            </Link>
    )
}
