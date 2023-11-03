import React from 'react'

import { Link } from 'react-router-dom'

export default function Button({ styles, children }) {
    return (
        <button className={`w-fit ${styles}`}>
            <Link>
                {children}
            </Link>
        </button>
    )
}
