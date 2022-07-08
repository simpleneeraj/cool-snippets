import { createSlice } from '@reduxjs/toolkit';
import samplecode from 'lib/samplecode';
import { ActionType, CodeTypes } from 'typings/store';



// const str = `/* Array sort() method in es6 */

// const numbers = [4, 2, 5, 1, 3];
// numbers.sort((a, b) => a - b);
// console.log(numbers);

// // expected output [1, 2, 3, 4, 5]`

// const str = `/* Free for everyone */
// while(coding){
//    headphones = true
//    focus = '100%'
// }
// /* Built with simpleneeraj */`

const str = `while(true){
  // i love you
}`

const random = Math.round(Math.random() * samplecode.length)
const initialState: CodeTypes = {
    codeValue: samplecode[0]?.str?.trim()
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
