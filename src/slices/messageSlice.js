import {createSlice} from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name:'message',
    initialState:{message:''},
    reducers:{
        changeMessage(state,action){
            state.message = action.payload;
        }
    }
})
export const {changeMessage} = messageSlice.actions
export default messageSlice.reducer
