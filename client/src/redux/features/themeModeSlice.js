import { createSlice } from '@reduxjs/toolkit';

export const themeModeSlice = createSlice({
    name: "User",
    initialState: {
        user: null,
        listFavorites: []
    },
    reducers: {
        setUser: (state, action) => { },
    }
});

export const { setUser } = themeModeSlice.actions;
export default themeModeSlice.reducer;