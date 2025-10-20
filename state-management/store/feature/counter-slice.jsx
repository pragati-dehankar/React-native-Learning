import {createSlice} from '@reduxjs/toolkit';

const initialState={count:0};
export const counterSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment(state,action){
            if(action.payload){
                state.count+=action.payload
            }else{
                state.count++
            }
        },
        decrement(state,action){
             if(action.payload){
                state.count-=action.payload
            }else{
                state.count--
            }
        },
    }
})
export const counterAction=counterSlice.actions