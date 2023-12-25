import selfSelector from './self';
import { RootState } from '@/typings/store';
import { createDraftSafeSelector as draftSelector } from '@reduxjs/toolkit';

const bottomTab = (state: RootState) => state.tab;
const _tab = draftSelector(selfSelector, bottomTab);

export default _tab;
