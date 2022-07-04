import Head from "next/head";

interface MetaProps {
  title: string | undefined;
  description: string;
  thumbnail?: string;
  themeColor?: string;
  canonicalUrl?: string;
  largeThumbnail?: string;
  homeUrl?: string;
  keywords?: string;
  twitterUsername?: string;
}

/**
 * NextSEO Component For 100% score in seo
 * @param param0
 * @returns
 */
const NextSEO = (props: MetaProps) => {
  return <Head></Head>;
};
export default NextSEO;
