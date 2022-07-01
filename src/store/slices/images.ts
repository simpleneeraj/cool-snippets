import { createSlice, nanoid } from '@reduxjs/toolkit';


import mac from 'assets/images/macos-big-sur.webp';
import win from 'assets/images/windows-10.webp';

const initialState = [
    {
        id: nanoid(4),
        source: mac,
    },
    {
        id: nanoid(4),
        source: win,
    },
]

const imagesSlice = createSlice({
    name: 'Images',
    initialState: initialState,
    reducers: {
        addImage: (state, action) => {
            state.push(action.payload)
        },
        deleteImage: (state, action) => {
            return state.filter((data) => data.id !== action.payload)
        },
    }
})


export default imagesSlice;