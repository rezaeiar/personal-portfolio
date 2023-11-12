import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import apiRequests from '../../services/axios/configs/configs'

export const sendContactsToServer = createAsyncThunk(
    'contacts/sendContactsToServer',
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
        builder.addCase(sendContactsToServer.fulfilled, (state, action) => {
            return action.payload
        })
        builder.addCase(sendContactsToServer.pending, (state, action) => {
            return "pending"
        })
        builder.addCase(sendContactsToServer.rejected, (state, action) => {
            return "rejected"
        })
    }
})

export default slice.reducer