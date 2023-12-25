import { createSlice } from '@reduxjs/toolkit';
import { ActionKeys } from '@/typings/store';

const initialState = {
  bottom: {
    name: 'CODE::EDIT',
  },
};

const tabSlice = createSlice({
  name: 'Bottom Tab',
  initialState: initialState,
  reducers: {
    updateBottomTab: (state, action: ActionKeys) => {
      // @ts-ignore
      state.bottom[action.payload.key] = action.payload.value;
    },
  },
});

export default tabSlice;
