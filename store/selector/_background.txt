import selfSelector from "./self";
import { RootState } from "typings/store";
import { createDraftSafeSelector as draftSelector } from "@reduxjs/toolkit";

const background = (state: RootState) => state.background
const _background = draftSelector(selfSelector, background)

export default _background;

