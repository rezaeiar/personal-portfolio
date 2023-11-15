import Home from "../Pages/Home/Home"
import Work from '../Pages/Work/Work'
import AboutMe from '../Pages/AboutMe/AboutMe'
import ContactUs from '../Pages/ContactUs/ContactUs'
import SingleWork from "../Pages/SingleWork/SingleWork"

const routes = [
    { path: '/', element: <Home /> },
    { path: '/work', element: <Work /> },
    { path: '/about-me', element: <AboutMe /> },
    { path: '/contact-us', element: <ContactUs /> },
    { path: '/work/:id', element: <SingleWork /> }
]

export default routes