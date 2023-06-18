import React from "react";
import CodeAppMain from "editor";
import NextSeo from "layout/seo";

interface EditorInstancePage {
  instanceData: string;
}

const EditorInstancePage = () => {
  return (
    <React.Fragment>
      <NextSeo
        title="Generate Beautiful Code Snippets of your code"
        description="Turn your code into beautiful images. 
        With the help of acrylic blur layer. Generate in multple formats with social media aspect ratio. Wide range of backgrounds."
        thumbnail="https://app.simpleneeraj.in/cover/cover-1.webp"
        largeThumbnail="https://app.simpleneeraj.in/cover/cover-3.webp"
      >
        {/* <meta name="viewport" content="width=1024" /> */}
      </NextSeo>
      <CodeAppMain />
    </React.Fragment>
  );
};

export default EditorInstancePage;
