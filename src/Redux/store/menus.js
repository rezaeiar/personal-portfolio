import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getMenusFromServer = createAsyncThunk(
    'menus/getMenusFromServer',
    async () => {
        return fetch('http://localhost:3000/menus')
            .then(res => res.json())
            .then(data => data)
    }
)
const slice = createSlice({
    name: 'menus',
    initialState: [],
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(getMenusFromServer.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export default slice.reducer