import { configureStore } from '@reduxjs/toolkit'
import menusReducer from './store/Menus'
import projectsReducer from './store/projects'

const store = configureStore({
    reducer: {
        menus: menusReducer,
        projects: projectsReducer
    }
})

export default store