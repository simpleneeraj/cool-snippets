import { createSlice, nanoid } from '@reduxjs/toolkit';


const initialState = [
    {
        id: nanoid(4),
        source: 'images/macos-big-sur.webp',
    },
    {
        id: nanoid(4),
        source: 'images/windows-10.webp',
    },
]

const imagesSlice = createSlice({
    name: 'Images',
    initialState: initialState,
    reducers: {
        addImage: (state, action) => {
            state.unshift(action.payload)
        },
        deleteImage: (state, action) => {
            return state.filter((data) => data.id !== action.payload)
        },
    }
})


export default imagesSlice;