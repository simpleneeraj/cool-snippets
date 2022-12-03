import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import code from "./slices/code";
import tabSlice from "./slices/tab";
import download from "./slices/download";
import unsplashApi from "./api/unsplash";
import imagesSlice from "./slices/background";
import undox from "plugins/undo-redo/undox.reducer";

const store = configureStore({
    reducer: {
        tab: tabSlice.reducer,
        download: download.reducer,
        images: imagesSlice.reducer,
        [unsplashApi.reducerPath]: unsplashApi.reducer,
        // @ts-ignore
        code: undox(code.reducer),

    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(unsplashApi.middleware)
})
setupListeners(store.dispatch)
export default store;
