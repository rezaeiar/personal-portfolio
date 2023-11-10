import { configureStore } from '@reduxjs/toolkit'
import menusReducer from '../Redux/store/menus.js'
import projectsReducer from '../Redux/store/projects.js'
import statisticsReducer from '../Redux/store/Statistics.js'
import membersReducer from '../Redux/store/members.js'

const store = configureStore({
    reducer: {
        menus: menusReducer,
        projects: projectsReducer,
        statistics: statisticsReducer,
        members: membersReducer
    }
})

export default store