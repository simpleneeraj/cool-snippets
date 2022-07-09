import React from "react";
import Button from "element/button";
import useShare from "hooks/useshare";
import ShareIos from "lib/icons/ShareIos";
import css from "styles/main.module.scss";
import IconButton from "element/button/icon";

const AppHeader = () => {
  const onShare = useShare({
    title: "Hello World",
    url: "https://www.google.com",
  });
  return (
    <div className={css.header}>
      <div className={css.controls}></div>
      <div className={css.controls}>
        <IconButton
          onClick={onShare}
          aria-label="share button"
          title="Share Icanpost"
          icon={<ShareIos size={16} />}
        />
        <Button
          aria-label="share button"
          title="Share Icanpost"
          label="Download"
        />
      </div>
    </div>
  );
};
export default AppHeader;
