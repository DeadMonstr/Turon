import {configureStore} from "@reduxjs/toolkit";
import counter from "slices/websiteSlice";


const store = configureStore({
    reducer: {counter}
})


export default store