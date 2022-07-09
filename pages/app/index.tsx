import React from "react";
import type { NextPage } from "next";
import NextSeo from "layout/seo";
import AppLayout from "./layout";
import dynamic from "next/dynamic";
import OnBording from "web/onboarding";
import { useCookies } from "react-cookie";

const AppHeader = dynamic(async () => await import("app/header"));
const Center = dynamic(async () => await import("app/center"));
const LazyDock = dynamic(async () => await import("app/lazydock"));

const Home: NextPage = () => {
  // const [cookies, setCookie] = useCookies(["ONBOARDING"]);

  // console.log(cookies.ONBOARDING);
  return (
    <React.Fragment>
      <OnBording />
      <NextSeo
        title="Beautiful Code Snippets Generator | Free"
        description="Turn your code into beautiful images. 
        With the help of acrylic blur layer. Generate in multple formats with social media aspect ratio. Wide range of backgrounds."
        thumbnail="https://www.icanpost.app/cover/cover-1.webp"
        largeThumbnail="https://www.icanpost.app/cover/cover-3.webp"
      >
        <meta name="viewport" content="width=600" />
      </NextSeo>
      <AppLayout>
        <AppHeader />
        <Center />
        <LazyDock />
      </AppLayout>
    </React.Fragment>
  );
};

export default Home;
