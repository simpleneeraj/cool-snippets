import unsplash from '@/server/clients/unsplash';

interface UnsplashSearchResponse {
  response?: {
    results?: UnsplashSearchResponse[];
  };
}

const unsplashResolver = {
  Query: {
    searchPhoto: async (ctx: any, { query }: { query: string }) => {
      try {
        const images = await unsplash.search.getPhotos({
          query,
          perPage: 30,
        });
        const results = images.response?.results as UnsplashSearchResponse;
        return results || [];
      } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch photos from Unsplash API');
      }
    },
  },
};

export default unsplashResolver;
