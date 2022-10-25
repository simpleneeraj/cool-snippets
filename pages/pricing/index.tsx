import PerPageLayout from "layout/perpage";
import React from "react";
import { NextPageWithLayout } from "typings/pages";

const PricingPage: NextPageWithLayout = () => {
  return (
    <div>
      <h1>Pricing Page</h1>
    </div>
  );
};
export default PricingPage;

PricingPage.perpage = PerPageLayout;
