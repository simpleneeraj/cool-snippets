

import { createSlice } from '@reduxjs/toolkit';
import { ActionType, DownloadImageTypes } from 'typings/store';

const initialState: DownloadImageTypes = {
    pixelRatio: 2,
    imageFormat: 'png',
    fileName: 'image',
}

const download = createSlice({
    name: 'Download Slice',
    initialState: initialState,
    reducers: {
        setPixelRatio: (state: DownloadImageTypes, action: ActionType) => {
            state.pixelRatio = action.payload
        },
        setImageFormat: (state: DownloadImageTypes, action: ActionType) => {
            state.imageFormat = action.payload
        },
        setFileName: (state: DownloadImageTypes, action: ActionType) => {
            state.fileName = action.payload
        },
    }
})


export default download;