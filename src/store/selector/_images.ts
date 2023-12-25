import selfSelector from './self';
import { RootState } from '@/typings/store';
import { createDraftSafeSelector as draftSelector } from '@reduxjs/toolkit';

const images = (state: RootState) => state.images;
const _images = draftSelector(selfSelector, images);

export default _images;
