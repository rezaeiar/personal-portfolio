import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import apiRequests from '../../services/axios/configs/configs'

export const getTestimonialsFromServer = createAsyncThunk(
    'testimonials/getTestimonialsFromServer',
    async () => {
        return apiRequests('/testimonials').then(res => res.data)
    }
)
const slice = createSlice({
    name: 'testimonials',
    initialState: [],
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(getTestimonialsFromServer.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export default slice.reducer