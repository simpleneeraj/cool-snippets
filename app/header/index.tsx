import React from "react";
import Button from "element/button";
import useShare from "hooks/useshare";
import css from "styles/main.module.scss";
import IconButton from "element/button/icon";
import ShareOutline from "lib/icons/ShareOutline";
import Keyboard from "lib/icons/Keyboard";
import DownloadOutline from "lib/icons/DownloadOutline";
import LogoTwitter from "lib/icons/LogoTwitter";

const AppHeader = () => {
  const onShare = useShare();

  const style: React.CSSProperties = {
    background: "var(--ui-transparent-2)",
    backdropFilter: "blur(15px)",
  };
  return (
    <div className={css.header}>
      <div className={css.controls}></div>
      <div className={css.controls}>
        <IconButton
          onClick={onShare}
          aria-label="share button"
          title="Share Icanpost"
          icon={<ShareOutline size={16} />}
          style={style}
        />
        <IconButton
          aria-label="share button"
          title="Share Icanpost"
          style={style}
          icon={<DownloadOutline size={16} />}
        />
        <IconButton
          aria-label="share button"
          title="Share Icanpost"
          style={style}
          icon={<LogoTwitter size={16} />}
        />
        <Button
          aria-label="share button"
          title="Share Icanpost"
          style={style}
          icon={<Keyboard size={20} />}
          label="Keyboard"
        />
      </div>
    </div>
  );
};
export default AppHeader;
