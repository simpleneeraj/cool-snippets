import selfSelector from './self';
import { RootState } from '@/typings/store';
import { createDraftSafeSelector as draftSelector } from '@reduxjs/toolkit';

const code = (state: RootState) => state.code;
const _code = draftSelector(selfSelector, code);

export default _code;
