import { configureStore } from '@reduxjs/toolkit'
import menusReducer from '../Redux/store/menus.js'
import projectsReducer from '../Redux/store/projects.js'

const store = configureStore({
    reducer: {
        menus: menusReducer,
        projects: projectsReducer
    }
})

export default store