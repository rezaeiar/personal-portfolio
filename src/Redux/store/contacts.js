import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import apiRequests from '../../services/axios/configs/configs'

export const sendContactsToServerServer = createAsyncThunk(
    'contacts/sendContactsToServerServer',
    async (values) => {
        return apiRequests({
            url: '/contacts',
            method: 'POST',
            data: values
        })
            .then(res => res.data)
    }
)
const slice = createSlice({
    name: 'contacts',
    initialState: [],
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(sendContactsToServerServer.fulfilled, (state, action) => {
            return action.payload
        })
        builder.addCase(sendContactsToServerServer.pending, (state, action) => {
            return "pending"
        })
        builder.addCase(sendContactsToServerServer.rejected, (state, action) => {
            return "rejected"
        })
    }
})

export default slice.reducer