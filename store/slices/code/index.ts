import { createSlice } from "@reduxjs/toolkit"
import samplecode from "lib/samplecode"
import { ActionKeys } from "typings/store"


const initialState = {
    canvas: {
        'aspect-ratio': `1:1`,
        'source': '/images/glow-wallpaper.jpg',
        'watermark': true,
    },
    code: {
        'padding': 20,
        'editable': true,
        'draggable': false,
        'translucent': true,
        'line-numbers': false,
        'auto-completion': false,
        'theme': "dracula",
        'mode': "javascript",
        'value': samplecode[2].str.trim(),
        'corner-radius': 15,
        'blur-radius': 20,
        'alpha': 0.7
    },
    codeHead: {
        'type': 'DEFAULT',
        'input': "", // with icons || without icon
        'colors': [
            {
                name: '',
                hex: '',
                rgb: [0, 0, 0],
            },
            {
                name: '',
                hex: '',
                rgb: [0, 0, 0],
            },
            {
                name: '',
                hex: '',
                rgb: [0, 0, 0],
            },
        ], // default 3 colors
        'background': '' // solid color
    },
    text: {
        'font-size': 14,
        'font-weight': 400,
        'line-height': 1.5,
        'letter-spacing': 0,
        'font-face': 'SFMono',
    },

}

const codeSlice = createSlice({
    name: 'CODE',
    initialState,
    reducers: {
        updateCanvas: (state, action: ActionKeys) => {
            // @ts-ignore
            state.canvas[action.payload.key] = action.payload.value
        },
        updateCode: (state, action: ActionKeys) => {
            // @ts-ignore
            state.code[action.payload.key] = action.payload.value
        },
        updateText: (state, action: ActionKeys) => {
            // @ts-ignore
            state.text[action.payload.key] = action.payload.value
        },
        updateCodeHead: (state, action: ActionKeys) => {
            // @ts-ignore
            state.codeHead[action.payload.key] = action.payload.value
        },
    }
})


export default codeSlice
