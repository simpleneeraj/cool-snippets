import { createSlice } from '@reduxjs/toolkit';
import { ActionType, CodeTypes } from 'typings/store';

const initialState: CodeTypes = {
    codeValue: `
import code from "./slices/code";
import dock from "./slices/dock";
import text from "./slices/text";
import background from "./slices/background";
import preference from "./slices/preference";
import download from "./slices/download";
export default store;
    `.trim()
}

const code = createSlice({
    name: 'code',
    initialState: initialState,
    reducers: {
        writeCode: (state: CodeTypes, action: ActionType) => {
            state.codeValue = action.payload
        }
    }
})


export default code;

