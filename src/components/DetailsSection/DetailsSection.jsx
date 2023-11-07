import React from 'react'

export default function DetailsSection({ children }) {
    return (
        <div className='py-6 lg:py-12'>
            <div className="container">
                {children}
            </div>
        </div>
    )
}
