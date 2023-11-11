import './App.css'

import { useRoutes } from 'react-router-dom'
import routes from './routes/routes'

import TopBar from './components/TopBar/TopBar'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'

function App() {
    const router = useRoutes(routes)
    return (
        <div className='relative'>
            <TopBar />
            <NavBar />
            {router}
            <Footer />
        </div>
    )
}

export default App
