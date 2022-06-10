import { configureStore } from "@reduxjs/toolkit";
import isDev from "utils/isdev";
// Slices
import code from "./slices/code";
import dock from "./slices/dock";
import text from "./slices/text";
import background from "./slices/background";
import preference from "./slices/preference";
import download from "./slices/download";

const store = configureStore({
    reducer: {
        code: code.reducer,
        text: text.reducer,
        dock: dock.reducer,
        download: download.reducer,
        background: background.reducer,
        preference: preference.reducer,
    },
    devTools: isDev,

})

export default store;