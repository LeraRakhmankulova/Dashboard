import {configureStore} from '@reduxjs/toolkit'
import userReducer from "./slices/user.slice";
import {createWrapper} from "next-redux-wrapper";

export function makeStore() {
    return configureStore({
        reducer: {
            user: userReducer
        },
    })
}

export const store = makeStore()

export type RootState = ReturnType<typeof store.getState>
export const wrapper = createWrapper(makeStore);
export type AppDispatch = typeof store.dispatch