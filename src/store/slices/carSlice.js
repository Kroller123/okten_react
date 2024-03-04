import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    cars:[],
    trigger:null,
    carForUpdate:null
}

let carSlice = createSlice({
    name:'carSlice',
    initialState,
    reducers:{
        setResponse:(state, action)=> {
            state.cars = action.payload
        },
        trigger:state=>{
            state.trigger = !state.trigger
        },
        setCarForUpdate:(state,action)=>{
            state.carForUpdate = action.payload
        }
    }
})

let {reducer:carReducer, actions} = carSlice


let carActions = {
    ...actions
}

export {carReducer,carActions}