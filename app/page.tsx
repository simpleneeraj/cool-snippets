import Layout from "layout";
import React from "react";
import { NextPageWithLayout } from "typings/pages";
import LandingPage from "web/landingpage";

const Home: NextPageWithLayout = () => {
  return (
    <Layout>
      {/* <NextSeo
        title="Beautiful Code Snippets Generator | Free"
        description="Turn your code into beautiful images. 
      With the help of acrylic blur layer. Generate in multple formats with social media aspect ratio. Wide range of backgrounds."
        thumbnail="https://www.icanpost.app/cover/cover-1.webp"
        largeThumbnail="https://www.icanpost.app/cover/cover-3.webp"
      ></NextSeo> */}
      <LandingPage />
    </Layout>
  );
};

export default Home;

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
