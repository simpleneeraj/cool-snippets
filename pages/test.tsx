/* eslint-disable @next/next/no-img-element */
import React from "react";
import axios from "axios";

const TestScreenshotApi = () => {
  const [base64, setbase64] = React.useState("");

  const GetScreenshot = async () => {
    try {
      const { data } = await axios({
        method: "post",
        url: "/api/screenshot",
        responseType: "json",
        data: {
          url: "http://localhost:3000/shot?watermark=simple",
        },
      });
      setbase64(data.base64);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={GetScreenshot}>Get Screenshot</button>
      <img src={base64} alt="screenshot" height={"450px"} width={"450px"} />
      <a href={base64} download>
        Download This Image
      </a>
    </div>
  );
};
export default TestScreenshotApi;
