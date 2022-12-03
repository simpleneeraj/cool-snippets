import samplecode from "lib/samplecode"
import { ActionKeys } from "typings/store"
import { createSlice } from "@reduxjs/toolkit"
import iosTrafficColors from "lib/ios-traffic-colors"


export type CodeStateType = typeof initialState

export const initialState = {
    canvas: {
        'watermark': true,
        'aspect-ratio': `1:1`,
        'source': '/images/glow-wallpaper.jpg',
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
        'alpha': 0.7,
        'blur-radius': 20,
        'corner-radius': 15,
        'value': samplecode[2].str.trim(),
    },
    codeHead: {
        'type': 'DEFAULT',
        'icon': false,
        'input': false,
        'colors': iosTrafficColors,
        'background': '',
        'shodow': 0
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


