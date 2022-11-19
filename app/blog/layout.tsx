import Layout from "layout";
import React from "react";

const BlogLayout = ({ children }: React.PropsWithChildren<{}>) => {
  return <Layout>{children}</Layout>;
};
export default BlogLayout;
