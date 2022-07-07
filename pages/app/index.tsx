import React from "react";
import type { NextPage } from "next";
import NextSeo from "layout/seo";
import AppLayout from "./layout";
import dynamic from "next/dynamic";
import OnBording from "web/onboarding";

const Center = dynamic(async () => {
  return await import("app/center");
});
const LazyDock = dynamic(async () => {
  return await import("app/lazydock");
});

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <OnBording />
      <NextSeo
        title="Beautiful Code Snippets Generator | Free"
        description="Turn your code into beautiful images. 
        With the help of acrylic blur layer. Generate in multple formats with social media aspect ratio. Wide range of backgrounds."
        thumbnail="cover/cover-1.webp"
        largeThumbnail="cover/cover-3.webp"
      >
        <meta name="viewport" content="width=600" />
      </NextSeo>
      <AppLayout>
        <Center />
        <LazyDock />
      </AppLayout>
    </React.Fragment>
  );
};

export default Home;
