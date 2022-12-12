import { configureStore } from "@reduxjs/toolkit";

/* Slices */
import code from "./slices/code";
import tabSlice from "./slices/tab";
import download from "./slices/download";
import imagesSlice from "./slices/background";
import undox from "plugins/undo-redo/undox.reducer";


const codeReducer = undox(code.reducer, { future: 5, past: 5 })

const store = configureStore({
    reducer: {
        tab: tabSlice.reducer,
        download: download.reducer,
        images: imagesSlice.reducer,
        code: codeReducer,

    },
    devTools: true,
})
export default store;
