import React from 'react'

import PortfolioItem from '../PortfolioItem/PortfolioItem'

export default function PortfolioSection() {
    return (
        <div className='py-12'>
            <div className="container">
                <div className="grid grid-cols-2 gap-12">
                    <PortfolioItem />
                    <PortfolioItem />
                    <PortfolioItem />
                    <PortfolioItem />
                    <PortfolioItem />
                    <PortfolioItem />
                    <PortfolioItem />
                    <PortfolioItem />
                </div>
            </div>
        </div>
    )
}
