import React from 'react'

import { Link } from 'react-router-dom'

export default function Button({ to, styles, children }) {
    return (
        <button className={`w-fit ${styles}`}>
            <Link to={to}>
                {children}
            </Link>
        </button>
    )
}
