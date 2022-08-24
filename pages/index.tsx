import React from "react";
import NextSeo from "layout/seo";
import Link from "next/link";
import { NextPageWithLayout } from "typings/pages";
import PerPageLayout from "layout/perpage";
import DashBoard from "web/dashboard";
import Skeletion from "element/skeleton/byjsx";

const Home: NextPageWithLayout = () => {
  return (
    <React.Fragment>
      <NextSeo
        title="Beautiful Code Snippets Generator | Free"
        description="Turn your code into beautiful images. 
      With the help of acrylic blur layer. Generate in multple formats with social media aspect ratio. Wide range of backgrounds."
        thumbnail="https://www.icanpost.app/cover/cover-1.webp"
        largeThumbnail="https://www.icanpost.app/cover/cover-3.webp"
      ></NextSeo>
      <DashBoard />
      {/* <Skeletion /> */}
    </React.Fragment>
  );
};

export default Home;

Home.perpage = PerPageLayout;

/**
 *    <div
        style={{
          height: "100vh",
          display: "grid",
          placeContent: "center",
        }}
      >
        <h1 style={{ fontSize: "4rem" }}>
          <Link href={"/app"}>Go To App</Link>
        </h1>
      </div>
 */
