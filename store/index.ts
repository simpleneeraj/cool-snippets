import isDev from "utils/isdev";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
// Slices
import code from "./slices/code";
import download from "./slices/download";
import unsplashApi from "./api/unsplash";
import tabSlice from "./slices/bottom/tab";
import imagesSlice from "./slices/background/images";

const store = configureStore({
    reducer: {
        code: code.reducer,
        download: download.reducer,
        bottomTab: tabSlice.reducer,
        images: imagesSlice.reducer,

        [unsplashApi.reducerPath]: unsplashApi.reducer,

    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(unsplashApi.middleware)
})


setupListeners(store.dispatch)
export default store;


// import dock from "./slices/dock";
// import text from "./slices/code/text";
// import background from "./slices/background";
// import preference from "./slices/code/preference";
// import headSlice from "./slices/code/head";
// import post from "./slices/code/post";
// text: text.reducer,
// dock: dock.reducer,
// post: post.reducer,
// codeHead: headSlice.reducer,
// background: background.reducer,
// preference: preference.reducer,
// RIGHT SLICES
