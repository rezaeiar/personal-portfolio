import React, { useEffect } from 'react'
import useScroll from '../../hooks/useScroll'

import PortfolioHeader from '../../components/PortfolioHeader/PortfolioHeader'
import PortfolioCovers from '../../components/PortfolioCovers/PortfolioCovers'
import PortfolioSection from '../../components/PortfolioSection/PortfolioSection'
import GetStarted from '../../components/GetStarted/GetStarted'

export default function Work() {

    useScroll()
    return (
        <>
            <PortfolioHeader />
            <PortfolioCovers />
            <PortfolioSection />
            <GetStarted />
        </>
    )
}
