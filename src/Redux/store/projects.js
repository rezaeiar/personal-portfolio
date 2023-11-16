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
export const getOneProjectFromServer = createAsyncThunk(
    'projects/getOneProjectFromServer',
    async (id) => {
        return apiRequests({
            url: '/projects',
            method: "GET",
            params: {
                'id': +id,
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

        builder.addCase(getOneProjectFromServer.fulfilled, (state, action) => {
            return action.payload
        })
        builder.addCase(getOneProjectFromServer.pending, (state, action) => {
            return "pending"
        })
        builder.addCase(getOneProjectFromServer.rejected, (state, action) => {
            return "rejected"
        })
    }
})

export default slice.reducer