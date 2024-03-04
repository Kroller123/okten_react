import {configureStore} from "@reduxjs/toolkit";

import {carReducer} from "./slices";

let store = configureStore({
    reducer:{
        cars:carReducer
    }
});

export {store}