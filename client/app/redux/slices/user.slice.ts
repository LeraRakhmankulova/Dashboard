import {createSlice} from "@reduxjs/toolkit";


export const userSlice = createSlice({
        name: 'user',
        initialState: {
            data: null
        },
        reducers: {
            saveData: (state, action) => {
                state.data = action.payload;
            }
        },
    })
;

export const {saveData} = userSlice.actions;

export default userSlice.reducer;