import samplecode from "lib/samplecode";
import { ActionKeys } from "typings/store";
import { createSlice } from "@reduxjs/toolkit";
import iosTrafficColors from "lib/ios-traffic-colors";

const initialState = {
  canvas: {
    width: 450,
    height: 450,
    watermark: true,
    "aspect-ratio": `1:1`,
    source: "/images/glow-wallpaper.jpg",
  },
  code: {
    padding: 20,
    editable: true,
    draggable: false,
    translucent: true,
    "line-numbers": false,
    "auto-completion": false,
    theme: "dracula",
    mode: "javascript",
    alpha: 0,
    "blur-radius": 20,
    "corner-radius": 15,
    value: samplecode[2].str.trim(),
    background: "rgba(0, 0, 0, 0.5)",
  },
  codeHead: {
    shodow: 0,
    type: "unix::terminal",
    input: "nothing",
    position: "nothing",
    colors: iosTrafficColors,
    background: "rgba(0, 0, 0, 0.7)",
    theme: "filled",
    icon: "https://raw.githubusercontent.com/simpleneeraj/vscode-material-icon-theme/main/icons/swift.svg",
  },
  text: {
    "font-size": 16,
    "font-weight": 400,
    "line-height": 1.8,
    "letter-spacing": 0,
    "font-face": "SFMono",
  },
};

const codeSlice = createSlice({
  name: "CODE",
  initialState,
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
