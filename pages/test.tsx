import React from "react";
import axios from "axios";
import download from "plugins/fileSaver";

const Test = () => {
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
      // console.log(data);
      setbase64(data.base64);
      download(data.base64, "screenshot.webp");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={GetScreenshot}>Get Screenshot</button>
      <img src={base64} alt="screenshot" height={"100%"} width={"100%"} />
      <a href={base64} download>
        Download This Image
      </a>
    </div>
  );
};
export default Test;
