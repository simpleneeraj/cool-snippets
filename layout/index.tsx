import React from "react";
import Header from "./header";
import Footer from "./footer";
import NextProgress from "./nextprogress";
import { HeaderProvider } from "context/header";

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
      <Footer />
    </HeaderProvider>
  );
};
export default Layout;
