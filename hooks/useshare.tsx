import $document from "lib/doc";
import $window from "lib/win";
import React from "react";

interface IShareData extends ShareData {}

const useShare = (data?: IShareData | undefined) => {
  const onShareContent = React.useCallback(async () => {
    try {
      const init: IShareData = {
        url: $window?.location.href,
        title: $document?.title,
      };
      console.log(init);
      await $window?.navigator.share(Object.assign(init, data));
    } catch (e) {
      console.log(e);
    }
  }, [data]);

  return onShareContent;
};
export default useShare;
