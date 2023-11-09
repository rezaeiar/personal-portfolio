import { configureStore } from '@reduxjs/toolkit'
import MenusReducer from './store/Menus'

const store = configureStore({
    reducer: {
        menus: MenusReducer
    }
})

export default store