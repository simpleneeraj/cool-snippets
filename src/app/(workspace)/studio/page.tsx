import type { Metadata } from 'next';
import EditorPageClient from './client';

// The editor is the app, not indexable content — keep ranking signal on the
// marketing pages.
export const metadata: Metadata = {
  title: 'Studio',
  robots: { index: false, follow: false },
};

const EditorPage = () => {
  return <EditorPageClient />;
};
export default EditorPage;
