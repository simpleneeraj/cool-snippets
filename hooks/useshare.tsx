import React from "react";

const useShare = (data?: ShareData | undefined) => {
  const onShareContent = React.useCallback(async () => {
    try {
      await navigator.share(data);
    } catch (e) {
      console.log(e);
    }
  }, [data]);

  return onShareContent;
};
export default useShare;

// {
//     "ancestorOrigins": {},
//     "href": "http://localhost:3000/app",
//     "origin": "http://localhost:3000",
//     "protocol": "http:",
//     "host": "localhost:3000",
//     "hostname": "localhost",
//     "port": "3000",
//     "pathname": "/app",
//     "search": "",
//     "hash": ""
// }
