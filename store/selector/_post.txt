import selfSelector from "./self";
import { RootState } from "typings/store";
import { createDraftSafeSelector as draftSelector } from "@reduxjs/toolkit";


const post = (state: RootState) => state.post
const _post = draftSelector(selfSelector, post)

export default _post;