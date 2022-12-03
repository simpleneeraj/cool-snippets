import { createSlice } from '@reduxjs/toolkit';
import samplecode from 'lib/samplecode';
import { ActionType, CodeTypes } from 'typings/store';



const initialState: CodeTypes = {
    codeValue: samplecode[2].str.trim()
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
// [1, 2, 3, 4, 5]
