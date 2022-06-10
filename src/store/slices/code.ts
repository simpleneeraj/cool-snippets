import { createSlice } from '@reduxjs/toolkit';
import { ActionType, CodeTypes } from 'typings/store';

const initialState: CodeTypes = {
    codeValue: `
    import SwiftUI

    struct CircleImage: View {
      var body: some View {
        Image("turtlerock")
          .clipShape(Circle())
      }
    }`
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