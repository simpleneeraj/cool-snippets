import { createSlice } from '@reduxjs/toolkit';
import { ActionType, BackgroundTypes } from 'typings/store';


// const image = ` linear-gradient(140deg, rgb(207, 47, 152), rgb(106, 61, 236))
const initialState: BackgroundTypes = {
    padding: 20,
    source: '/images/glow-wallpaper.jpg',
    aspectRatio: `1:1`,
}

const background = createSlice({
    name: 'background',
    initialState: initialState,
    reducers: {
        setBackground: (state: BackgroundTypes, action: ActionType) => {
            state.source = action.payload
        },
        setRatio: (state: BackgroundTypes, action: ActionType) => {
            state.aspectRatio = action.payload
        },
        setPadding: (state: BackgroundTypes, action: ActionType) => {
            state.padding = action.payload
        },
    }
})




export default background;