import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getTestimonialsFromServer = createAsyncThunk(
    'testimonials/getTestimonialsFromServer',
    async () => {
        return fetch('http://localhost:3000/testimonials')
            .then(res => res.json())
            .then(data => data)
    }
)
const slice = createSlice({
    name: 'testimonials',
    initialState: [],
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(getTestimonialsFromServer.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export default slice.reducer