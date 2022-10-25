import { configureStore } from "@reduxjs/toolkit";
import isDev from "utils/isdev";
import { setupListeners } from '@reduxjs/toolkit/query'
// Slices
import code from "./slices/code";
// import dock from "./slices/dock";
import text from "./slices/code/text";
import background from "./slices/background";
import preference from "./slices/code/preference";
import download from "./slices/download";
import imagesSlice from "./slices/background/images";
import post from "./slices/code/post";
import unsplashApi from "./api/unsplash";
import tabSlice from "./slices/bottom/tab";
import headSlice from "./slices/code/head";

const store = configureStore({
    reducer: {
        code: code.reducer,
        codeHead: headSlice.reducer,
        text: text.reducer,
        // dock: dock.reducer,
        post: post.reducer,
        images: imagesSlice.reducer,
        download: download.reducer,
        background: background.reducer,
        preference: preference.reducer,
        // RIGHT SLICES
        bottomTab: tabSlice.reducer,
        // API
        [unsplashApi.reducerPath]: unsplashApi.reducer,

    },

    devTools: isDev,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(unsplashApi.middleware)


})

setupListeners(store.dispatch)
export default store;

