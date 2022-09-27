import selfSelector from "./self";
import { RootState } from "typings/store";
import { createDraftSafeSelector as draftSelector } from "@reduxjs/toolkit";

const dock = (state: RootState) => state.dock
const _dock = draftSelector(selfSelector, dock)

export default _dock;

