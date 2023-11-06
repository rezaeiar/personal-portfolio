import { useState } from 'react'
import './App.css'

import { useRoutes } from 'react-router-dom'
import routes from './routes/routes'

import TopBar from './components/TopBar/TopBar'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'

function App() {
    const router = useRoutes(routes)
    return (
        <>
            <TopBar />
            <NavBar />
            {router}
            <Footer />
        </>
    )
}

export default App
