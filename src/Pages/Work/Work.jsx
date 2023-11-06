import React from 'react'

import PortfolioHeader from '../../components/PortfolioHeader/PortfolioHeader'
import PortfolioCovers from '../../components/PortfolioCovers/PortfolioCovers'
import PortfolioSection from '../../components/PortfolioSection/PortfolioSection'
import GetStarted from '../../components/GetStarted/GetStarted'

export default function Work() {
    return (
        <>
            <PortfolioHeader />
            <PortfolioCovers />
            <PortfolioSection />
            <GetStarted />
        </>
    )
}
