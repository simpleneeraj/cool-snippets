import { createSlice } from '@reduxjs/toolkit';
import { ActionType, CodeTypes } from 'typings/store';

const initialState: CodeTypes = {
    codeValue: `
    const numbers = [4, 2, 5, 1, 3];
    numbers.sort(function(a, b) {
      return a - b;
    });
    console.log(numbers);
    
    // [1, 2, 3, 4, 5]
    
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

