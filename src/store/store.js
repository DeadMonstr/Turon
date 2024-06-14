import {configureStore} from "@reduxjs/toolkit";
import counter from "slices/websiteSlice";
import layout from "slices/alertSlice"

const store = configureStore({
    reducer: {
        counter,
        layout


    }
})


export default store