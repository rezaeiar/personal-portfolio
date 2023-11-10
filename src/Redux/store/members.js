import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import apiRequests from '../../services/axios/configs/configs'

export const getMembersFromServer = createAsyncThunk(
    'members/getMembersFromServer',
    async () => {
        return apiRequests('/members').then(res => res.data)
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