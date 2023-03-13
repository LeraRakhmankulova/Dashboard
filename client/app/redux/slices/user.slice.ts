import {createSlice} from "@reduxjs/toolkit";
import {HYDRATE} from "next-redux-wrapper";


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
        extraReducers: {
            [HYDRATE]: (state, action)=> {
                return{
                    ...state,
                    ...action.payload.user
                }
            }
        }
    })
;

export const {saveData} = userSlice.actions;

export default userSlice.reducer;