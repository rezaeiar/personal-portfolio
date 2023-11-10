import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import apiRequests from '../../services/axios/configs/configs'

export const getMenusFromServer = createAsyncThunk(
    'menus/getMenusFromServer',
    async () => {
        return apiRequests('/menus').then(res => res.data)
    }
)
const slice = createSlice({
    name: 'menus',
    initialState: [],
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(getMenusFromServer.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export default slice.reducer