import selfSelector from "./self";
import { RootState } from "typings/store";
import { createDraftSafeSelector as draftSelector } from "@reduxjs/toolkit";

const download = (state: RootState) => state.download;
const _download = draftSelector(selfSelector, download)

export default _download;

