import {configureStore} from "@reduxjs/toolkit"
import { themeSlice } from "./feature/theme-slice"
import { counterSlice } from "./feature/counter-slice"


export const store=configureStore({
    reducer:{
        theme:themeSlice.reducer,
        counter:counterSlice.reducer
    }
})