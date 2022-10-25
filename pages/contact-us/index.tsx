import PerPageLayout from "layout/perpage";
import React from "react";
import { NextPageWithLayout } from "typings/pages";

const ContactPage: NextPageWithLayout = () => {
  return (
    <div>
      <h1>Contact Page</h1>
    </div>
  );
};
export default ContactPage;

ContactPage.perpage = PerPageLayout;
