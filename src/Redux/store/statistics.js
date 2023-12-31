import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import apiRequests from '../../services/axios/configs/configs'

export const getStatisticsFromServer = createAsyncThunk(
    'statistics/getStatisticsFromServer',
    async () => {
        return apiRequests('/statistics').then(res => res.data)
    }
)
const slice = createSlice({
    name: 'statistics',
    initialState: [],
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(getStatisticsFromServer.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export default slice.reducer