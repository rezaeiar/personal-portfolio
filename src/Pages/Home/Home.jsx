import React from 'react'
import Header from '../../components/Header/Header'
import ProjectsSection from '../../components/ProjectsSection/ProjectsSection'
import DeatilsSection from '../../components/DeatilsSection/DeatilsSection'
import StatisticsSection from '../../components/StatisticsSection/StatisticsSection'
import ToolsSection from '../../components/ToolsSection/ToolsSection'

export default function Home() {
    return (
        <>
            <Header />
            <ProjectsSection />
            <DeatilsSection />
            <StatisticsSection />
            <ToolsSection />
        </>
    )
}
