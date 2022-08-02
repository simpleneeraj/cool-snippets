import React from "react";
import type { NextPage } from "next";
import NextSeo from "layout/seo";
import AppLayout from "app";
// import AppLayout from "./layout";
// import dynamic from "next/dynamic";
// import OnBording from "web/onboarding";
// import AppHeader from "app/header";
// import LazyDock from "app/lazydock";
// import AppFooter from "app/footer";

// const Center = dynamic(async () => await import("app/center"));

const Home: NextPage = () => {
  return (
    <React.Fragment>
      {/* <OnBording /> */}
      <NextSeo
        title="Generate Beautiful Code Snippets of your code"
        description="Turn your code into beautiful images. 
        With the help of acrylic blur layer. Generate in multple formats with social media aspect ratio. Wide range of backgrounds."
        thumbnail="https://www.icanpost.app/cover/cover-1.webp"
        largeThumbnail="https://www.icanpost.app/cover/cover-3.webp"
      >
        <meta name="viewport" content="width=600" />
      </NextSeo>
      {/* <AppLayout>
        <AppHeader />
        <Center />
        <LazyDock />
        <AppFooter />
      </AppLayout> */}
      <AppLayout />
    </React.Fragment>
  );
};

export default Home;
