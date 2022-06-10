import selfSelector from "./self";
import { RootState } from "typings/store";
import { createDraftSafeSelector as draftSelector } from "@reduxjs/toolkit";

const preference = (state: RootState) => state.preference
const _preference = draftSelector(selfSelector, preference)

export default _preference;

