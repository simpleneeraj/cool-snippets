import Head from "next/head";
import React from "react";

interface MetaProps extends React.PropsWithChildren<{}> {
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

const NextSeo = (props: MetaProps) => {
  const loading = "Loading...";
  const {
    title = loading,
    description = loading,
    thumbnail = "",
    themeColor = "#000000",
    canonicalUrl = ``,
    homeUrl = ``,
    largeThumbnail,
    keywords,
    twitterUsername,
  } = props;
  return (
    <Head>
      <meta charSet="utf-8" />
      <link rel="icon" href="favicon.ico" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="theme-color" content={themeColor} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="icons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="icons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="icons/favicon-16x16.png"
      />

      <link
        rel="apple-touch-icon-precomposed"
        sizes="57x57"
        href="icons/apple-touch-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="114x114"
        href="icons/apple-touch-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="72x72"
        href="icons/apple-touch-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="144x144"
        href="icons/apple-touch-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="60x60"
        href="icons/apple-touch-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="120x120"
        href="icons/apple-touch-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="76x76"
        href="icons/apple-touch-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="152x152"
        href="icons/apple-touch-icon-152x152.png"
      />
      <link
        rel="icon"
        type="image/png"
        href="icons/favicon-196x196.png"
        sizes="196x196"
      />
      <link
        rel="icon"
        type="image/png"
        href="icons/favicon-96x96.png"
        sizes="96x96"
      />
      <link
        rel="icon"
        type="image/png"
        href="icons/favicon-32x32.png"
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href="icons/favicon-16x16.png"
        sizes="16x16"
      />
      <link
        rel="icon"
        type="image/png"
        href="icons/favicon-128.png"
        sizes="128x128"
      />
      <link rel="apple-touch-icon" href="icons/android-chrome-192x192.png" />
      {/* GOOGLE ANALYTICS */}
      <meta
        name="google-site-verification"
        content="UeDeQ6-z0Fq7ibMXlAp9B0pjXytH-AXVCnRkgINu1iU"
      />
      {/* Title */}
      <title>{title}</title>
      <meta name="og:title" content={title} />
      {/* Description */}
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      {/* Image */}
      <meta name="twitter:image" content={thumbnail} />
      <meta property="og:image" content={thumbnail} />
      {/* URL */}
      <meta property="og:url" content={homeUrl} />
      <meta name="twitter:site" content={twitterUsername} />
      <link rel="canonical" href={canonicalUrl} />
      {/* General */}
      <meta name="keywords" content={keywords} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content={largeThumbnail} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="p:domain_verify" content="a7ac9def5ba15e87fb38ac54253ee6dd" />
      {props.children}
    </Head>
  );
};
export default NextSeo;
