import React from "react";
import Heading from "components/heading";
import { NextPageWithLayout } from "typings/pages";
import LandingPage from "web/landingpage";
import OfferGrid from "web/landingpage/offer-grid";
import PerPageLayout from "layout/perpage";

const Home: NextPageWithLayout = () => {
  return (
    <React.Fragment>
      <LandingPage />
      <Heading
        title="Comming Soon"
        paragraph="Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna semper orci a tincidunt."
      />
      {/* <OfferGrid />
      <Heading
        title="We Offer"
        paragraph="Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna semper orci a tincidunt."
      /> */}
    </React.Fragment>
  );
};

export default Home;

Home.perpage = PerPageLayout;

/**
 *    <div
        style={{
          height: "100vh",
          display: "grid",
          placeContent: "center",
        }}
      >
        <h1 style={{ fontSize: "4rem" }}>
          <Link href={"/app"}>Go To App</Link>
        </h1>
      </div>
 */

{
  /* <NextSeo
        title="Beautiful Code Snippets Generator | Free"
        description="Turn your code into beautiful images. 
      With the help of acrylic blur layer. Generate in multple formats with social media aspect ratio. Wide range of backgrounds."
        thumbnail="https://www.icanpost.app/cover/cover-1.webp"
        largeThumbnail="https://www.icanpost.app/cover/cover-3.webp"
      ></NextSeo> */
}
