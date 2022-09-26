import selfSelector from "./self";
import { RootState } from "typings/store";
import { createDraftSafeSelector as draftSelector } from "@reduxjs/toolkit";

const codeHead = (state: RootState) => state.codeHead
const _codeHead = draftSelector(selfSelector, codeHead)

export default _codeHead;

