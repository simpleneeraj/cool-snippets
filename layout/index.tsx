import React from "react";
import Header from "./header";
import Footer from "./footer";
import NextProgress from "./nextprogress";
import { HeaderProvider } from "store/context/header";
import Script from "next/script";
import jsonld from "./jsonld";

const Main = (props: React.ComponentPropsWithRef<"main">) => (
  <main {...props} />
);
interface LayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <HeaderProvider>
      <NextProgress />
      <Header />
      <Main>{children}</Main>
      <Script
        id={`icanpost-0`}
        key={`icanpost-1`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonld) }}
      />
      <Footer />
    </HeaderProvider>
  );
};
export default Layout;
