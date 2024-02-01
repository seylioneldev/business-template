import {configureStore} from "@reduxjs/toolkit"
import { userReducer } from "./user-slice/user-slice"

export const store = configureStore({
    reducer : {
        USER : userReducer,
    }

})

