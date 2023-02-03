import React from "react";
import Center from "editor/center";
import { useRouter } from "next/router";
import InlineStyle from "editor/center/inline";
import axios from "axios";

const Shot = () => {
  const router = useRouter();

  const [base64, setbase64] = React.useState("");

  const GetScreenshot = async () => {
    try {
      const { data } = await axios({
        method: "post",
        url: "/api/screenshot",
        responseType: "json",
        data: {
          url: `${window.location.origin}/shot?watermark=simple`,
        },
      });
      setbase64(data.base64);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <React.Fragment>
      <Center watermark={router.query?.watermark as string} />
      <InlineStyle />
      <div>
        <button onClick={GetScreenshot}>Get Screenshot</button>
        <img src={base64} alt="screenshot" height={"450px"} width={"450px"} />
        <a href={base64} download>
          Download This Image
        </a>
      </div>
    </React.Fragment>
  );
};
export default Shot;
