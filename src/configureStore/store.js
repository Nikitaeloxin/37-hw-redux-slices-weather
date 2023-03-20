import weather from '../slices/weatherSlice'
import message from '../slices/messageSlice'

import {configureStore} from "@reduxjs/toolkit";

export const store =configureStore({
    reducer:{
        weather, message
    }
})

