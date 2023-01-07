import React from "react";
import Center from "editor/center";
import { useRouter } from "next/router";
import InlineStyle from "editor/center/inline";

const Shot = () => {
  const router = useRouter();
  console.log(router.query);

  return (
    <React.Fragment>
      <Center watermark={router.query?.watermark as string} />
      <InlineStyle />
    </React.Fragment>
  );
};
export default Shot;
