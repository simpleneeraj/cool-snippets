import React from "react";
import NextSeo from "layout/seo";
import AppLayout from "app";
import type { GetServerSideProps, GetServerSidePropsContext } from "next";

interface EditorInstancePage {
  instanceData: string;
}

const EditorInstancePage = ({ instanceData }: EditorInstancePage) => {
  console.log(instanceData);
  return (
    <React.Fragment>
      <NextSeo
        title="Generate Beautiful Code Snippets of your code"
        description="Turn your code into beautiful images. 
        With the help of acrylic blur layer. Generate in multple formats with social media aspect ratio. Wide range of backgrounds."
        thumbnail="https://www.icanpost.app/cover/cover-1.webp"
        largeThumbnail="https://www.icanpost.app/cover/cover-3.webp"
      >
        {/* <meta name="viewport" content="width=1024" /> */}
      </NextSeo>
      <AppLayout />
    </React.Fragment>
  );
};

export default EditorInstancePage;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { query } = context;
  return {
    props: {
      instanceData: query,
    },
  };
};
