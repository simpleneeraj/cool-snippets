import PerPageLayout from "layout/perpage";
import React from "react";
import { NextPageWithLayout } from "typings/pages";

const BlogPage: NextPageWithLayout = () => {
  return (
    <div>
      <h1>Blog Page</h1>
    </div>
  );
};
export default BlogPage;

BlogPage.perpage = PerPageLayout;
