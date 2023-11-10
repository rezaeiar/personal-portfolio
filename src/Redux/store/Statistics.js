import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getStatisticsFromServer = createAsyncThunk(
    'statistics/getStatisticsFromServer',
    async () => {
        return fetch('http://localhost:3000/statistics')
            .then(res => res.json())
            .then(data => data)
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