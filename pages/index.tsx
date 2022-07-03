import React from "react";
import CodeApp from "app";
import NextSeo from "layout";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <NextSeo />
      <CodeApp />
    </React.Fragment>
  );
};

export default Home;
