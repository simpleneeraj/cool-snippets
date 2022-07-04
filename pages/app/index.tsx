import type { NextPage } from "next";
import React from "react";
import NextSeo from "layout/seo";
import AppLayout from "./layout";
import dynamic from "next/dynamic";
import delay from "lib/delay";

const ms = 0;
const Center = dynamic(async () => {
  await delay(ms);
  return await import("app/center");
});
const LazyDock = dynamic(async () => {
  await delay(ms);
  return await import("app/lazydock");
});

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <NextSeo
        title="Beautiful Code Snippets Generator | Free"
        description="Turn your code into beautiful images. 
      With the help of acrylic blur layer. Generate in multple formats with social media aspect ratio. Wide range of backgrounds."
        thumbnail="cover/cover-1.webp"
        largeThumbnail="cover/cover-3.webp"
      >
        <meta name="viewport" content="width=768" />
      </NextSeo>
      <AppLayout>
        <Center />
        <LazyDock />
      </AppLayout>
    </React.Fragment>
  );
};

export default Home;
