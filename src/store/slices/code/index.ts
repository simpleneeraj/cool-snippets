import { ActionKeys } from '@/typings/store';
import { createSlice } from '@reduxjs/toolkit';
import state from '@/constants/state.json';

const codeSlice = createSlice({
  name: 'CODE',
  initialState: state,
  reducers: {
    updateCanvas: (state, action: ActionKeys) => {
      // @ts-ignore
      state.canvas[action.payload.key] = action.payload.value;
    },
    updateCode: (state, action: ActionKeys) => {
      // @ts-ignore
      state.code[action.payload.key] = action.payload.value;
    },
    updateText: (state, action: ActionKeys) => {
      // @ts-ignore
      state.text[action.payload.key] = action.payload.value;
    },
    updateCodeHead: (state, action: ActionKeys) => {
      // @ts-ignore
      state.codeHead[action.payload.key] = action.payload.value;
    },
  },
});

export default codeSlice;

// 'source': '/images/glow-wallpaper.jpg',
