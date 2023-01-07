import Center from "editor/center";
import InlineStyle from "editor/center/inline";
import { useRouter } from "next/router";
import React from "react";
import View from "ui/view";

const Shot = () => {
  const router = useRouter();

  console.log(router.query);

  return (
    <div id="code-shot">
      <Center watermark={router.query?.watermark as string} />
      <InlineStyle />
    </div>
  );
};
export default Shot;
