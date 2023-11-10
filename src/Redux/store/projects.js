import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import apiRequests from '../../services/axios/configs/configs'

export const getProjectsFromServer = createAsyncThunk(
    'projects/getProjectsFromServer',
    async (details) => {
        return apiRequests({
            url: '/projects',
            method: "GET",
            params: {
                '_page': details.page,
                '_limit': details.limit
            },
        })
            .then(res => res.data)
    }
)
const slice = createSlice({
    name: 'projects',
    initialState: [],
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(getProjectsFromServer.fulfilled, (state, action) => {
            return action.payload
        })
        builder.addCase(getProjectsFromServer.pending, (state, action) => {
            return "pending"
        })
        builder.addCase(getProjectsFromServer.rejected, (state, action) => {
            return "rejected"
        })
    }
})

export default slice.reducer