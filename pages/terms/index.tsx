import React from "react";
import PerPageLayout from "layout/perpage";
import { NextPageWithLayout } from "typings/pages";

const TermsPage: NextPageWithLayout = () => {
  return (
    <div>
      <h1>Terms Page</h1>
    </div>
  );
};
export default TermsPage;

TermsPage.perpage = PerPageLayout;
