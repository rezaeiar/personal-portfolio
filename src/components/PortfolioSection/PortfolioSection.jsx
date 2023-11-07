import React from 'react'

import PortfolioItem from '../PortfolioItem/PortfolioItem'
import PortfolioPulse from '../PortfolioPulse/PortfolioPulse'

export default function PortfolioSection() {
    return (
        <div className='sm:py-6 md:py-12'>
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 xl:gap-12">
                    <PortfolioItem />
                    <PortfolioPulse />
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
