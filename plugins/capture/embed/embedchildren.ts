import embedImages from '.';
import { CaptureOptions } from '../options';
import toArray from '../utils/toarray';

async function embedChildren<T extends HTMLElement>(
  clonedNode: T,
  options: CaptureOptions
): Promise<T> {
  const children = toArray<HTMLElement>(clonedNode.childNodes);
  // eslint-disable-next-line no-use-before-define
  const deferreds = children.map(child => embedImages(child, options));
  return Promise.all(deferreds).then(() => clonedNode);
}
export default embedChildren;
