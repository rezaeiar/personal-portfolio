import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getProjectsFromServer = createAsyncThunk(
    'projects/getProjectsFromServer',
    async (details) => {
        return fetch(`https://personal-portfolio-db.vercel.app/projects`)
            .then(res => res.json())
            .then(data => data)
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