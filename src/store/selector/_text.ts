import selfSelector from "./self";
import { RootState } from "typings/store";
import { createDraftSafeSelector as draftSelector } from "@reduxjs/toolkit";

const text = (state: RootState) => state.text
const _text = draftSelector(selfSelector, text)

export default _text;

