import React from "react";
import NextSeo from "layout/seo";
import type { NextPage } from "next";
import Link from "next/link";

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

      <div
        style={{
          height: "100vh",
          display: "grid",
          placeContent: "center",
        }}
      >
        <h1 style={{ fontSize: "3rem" }}>
          <Link href={"/app"}>Go To App</Link>
        </h1>
      </div>
    </React.Fragment>
  );
};

export default Home;
