import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import apiRequests from '../../services/axios/configs/configs'

export const getProjectImagesFromServer = createAsyncThunk(
    'projectImages/getProjectImagesFromServer',
    async () => {
        return apiRequests('/projectImages').then(res => res.data)
    }
)
const slice = createSlice({
    name: 'projectImages',
    initialState: [],
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(getProjectImagesFromServer.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export default slice.reducer