"use client";

import React from "react";
import Header from "./header";
import Footer from "./footer";
// import NextProgress from "./nextprogress";
import { HeaderProvider } from "store/context/header";
import Script from "next/script";
import content from "./jsonld";

const Main = (props: React.ComponentPropsWithRef<"main">) => (
  <main {...props} />
);
interface LayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <HeaderProvider>
      {/* <NextProgress /> */}
      <Header />
      <Main>{children}</Main>
      <Script
        id="icanpost-app"
        key="icanpost-app"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(content, null, "\t"),
        }}
      />

      <Footer />
    </HeaderProvider>
  );
};
export default Layout;

{
  /* <Script
        id="app-ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(content, null, "\t"),
        }}
      /> */
}
