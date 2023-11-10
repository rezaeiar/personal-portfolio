import { configureStore } from '@reduxjs/toolkit'
import menusReducer from '../Redux/store/menus.js'
import projectsReducer from '../Redux/store/projects.js'
import statisticsReducer from '../Redux/store/statistics.js'

import membersReducer from '../Redux/store/members.js'
import testimonialsReducer from '../Redux/store/testimonials.js'

const store = configureStore({
    reducer: {
        menus: menusReducer,
        projects: projectsReducer,
        statistics: statisticsReducer,
        members: membersReducer,
        testimonials: testimonialsReducer
    }
})

export default store