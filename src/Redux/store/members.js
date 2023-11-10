import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getMembersFromServer = createAsyncThunk(
    'members/getMembersFromServer',
    async () => {
        return fetch('http://localhost:3000/members')
            .then(res => res.json())
            .then(data => data)
    }
)
const slice = createSlice({
    name: 'members',
    initialState: [],
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(getMembersFromServer.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export default slice.reducer