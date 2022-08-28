import React from "react";
import Button from "element/button";
import useShare from "hooks/useshare";
import css from "styles/main.module.scss";
import IconButton from "element/button/icon";
import ShareOutline from "lib/icons/ShareOutline";
import Keyboard from "lib/icons/Keyboard";
import DownloadOutline from "lib/icons/DownloadOutline";
import LogoTwitter from "lib/icons/LogoTwitter";
import { useStore } from "react-redux";

const AppHeader = () => {
  const onShare = useShare();

  const style: React.CSSProperties = {
    background: "var(--ui-transparent-2)",
    backdropFilter: "blur(15px)",
  };

  return (
    <div className={css.header}>
      <div className={css.controls}>
        <Button
          title="Share Icanpost"
          style={style}
          icon={<Keyboard size={20} />}
          label="Keyboard"
        />
      </div>
      <div className={css.controls}>
        <IconButton
          onClick={onShare}
          title="Share Icanpost"
          icon={<ShareOutline size={16} />}
          style={style}
        />
        <IconButton
          title="Share Icanpost"
          style={style}
          icon={<DownloadOutline size={16} />}
        />
        <IconButton
          title="Share Icanpost"
          style={style}
          icon={<LogoTwitter size={16} />}
        />
      </div>
    </div>
  );
};
export default AppHeader;
