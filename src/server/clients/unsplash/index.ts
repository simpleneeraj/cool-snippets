import { createApi } from 'unsplash-js';

const accessKey = String(process.env.UNSPLASH_ACCESS_KEY);

const unsplash = createApi({
  accessKey,
  fetch,
});
export default unsplash;
