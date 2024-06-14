import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    alert: []
}


const LayoutSlice = createSlice({
    name: "LayoutSlice",
    initialState,
    reducers:{
        disableAlertActive: (state , action) =>{
            state.alert = state.alert.filter((item , index) => index !== action.payload.index)
        }
    }
})

const{actions  , reducer} =  LayoutSlice

export default reducer

export const {disableAlertActive} = actions