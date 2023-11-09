import React from 'react'

import { Link } from 'react-router-dom'

export default function Button({ title, route, style }) {
    return (
        <button className={`w-fit ${style}`}>
            <Link to={route}>
                {title}
            </Link>
        </button>
    )
}
