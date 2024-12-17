import { sortBy } from 'lodash';
import emojis from 'emojibase-data/en/data.json';
import { getEmojiUrl } from '@/utils/getEmojiUrl';
import { NextRequest, NextResponse } from 'next/server';

enum Groups {
  TWITTER = 'twitter',
}

// Main Handler
export const GET = async (request: NextRequest) => {
  const query = request.nextUrl.searchParams.get('query')?.toLowerCase() || '';
  // const group = request.nextUrl.searchParams.get('group')?.toLowerCase() || '';
  try {
    const data = emojis.map((emoji) => ({
      name: emoji?.label,
      category: emoji?.tags,
      source: getEmojiUrl(emoji, ''),
    }));
    const results = query
      ? data.filter(
          (item) =>
            item?.name?.toLowerCase().includes(query) ||
            item?.category?.some((cat) => cat.toLowerCase().includes(query))
        )
      : data;

    const sortedResults = sortBy(results, 'name');

    const metadata = {
      icons: sortedResults,
      groups: Object.values(Groups),
    };

    return NextResponse.json(metadata, { status: 200 });
  } catch (error) {
    return NextResponse.json(error);
  }
};

export default GET;
