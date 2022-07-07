import { createSlice, nanoid } from '@reduxjs/toolkit';
import defaultImages from 'lib/images';



const imagesSlice = createSlice({
    name: 'Images',
    initialState: defaultImages,
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