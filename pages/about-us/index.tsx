import PerPageLayout from "layout/perpage";
import React from "react";
import { NextPageWithLayout } from "typings/pages";

const AboutPage: NextPageWithLayout = () => {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
};
export default AboutPage;

AboutPage.perpage = PerPageLayout;
