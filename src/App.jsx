import { useState } from 'react'
import './App.css'

import { useRoutes } from 'react-router-dom'
import routes from './routes/routes'

import TopBar from './components/TopBar/TopBar'

function App() {
    const router = useRoutes(routes)
    return (
        <>
            <TopBar />
            {router}
        </>
    )
}

export default App
