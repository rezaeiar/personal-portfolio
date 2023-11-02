import React from 'react'

import { Link } from 'react-router-dom'

export default function Button({ px, py, bg, color, rounded, font, children }) {
    return (
        <button className={`text-xs ${px} ${py} ${bg ? bg : 'transparent'} ${color} ${rounded} ${font} w-fit`}>
            <Link>
                {children}
            </Link>
        </button>
    )
}
